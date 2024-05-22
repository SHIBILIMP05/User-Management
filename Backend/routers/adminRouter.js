import express from 'express'
import { deleteData, fetchData } from '../controller/adminController.js'


export const adminRouter = express.Router()

 adminRouter.get('/getData',fetchData)
 adminRouter.post('/delete/:Id',deleteData)

 

 