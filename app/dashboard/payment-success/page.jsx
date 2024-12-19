"use client";
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const payment_intent = searchParams.get('payment_intent');

  useEffect(() => {
    if (payment_intent) {
      // Aqui você pode verificar o status do pagamento
      // e atualizar os créditos do usuário
      setTimeout(() => {
        router.push('/dashboard');
      }, 5000);
    }
  }, [payment_intent]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Pagamento Processado com Sucesso!</h1>
      <p>Seus créditos foram adicionados à sua conta.</p>
      <p className="text-sm mt-4">Redirecionando para o dashboard...</p>
    </div>
  );
} 