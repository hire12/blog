// import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;

// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma



// src/lib/db.ts
import { PrismaClient } from '@prisma/client';

// Create a PrismaClient instance only once to prevent multiple connections in development
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// TypeScript global declaration to ensure Prisma instance is available globally in development
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// Using the singleton pattern to reuse Prisma client in development
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// Assign the Prisma instance to global scope in development to avoid multiple instances
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

export default prisma;
