import express from 'express'
import { starting } from '../controller/userController'

export const userRouter = express.Router()

userRouter.get('/',starting)

// export default userRouter