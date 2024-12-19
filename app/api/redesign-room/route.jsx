import { db } from "@/config/db";
import { storage } from "@/config/firebaseConfig";
import { AiGeneratedImage } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import { eq } from "drizzle-orm";
import { Users } from "@/config/schema";

const replicate = new Replicate({
    auth:process.env.NEXT_PUBLICK_REPLICATE_API_TOKEN
});

export async function POST(req){
    const {imageUrl,roomType,designType,additionalReq,userEmail}=await req.json();

    try{
        // Primeiro, verificar os créditos do usuário
        const userRecord = await db.select()
            .from(Users)
            .where(eq(Users.email, userEmail))
            .limit(1);

        if (!userRecord[0] || userRecord[0].credits <= 0) {
            return NextResponse.json(
                { error: 'Créditos insuficientes' },
                { status: 403 }
            );
        }

        const input = {
            image: imageUrl,
            prompt: 'A '+roomType+' with a '+designType+" style interior "+additionalReq,
            negative_prompt: "lowres, watermark, banner, logo, watermark, contactinfo, text, deformed, blurry, blur, out of focus, out of frame, surreal, extra, ugly, upholstered walls, fabric walls, plush walls, mirror, mirrored, functional, realistic"
        };

        const output = await replicate.run(
            "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", 
            { input }
        );    

        if (!output || typeof output !== 'string') {
            throw new Error('Falha ao gerar a imagem');
        }

        // Converter Output Url para BASE64 Image 
        const base64Image = await ConvertImageToBase64(output);
        
        // Salvar Base64 no Firebase 
        const fileName = Date.now()+'.png';
        const storageRef = ref(storage,'room-redesign/'+fileName);
        await uploadString(storageRef, base64Image, 'data_url');
        const downloadUrl = await getDownloadURL(storageRef);

        // Atualizar créditos e salvar imagem em uma única transação
        const dbResult = await db.update(Users)
            .set({ 
                credits: userRecord[0].credits - 1 
            })
            .where(eq(Users.email, userEmail))
            .returning({ credits: Users.credits });

        // Salvar a imagem gerada
        await db.insert(AiGeneratedImage).values({
            roomType: roomType,
            designType: designType,
            orgImage: imageUrl,
            aiImage: downloadUrl,
            userEmail: userEmail
        });

        // Retornar resultado com os créditos atualizados
        return NextResponse.json({
            result: downloadUrl,
            updatedCredits: dbResult[0].credits
        });
        
    } catch(error) {
        console.error('Erro ao gerar imagem:', error);
        return NextResponse.json(
            { error: error.message || 'Erro ao gerar imagem' },
            { status: 500 }
        );
    }
}

async function ConvertImageToBase64(imageUrl){
    const resp=await axios.get(imageUrl,{responseType:'arraybuffer'});
    const base64ImageRaw=Buffer.from(resp.data).toString('base64');

    return "data:image/png;base64,"+base64ImageRaw;
}