import express from 'express'

const router = express.Router()

router.get('/balance', (req, res) => {
  const balance = 1000

  res.json({ balance })
})

export default router
