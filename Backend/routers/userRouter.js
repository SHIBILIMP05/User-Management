import express from 'express'
import { signupDetail, starting } from '../controller/userController.js'

export const userRouter = express.Router()

userRouter.get('/',starting)
userRouter.post('/signup',signupDetail)
