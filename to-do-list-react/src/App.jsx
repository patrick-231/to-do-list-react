import { useState } from "react"
import Addtask from "./Components/Addtask"
import Countitem from "./Components/Countitem"
import Header from "./Components/Header"
import Newtask from "./Components/Newtask";

function App() {
  const [todos, setTodos] = useState(
    localStorage.getItem['todos'] || [
      {
        id: 1,
        title: 'Walk the dog1',
        done: false,
      },
    ]);


  return (
    <>
      <Header />
      <Addtask todos={todos} setTodos={setTodos} />
      <Newtask todos={todos} setTodos={setTodos} />
      <Countitem todos={todos} done={todos.done} />
    </>
  )
}

export default App
