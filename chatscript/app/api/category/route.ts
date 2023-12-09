import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const category = await prisma.category.findMany()

    return NextResponse.json(category)
}