import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import {router} from './routes/router'

dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('dev'))

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to Noot Website'
})
app.use('/',router);
})
// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`)
})
export default app