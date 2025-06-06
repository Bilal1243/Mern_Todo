import express from 'express'
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from '../controller/todoController.js'

const todoRoute = express.Router()

todoRoute.post('/', createTodo)

todoRoute.get('/getTodos', getTodos)

todoRoute.get('/getTodoById' , getTodoById)

todoRoute.patch('/updatetodo', updateTodo)

todoRoute.delete('/:id', deleteTodo)


export default todoRoute