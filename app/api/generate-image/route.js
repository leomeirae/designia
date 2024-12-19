import { db } from '@/config/db';
import { Users } from '@/config/schema';
import { eq } from 'drizzle-orm';

export async function POST(req) {
    try {
        const { user, ...imageData } = await req.json();
        
        // Verificar créditos do usuário
        const userRecord = await db.select()
            .from(Users)
            .where(eq(Users.email, user.email))
            .limit(1);

        if (!userRecord[0] || userRecord[0].credits <= 0) {
            return NextResponse.json(
                { error: 'Créditos insuficientes' },
                { status: 403 }
            );
        }

        // ... resto do código de geração de imagem ...
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
} 