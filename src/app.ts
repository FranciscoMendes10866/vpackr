import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import cookieParser from 'cookie-parser'

import AuthRouter from '@auth/auth.router'

const { NODE_ENV, CORS_ORIGIN } = process.env
const app = express()

if (NODE_ENV !== 'TESTING') app.use(morgan('dev'))

app.use(express.json())
app.use(cors({ credentials: true, origin: CORS_ORIGIN }))
app.use(helmet())
app.use(cookieParser())
app.use(compression())
app.use('/api/auth', AuthRouter)

export default app
