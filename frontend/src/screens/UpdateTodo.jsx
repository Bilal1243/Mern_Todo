import React from 'react'
import './UpdateTodo.css'

function UpdateTodo() {
  return (
    <>
      <div className="edit-container">
      <form className="edit-form">
        <input
          type="text"
          placeholder="Enter title"
        />

        <textarea
          rows={5}
          cols={10}
          placeholder="Enter description"
        ></textarea>

        <select
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>

        <button type="submit">Edit</button>
      </form>
    </div>
    </>
  )
}

export default UpdateTodo
