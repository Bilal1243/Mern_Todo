import express from 'express'
import connectDb from './config/db.js'
import todoRoute from './routes/todoRoutes.js'
import cors from 'cors'
import userRoute from './routes/userRoutes.js'

const app = express()

connectDb()

let port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

// app.get(route , handler)

app.use('/api/todo', todoRoute)
app.use('/api/user', userRoute)


app.listen(port, () => console.log('server started successfully'))