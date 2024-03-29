import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient({
    // log: ['query', 'info', 'warn', 'error'],
    log: [],
  });
};

export const prisma = prismaClientSingleton();
