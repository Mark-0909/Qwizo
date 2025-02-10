import { SignupFormSchema, FormState } from '@/app/api/lib/definitions';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // Initialize Prisma Client

export async function signup(state: FormState, formData: FormData) {
  // Extract userType manually (since it's not validated in zod schema)
  const userType = formData.get('userType') as string;

  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  // Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Insert the user into the database using Prisma
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        userType, // Store userType in database
      },
    });

    return {
      message: 'Account successfully created!',
      userId: user.id,
    };
  } catch (error) {
    return {
      message: 'Database error: Unable to create account.',
      error: (error as Error).message || 'Unknown error occurred',
    };
  }
  
}
