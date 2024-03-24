import React from "react";

const TodoItem = ({ todo, checkTodo, deleteTodo }) => {
  return (
    <div className="todo-container text-gray-700 text-center flex justify-center align-center mt-2 w-3/5 m-auto">
      <div className="flex justify-between bg-yellow-100 shadow mb-2 w-full">
        <span
          className={`w-full text-left leading-loose p-2 pl-10 cursor-pointer ${todo.checked}`}
          onClick={() => checkTodo(todo)}
        >
          {todo.title}
        </span>
        <div
          className="close-btn p-2 pr-8 text-xl cursor-pointer before:content-['\00D7']"
          onClick={() => deleteTodo(todo)}
        ></div>
      </div>
    </div>
  );
};

export default TodoItem;
