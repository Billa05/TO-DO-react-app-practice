import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/create_todo'
import { Todos } from './components/render'

function App() {

  const [todos,setTodos] = useState([]);

  fetch("http://localhost:4000/todos")
  .then(async (response)=>{
    const data = await response.json();
    setTodos(data.todos);
  })


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
