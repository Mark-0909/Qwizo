import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; // Correct import for PrismaClient
import bcrypt from 'bcryptjs';

const prismaClient = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password, userType } = await req.json();

    if (!email || !password || !userType) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Check if the email already exists in the database
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Email is already in use' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user in the database
    const newUser = await prismaClient.user.create({
      data: {
        email: email,
        password: hashedPassword,
        userType: userType,
        emailVerified: false,
      },
    });

    return NextResponse.json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'User creation failed' }, { status: 500 });
  }
}
