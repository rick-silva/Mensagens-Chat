import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
    const message = await prisma.message.findMany()

    return NextResponse.json({ message })
}