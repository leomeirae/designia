"use client"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PaymentForm({ clientSecret, selectedOption }) {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/dashboard/payment-success`,
                payment_method_data: {
                    billing_details: {
                        // Você pode adicionar detalhes do cliente aqui se necessário
                    }
                }
            },
        });

        if (error) {
            setMessage(error.message);
            setIsProcessing(false);
        }
        // O redirecionamento é automático em caso de sucesso
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <PaymentElement 
                options={{
                    layout: "tabs",
                    defaultValues: {
                        billingDetails: {
                            // Pré-preencher com dados do usuário se disponível
                        }
                    }
                }}
            />
            <div className="mt-6">
                <Button
                    type="submit"
                    disabled={isProcessing || !stripe || !elements}
                    className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600"
                >
                    {isProcessing ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin mr-2">⚪</div>
                            Processando...
                        </div>
                    ) : (
                        `Pagar R$ ${selectedOption.amount}`
                    )}
                </Button>
            </div>
            {message && (
                <div className="mt-4 p-4 bg-red-50 text-red-500 text-center rounded-md">
                    {message}
                </div>
            )}
        </form>
    );
} 