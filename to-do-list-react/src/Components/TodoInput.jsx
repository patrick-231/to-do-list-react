import React from "react";

const TodoInput = ({ todoInput, setTodoInput, addTodo }) => {
  return (
    <div className="flex shadow bg-white p-2 w-3/5 m-auto justify-center">
      <input
        id="todo-input"
        className="w-full rounded text-gray-700 p-2"
        type="text"
        placeholder="Write your to-do..."
        maxLength="50"
        required
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodo();
        }}
      />
      <div
        onClick={addTodo}
        className="bg-green-500 hover:bg-green-400 rounded text-white p-2 pl-5 pr-5 cursor-pointer"
      >
        <span className="font-semibold text-teal-100 text-sm cursor-pointer">
          Add
        </span>
      </div>
    </div>
  );
};

export default TodoInput;
