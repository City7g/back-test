import express from 'express'
import cryptoRoute from './routes/crypto.js'

const app = express()
const port = 8000

app.use('/crypto', cryptoRoute)

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
