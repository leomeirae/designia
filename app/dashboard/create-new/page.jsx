"use client"
import React, { useContext, useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/config/firebaseConfig'
import { useUser } from '@clerk/nextjs'
import CustomLoading from './_components/CustomLoading'
import AiOutputDialog from '../_components/AiOutputDialog'
import { db } from '@/config/db'
import { Users } from '@/config/schema'
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { eq } from 'drizzle-orm'

function CreateNew() {

  const {user}=useUser();
  const [formData,setFormData]=useState([]);
  const [loading,setLoading]=useState(false);
  const [aiOutputImage,setAiOutputImage]=useState()
  const [openOutputDialog,setOpenOutputDialog]=useState(false);
  const [orgImage,setOrgImage]=useState();
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  // const [outputResult,setOutputResult]=useState();
  const router = useRouter()

  const onHandleInputChange=(value,fieldName)=>{
    setFormData(prev=>({
      ...prev,
      [fieldName]:value
    }))

    console.log(formData);
  }

  const GenerateAiImage=async()=>{
    // Verificar se o usuário tem créditos suficientes
    if (!userDetail?.credits || userDetail.credits <= 0) {
      toast({
        title: "Créditos insuficientes",
        description: "Você precisa comprar mais créditos para continuar usando o aplicativo.",
        variant: "destructive",
      });
      router.push('/dashboard/buy-credits');
      return;
    }

    // Verificar se todos os campos obrigatórios foram preenchidos
    if (!formData.image || !formData.roomType || !formData.designType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const rawImageUrl=await SaveRawImageToFirebase();
    const result=await axios.post('/api/redesign-room',{
      imageUrl:rawImageUrl,
      roomType:formData?.roomType,
      designType:formData?.designType,
      additionalReq:formData?.additionalReq,
      userEmail:user?.primaryEmailAddress?.emailAddress
    });
    console.log(result.data);
    setAiOutputImage(result.data.result);// Output Image Url
    await updateUserCredits();

    setOpenOutputDialog(true);
   
    setLoading(false);

  }

  const SaveRawImageToFirebase=async()=>{
    // Save Raw File Image to Firebase 
    const fileName=Date.now()+"_raw.png";
    const imageRef=ref(storage,'/room-redesign/'+fileName);

    await uploadBytes(imageRef,formData.image).then(resp=>{
      console.log('File Uploaded...')
    })
    
    // Uploaded File Image URL
    const downloadUrl=await getDownloadURL(imageRef);
    console.log(downloadUrl);
    setOrgImage(downloadUrl);
    return downloadUrl;

  }

  /**
   * Update the user credits
   * @returns 
   */
  const updateUserCredits=async()=>{
    try {
        const result = await db.transaction(async (tx) => {
            // Primeiro verifica se ainda tem créditos
            const user = await tx.select()
                .from(Users)
                .where(eq(Users.email, userDetail.email))
                .limit(1);

            if (!user[0] || user[0].credits <= 0) {
                throw new Error('Créditos insuficientes');
            }

            // Atualiza os créditos
            const updated = await tx.update(Users)
                .set({ credits: user[0].credits - 1 })
                .where(eq(Users.email, userDetail.email))
                .returning({ id: Users.id, credits: Users.credits });

            return updated[0];
        });

        setUserDetail(prev => ({
            ...prev,
            credits: result.credits
        }));

        return result.id;
    } catch (error) {
        console.error('Erro ao atualizar créditos:', error);
        throw error;
    }
  }

  return (
    <div>
        <div className="flex justify-between items-center mb-5">
            <h2 className='font-bold text-2xl md:text-4xl text-primary text-center'>
                Deixe a IA redesenhar seu ambiente
            </h2>
            <div className="flex items-center gap-2">
                <span className={`font-bold ${userDetail?.credits <= 0 ? 'text-red-500' : 'text-primary'}`}>
                    {userDetail?.credits || 0} créditos
                </span>
                {userDetail?.credits <= 1 && (
                    <Link href="/dashboard/buy-credits">
                        <Button variant="outline" size="sm">
                            Comprar mais
                        </Button>
                    </Link>
                )}
            </div>
        </div>
        <p className='text-center text-gray-500 font-bold'>Siga este passo a passo simples para criar seu design de interiores. 
          Os campos com * são obrigatórios.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-10 gap-5 md:gap-10'>
          {/* Image Selection  */}
          <ImageSelection selectedImage={(value)=>onHandleInputChange(value,'image')}/>
          {/* Form Input Section  */}
          <div>
            {/* Room type  */}
            <RoomType selectedRoomType={(value)=>onHandleInputChange(value,'roomType')}/>
            {/* Design Type  */}
            <DesignType selectedDesignType={(value)=>onHandleInputChange(value,'designType')}/>
            {/* Additonal Requirement TextArea (Optional) */}
            <AdditionalReq additionalRequirementInput={(value)=>onHandleInputChange(value,'additionalReq')}/>
            {/* Button To Generate Image  */}
            <Button className="w-full mt-5" onClick={GenerateAiImage}>Gerar</Button>
            <p className='text-sm text-gray-400 mb-52'>*1 crédito será usado para redesenhar seu ambiente</p>
          </div>
        </div>
        <CustomLoading loading={loading} />
        <AiOutputDialog aiImage={aiOutputImage} orgImage={orgImage}
        closeDialog={()=>setOpenOutputDialog(false)}
        openDialog={openOutputDialog}
        />
    </div>
  )
}

export default CreateNew