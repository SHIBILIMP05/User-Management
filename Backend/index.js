import express from 'express'
import cors from 'cors'
import { connectDB } from './config/mongoAuth.js'
import {userRouter} from './routers/userRouter.js'

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

app.listen(5000, () => {
    console.log("server is running...");
})

export default app