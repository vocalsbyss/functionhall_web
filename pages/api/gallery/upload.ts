import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import formidable from 'formidable'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // TODO: Add authentication check for admin

    const form = formidable({ uploadDir: path.join(process.cwd(), 'public/uploads'), keepExtensions: true })

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Form parse error:', err)
        return res.status(500).json({ error: 'File upload failed' })
      }

      const file = files.file as formidable.File
      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' })
      }

      const url = `/uploads/${path.basename(file.filepath)}` // Placeholder URL

      try {
        const photo = await prisma.galleryPhoto.create({
          data: {
            url,
            caption: fields.caption ? String(fields.caption) : null,
          },
        })
        res.status(201).json(photo)
      } catch (error) {
        console.error('Error saving photo:', error)
        res.status(500).json({ error: 'Failed to save photo' })
      }
    })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
