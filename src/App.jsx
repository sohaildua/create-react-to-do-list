import React, { useState } from "react"
import "./style.css"

function App() {
  const [newTodoName, setNewTodoName] = useState("")
  const [todos, setTodos] = useState([])

  function addNewTodo() {
    if (newTodoName === "") return
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ]
    })
    setNewTodoName("")
  }
  function toggleTodoCompleted(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos?.map((todo) => {
        if (todo.id === id) return { ...todo, completed }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }

  return (
    <React.Fragment>
      <ul id="list">
        {todos?.map((todo) => {
          return (
            <li key={todo.id} className="list-item">
              <label className="list-item-label">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  data-list-item-checkbox
                  onChange={(e) =>
                    toggleTodoCompleted(todo.id, e.target.checked)
                  }
                />
                <span data-list-item-text>{todo.name}</span>
              </label>
              <button
                data-button-delete
                onClick={() => {
                  deleteTodo(todo.id)
                }}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>

      <div id="new-todo-form">
        {JSON.stringify(todos)}
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </React.Fragment>
  )
}

export default App
