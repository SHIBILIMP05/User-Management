import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/mongoAuth.js'
import {userRouter} from './routers/userRouter.js'
import {adminRouter} from './routers/adminRouter.js'

dotenv.config()
connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}))

app.use('/', userRouter)
app.use('/admin',adminRouter)

app.listen(5000, () => {
    console.log("server is running...");
})

export default app