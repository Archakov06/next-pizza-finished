import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generatePizza = (productId: number, type: number, size: number) => {
  return {
    productId,
    size,
    type,
    price: randomNumber(190, 600),
    carbs: randomNumber(10, 30),
    fats: randomNumber(5, 15),
    kcal: randomNumber(180, 300),
    proteins: randomNumber(20, 45),
    weight: randomNumber(400, 650),
  };
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User',
        phone: '79992222222',
        phoneVerified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        phone: '79991111111',
        phoneVerified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'Пепперони фреш',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
        active: true,
      },
      {
        name: 'Сырная',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
        active: true,
      },
      {
        name: 'Чоризо фреш',
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
        active: true,
      },
    ],
  });

  await prisma.pizza.createMany({
    data: [
      generatePizza(1, 1, 20),
      generatePizza(1, 2, 30),
      generatePizza(1, 3, 40),

      generatePizza(2, 1, 20),
      generatePizza(2, 2, 30),
      generatePizza(2, 3, 40),

      generatePizza(3, 1, 20),
      generatePizza(3, 2, 30),
      generatePizza(3, 3, 40),
    ],
  });

  await prisma.ingredient.createMany({
    data: [
      {
        name: 'Сырный бортик',
        price: 179,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
      },
      {
        name: 'Сливочная моцарелла',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
      },
      {
        name: 'Сыры чеддер и пармезан',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
      },
      {
        name: 'Острый перец халапеньо',
        price: 59,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
      },
      {
        name: 'Нежный цыпленок',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
      },
      {
        name: 'Шампиньоны',
        price: 59,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
      },
      {
        name: 'Бекон',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
      },
      {
        name: 'Ветчина',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
      },
      {
        name: 'Пикантная пепперони',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
      },
      {
        name: 'Острая чоризо',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
      },
      {
        name: 'Маринованные огурчики',
        price: 59,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
      },
      {
        name: 'Свежие томаты',
        price: 59,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
      },
      {
        name: 'Красный лук',
        price: 59,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
      },
      {
        name: 'Сочные ананасы',
        price: 59,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
      },
      {
        name: 'Итальянские травы',
        price: 39,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
      },
      {
        name: 'Сладкий перец',
        price: 59,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
      },
      {
        name: 'Кубики брынзы',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
      },
      {
        name: 'Митболы',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
      },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
      },
      {
        userId: 2,
        totalAmount: 0,
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      pizzaId: 1,
      cartId: 1,
      userId: 1,
      quantity: 1,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Pizza" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
