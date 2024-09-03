import express from 'express'
import { PrismaClient } from '@prisma/client'
import cryptoRoute from './routes/crypto.js'

const app = express()
const port = 8000
const prisma = new PrismaClient()

app.use('/crypto', cryptoRoute)

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
