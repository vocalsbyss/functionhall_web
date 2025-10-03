import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const photos = await prisma.galleryPhoto.findMany({
        orderBy: { uploadedAt: 'desc' },
      })
      res.status(200).json(photos)
    } catch (error) {
      console.error('Error fetching gallery photos:', error)
      res.status(500).json({ error: 'Failed to fetch gallery photos' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
