import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await prisma.$connect()
    res.status(200).json({ message: 'Database connected ✅' })
  } catch (error) {
    console.error('DB connection failed ❌', error)
    res.status(500).json({ message: 'Database connection failed ❌' })
  } finally {
    await prisma.$disconnect()
  }
}
