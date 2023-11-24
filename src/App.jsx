import React, { useState } from "react"
import "./style.css"
import { TodoItem } from "./TodoItem"

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
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodoCompleted={toggleTodoCompleted}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>

      <div id="new-todo-form">
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
