import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, desc, date } = req.body

    try {
      // Save the booked event
      const event = await prisma.event.create({
        data: {
          title,
          desc,
          date: new Date(date),
        },
      })

      // Fetch all subscribers
      const subscribers = await prisma.subscriber.findMany()

      // Trigger n8n workflow
      // n8n Webhook URL placeholder: Replace with your actual n8n webhook URL
      const n8nWebhookUrl = 'https://your-n8n-instance.com/webhook/your-webhook-id'

      // Prepare email data for n8n
      const emailData = {
        event: {
          title: event.title,
          description: event.desc,
          date: event.date.toISOString(),
        },
        subscribers: subscribers.map(sub => ({ email: sub.email })),
      }

      // Send data to n8n
      // Note: In a real setup, you would configure n8n to receive this data and handle SMTP.
      // For this example, we're using fetch to send the data to the n8n webhook.
      // n8n should be set up to:
      // 1. Receive the webhook payload
      // 2. Loop through subscribers
      // 3. Send emails using SMTP (configure SMTP credentials in n8n)
      // Example n8n workflow steps:
      // - Webhook node to receive data
      // - Function node to format email content
      // - Email node with SMTP config (e.g., Gmail, SendGrid)
      // - Loop over subscribers to send individual emails

      await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })

      res.status(201).json(event)
    } catch (error) {
      console.error('Error booking event:', error)
      res.status(500).json({ error: 'Failed to book event' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
