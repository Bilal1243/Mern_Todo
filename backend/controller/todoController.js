import Todos from "../models/todoModel.js";

let createTodo = async (req, res) => {
  try {
    let { title, description , userId } = req.body;

    let todo = await Todos.create({
      title,
      description,
      userId
    });

    res.json(todo);
  } catch (error) {
    console.log(error);
  }
};

let getTodos = async (req, res) => {
  try {
    let todos = await Todos.find({ userId: req.query.userId });

    res.json(todos);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todos.findByIdAndDelete(req.params.id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not founded" });
    }

    return res.json({ message: "deleted" });
  } catch (error) {
    console.log(error);
  }
};

const getTodoById = async (req, res) => {
  try {
    let { id } = req.query;

    const todo = await Todos.findById(id);

    res.json(todo);
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    let { title, description, isCompleted } = req.body;

    let updatedTodo = await Todos.findByIdAndUpdate(req.body.id, {
      title,
      description,
      isCompleted,
    });

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not founded" });
    }

    return res.json({ message: "Todo updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

export { createTodo, getTodos, deleteTodo, updateTodo, getTodoById };
