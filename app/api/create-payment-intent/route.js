import { NextResponse } from "next/server";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        
        if (!body.amount || !body.credits) {
            return NextResponse.json(
                { error: 'Missing required fields: amount and credits' }, 
                { status: 400 }
            );
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(body.amount * 100),
            currency: 'brl',
            metadata: {
                credits: body.credits,
            },
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return NextResponse.json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: error.message }, 
            { status: 400 }
        );
    }
} 