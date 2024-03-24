import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import TodoItemsList from "./Components/TodoItemsList";
import Counter from "./Components/Counter";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [uncheckedCount, setUncheckedCount] = useState(0);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
      setItemCount(todos.length);
      setUncheckedCount(countUnchecked(todos));
    }
  }, []);

  const countUnchecked = (todos) => {
    return todos.filter((t) => !t.checked).length;
  };

  const addTodo = () => {
    if (!todoInput.trim()) {
      alert("Your TODO title is missing");
      return;
    }
    let newTodo = [...todos, { title: todoInput, checked: "" }];

    setTodos(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));

    setItemCount(newTodo.length);
    setUncheckedCount(countUnchecked(newTodo));

    setTodoInput("");
  };

  const checkTodo = (todo) => {
    todo.checked = !todo.checked ? "checked" : "";

    const updatedTodos = todos.map((t) => {
      if (t === todo) {
        return { ...t, checked: todo.checked };
      }
      return t;
    });

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    setUncheckedCount(countUnchecked(updatedTodos));
  };

  const deleteTodo = (todo) => {
    const index = todos.indexOf(todo);
    todos.splice(index, 1);

    localStorage.setItem("todos", JSON.stringify(todos));

    setItemCount(todos.length);
    setUncheckedCount(countUnchecked(todos));
  };

  return (
    <div className="container mx-auto px-4">
      <Header />
      <TodoInput
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        addTodo={addTodo}
      />
      <TodoItemsList
        todos={todos}
        checkTodo={checkTodo}
        deleteTodo={deleteTodo}
      />
      <Counter itemCount={itemCount} uncheckedCount={uncheckedCount} />

      <div className="flex justify-center text-white font-semibold underline">
        <button>
          <a href="./index.html">DONE</a>
        </button>
      </div>
    </div>
  );
};

export default App;
