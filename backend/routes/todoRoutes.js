import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "../controller/todoController.js";
import { protect } from "../middlewares/authMiddleware.js";

const todoRoute = express.Router();

todoRoute.post("/",protect, createTodo);

todoRoute.get("/getTodos", protect, getTodos);

todoRoute.get("/getTodoById", protect, getTodoById);

todoRoute.patch("/updatetodo", protect, updateTodo);

todoRoute.delete("/:id", protect, deleteTodo);

export default todoRoute;
