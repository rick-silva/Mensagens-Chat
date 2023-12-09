import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {

    const id: string = params.id

    const category = await prisma.category.findMany({
        where: {
            id: params.id
        },
        select: {
            id: true,
            title: true,
            Message: {
                select: {
                    title: true,
                    id: true,
                    content: true
                }
            }
        }
    })

    return NextResponse.json({ category })
}