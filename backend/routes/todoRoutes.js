import express from 'express'
import { createTodo, getTodos } from '../controller/todoController.js'

const todoRoute = express.Router()

todoRoute.post('/', createTodo)

todoRoute.get('/getTodos', getTodos)


export default todoRoute