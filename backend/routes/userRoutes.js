import express from 'express'
import { loginUser, registerUser } from '../controller/userController.js'

const userRoute = express.Router()


userRoute.post('/', loginUser)

userRoute.post('/register' , registerUser)


export default userRoute