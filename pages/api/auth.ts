import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const ADMIN_USERNAME = 'admin' // Placeholder
const ADMIN_PASSWORD_HASH = bcrypt.hashSync('password', 10) // Placeholder hash for 'password'
const JWT_SECRET = 'your-jwt-secret' // Placeholder

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body

    if (username === ADMIN_USERNAME && bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
      const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' })
      res.status(200).json({ token })
    } else {
      res.status(401).json({ error: 'Invalid credentials' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
