import { useState, useEffect } from "react";
import "./HomeScreen.css";
import BackendInstance from "../Axios";
import { useNavigate } from "react-router-dom";
import {
  useGetTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
} from "../slices/todoApiSlice";

function HomeScreen() {
  // let [state,updateState] = useState(initialValue)

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  const navigate = useNavigate();

  const { data: todos, refetch } = useGetTodosQuery();

  const [createTodo] = useCreateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      await createTodo({ title, description });

      setTitle("");
      setDescription("");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await deleteTodo(id);

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="delete-btn">Logout</button>

      <div className="container">
        <div className="form-container">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              rows={5}
              cols={10}
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button type="submit">Add</button>
          </form>
        </div>

        <div className="todos-container">
          {todos?.map((todo) => (
            <div className="box todo-card" key={todo._id}>
              <h1 className={todo.status ? "completed" : "todo-title"}>
                {todo.title}
              </h1>
              <p className="todo-description">{todo.description}</p>
              <div className="button-group">
                <button
                  className="delete-btn"
                  onClick={() => deleteHandler(todo._id)}
                >
                  Delete
                </button>
                {!todo.status && (
                  <button
                    className="edit-btn"
                    onClick={() => navigate(`/edit/${todo._id}`)}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
