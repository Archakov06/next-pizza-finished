import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const cart = await prisma.cart.findFirst({
    where: {
      userId: 1,
    },
    include: {
      items: {
        include: {
          pizza: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });

  return NextResponse.json(cart);
}
