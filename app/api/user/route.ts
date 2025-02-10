import { User } from "@/app/models/User";
import { NextResponse } from "next/server";

//@ts-ignore
let users: User = []

export async function GET() {
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const newUser: User = {
            id: new Date().toISOString(),
            name: body.name || '',
            role: body.role || '',
            password: body.password || ''
        }

        //@ts-ignore
        users.push(newUser);

        return NextResponse.json(newUser, {status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Ошибка при обработке запроса'}, { status: 500 });
    }
}