import express, { Request, Response, Application } from 'express'
import AppMiddleware from './app-middleware'
import AppRouter from './app.router'
import mongoose from 'mongoose'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()
const app: Application = express()


app.use(cors())
app.use(AppMiddleware)
app.use(AppRouter)

const PORT = process.env.PORT || 3001

app.get('/', (req: Request, res: Response) =>
  res.send({
    message: 'Hello',
    date: new Date(),
  })
)

try {
  mongoose.connect(process.env.DATABASE_URI ?? '')
  console.log('MONGO CONNECTION OPEN')
} catch (error) {
  console.error('MONGO CONNECTION ERROR', error)
}

try {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
  })
} catch (error) {
  console.log('error', error)
}