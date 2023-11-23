import { useState } from "react"
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
  }

  return (
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
  )
}

export default App
