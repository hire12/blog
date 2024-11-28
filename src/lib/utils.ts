// import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }


// src/lib/db.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
