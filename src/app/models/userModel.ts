import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); 

export async function createUser(email: string, password: string, userType: string) {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        userType,
      },
    });
    return user;
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
  });
}

export async function getUserById(id: string) {
  return await prisma.user.findUnique({
    where: { id },
  });
}

export async function updateUser(id: string, data: Partial<{ email: string; password: string; userType: string }>) {
  return await prisma.user.update({
    where: { id },
    data,
  });
}

export async function deleteUser(id: string) {
  return await prisma.user.delete({
    where: { id },
  });
}
