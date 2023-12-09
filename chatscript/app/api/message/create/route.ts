import { prisma } from "@/lib/prisma"
import { randomUUID } from "crypto"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

interface MessageProps {
    title: string
    content: string
    id: string
}

export async function POST(request: NextRequest) {

    const messageSchema = z.object({
        id: z.string(),
        title: z.string(),
        content: z.string(),
    })

    const { content, id, title } = messageSchema.parse(await request.json())

    await prisma.message.create({
        data: {
            id: randomUUID(),
            title,
            content,
            Category: {
                connect: {
                    id
                }
            }
        }
    })

    return NextResponse.json('success')
}