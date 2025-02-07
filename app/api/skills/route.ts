import { Skill } from "@/app/models/Skill";
import { NextResponse } from "next/server";

//@ts-ignore
let skills: Skill = []

export async function GET() {
    return NextResponse.json(skills);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (!body.title) {
            return NextResponse.json({ error: 'Поле title обязательно' }, { status: 400 })
        }

        const newSkill: Skill = {
            id: new Date().toISOString(),
            title: body.title || '',
            dis: body.title || ''
        }
        //@ts-ignore
        skills.push(newSkill);

        return NextResponse.json(newSkill, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Ошибка при обработке запроса' }, { status: 500 })
    }
}