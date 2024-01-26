import express from 'express'

import commentRouter from './routes/comments'

const app = express()

app.use(express.json())

const Port = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send('pong ' + new Date().toLocaleString())
})

app.use('/api/comments', commentRouter)

app.listen(Port, () => {
  console.log(`Server runing on Port ${Port}`)
})
