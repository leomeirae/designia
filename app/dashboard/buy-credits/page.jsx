"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { Button } from '@/components/ui/button';
import { db } from '@/config/db';
import { Users } from '@/config/schema';
import { useRouter } from 'next/navigation';
import React, { useContext, useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './_components/PaymentForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function BuyCredits() {
    const creditsOption=[
        {
          credits:5,
          amount:5.99
        },
        {
          credits:10,
          amount:9.99
        },
        {
          credits:25,
          amount:19.99
        },
        {
          credits:50,
          amount:29.99
        },
        {
          credits:100,
          amount:49.99
        },
    ]
    
    const [selectedOption, setSelectedOption] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
    const router = useRouter();

    useEffect(() => {
        if (selectedOption?.amount) {
            createPaymentIntent();
        }
    }, [selectedOption]);

    const createPaymentIntent = async () => {
        try {
            const response = await fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    amount: selectedOption.amount,
                    credits: selectedOption.credits
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create payment intent');
            }

            const data = await response.json();
            setClientSecret(data.clientSecret);
        } catch (error) {
            console.error("Error:", error);
            // Adicione aqui tratamento de erro para o usuário
        }
    };

    const appearance = {
        theme: 'flat',
        variables: {
            colorPrimary: '#7f57f1',
            colorBackground: '#ffffff',
            colorText: '#1a1a1a',
            colorDanger: '#df1b41',
        }
    };

    return (
        <div>
            <h2 className='font-bold text-xl md:text-2xl'>Adquirir Créditos</h2>
            <p>Desbloqueie infinitas posibilidades...</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5 mt-5 md:mt-10'>
                {creditsOption.map((item,index)=>(
                    <div key={index} className={`flex flex-col gap-2 justify-center items-center border shadow-md rounded-lg p-3 md:p-5
                        ${selectedOption?.credits==item.credits ? 'border-primary' : ''}
                    `}>
                        <h2 className='font-bold text-2xl md:text-3xl'>{item.credits}</h2>
                        <h2 className='font-medium text-lg md:text-xl'>Créditos</h2>
                        <Button 
                            className="w-full" 
                            onClick={()=>setSelectedOption(item)}
                        >
                            Selecionar
                        </Button>
                        <h2 className='font-medium text-primary'>R${item.amount}</h2>
                    </div>
                ))}
            </div>

            {clientSecret && (
                <div className='mt-8 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg'>
                    <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                        <PaymentForm 
                            clientSecret={clientSecret}
                            selectedOption={selectedOption}
                        />
                    </Elements>
                </div>
            )}
        </div>
    );
}

export default BuyCredits;