import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body

    try {
      const subscriber = await prisma.subscriber.create({
        data: {
          email,
        },
      })
      res.status(201).json(subscriber)
    } catch (error) {
      console.error('Error creating subscriber:', error)
      res.status(500).json({ error: 'Failed to subscribe' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
