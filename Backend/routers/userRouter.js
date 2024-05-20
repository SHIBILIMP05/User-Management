import express from 'express'
import { login, signupDetail, starting, updateDetails } from '../controller/userController.js'
import { uploadOptions } from '../midleware/multer.js'

export const userRouter = express.Router()

userRouter.get('/',starting)
userRouter.post('/login',login)
userRouter.post('/signup',signupDetail)
userRouter.post('/updateProfile',uploadOptions.single('image'),updateDetails)

