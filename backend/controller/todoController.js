import Todos from "../models/todoModel.js";


let createTodo = async (req, res) => {
    try {

        let { title, description } = req.body

        let todo = await Todos.create({
            title,
            description
        })

        res.json(todo)
    } catch (error) {
        console.log(error)
    }
}



let getTodos = async (req, res) => {
    try {

        let todos = await Todos.find()

        console.log(todos)

        res.json(todos)

    } catch (error) {
        console.log(error)
    }
}




export { createTodo, getTodos }
