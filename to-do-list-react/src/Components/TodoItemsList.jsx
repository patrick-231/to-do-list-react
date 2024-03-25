import React from "react";
import TodoItem from "./TodoItem";

const TodoItemsList = ({ todos, checkTodo, deleteTodo }) => {
  return (
    <div id="todo-list">
      {todos &&
        todos.map((todo, index) => (
          <div key={index}>
            <TodoItem
              todo={todo}
              checkTodo={() => checkTodo(todo)}
              deleteTodo={() => deleteTodo(todo)}
            />
          </div>
        ))}
    </div>
  );
};

export default TodoItemsList;
