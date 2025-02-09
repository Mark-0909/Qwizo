import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { token } = await req.json();
    if (!token) return NextResponse.json({ message: "Token required" }, { status: 400 });

    const user = await prisma.user.findUnique({
      where: { verificationToken: token }, 
    });
    
    if (!user) return NextResponse.json({ message: "Invalid token" }, { status: 400 });

    await prisma.user.update({
      where: { id: user.id },
      data: { emailVerified: true},
    });

    return NextResponse.json({ message: "Email verified successfully!" });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
