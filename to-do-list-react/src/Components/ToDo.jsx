

const ToDo = ({ todo, toggleCompletion, deleteTask }) => {
  console.log(todo);
  return (
    <div>
      <div className="todo-container text-gray-700 text-center flex justify-center align-center mt-2 w-3/5 m-auto">
        <div className="flex justify-between bg-white shadow mb-2 w-full rounded">
          {/* <h3>{todo.title}</h3>
        <label htmlFor={`todo_${todo.id}`}>Done?</label> */}
          <input
            id={`todo_${todo.id}`}
            name={todo.title}
            type='checkbox'
            value={todo.title}
            checked={todo.done}
            onChange={() => toggleCompletion(todo.id)}
            className="ml-4"
          />
          <span className={`w-full text-left leading-loose py-2 pl-6 cursor-pointer font-medium ${todo.done ? 'line-through' : ''}`}>{todo.title}</span>
          <div className="close-btn px-6 py-2 text-m cursor-pointer bg-black text-white font-semibold rounded" onClick={() => deleteTask(todo.id)}>Delete</div>
        </div>
      </div>
    </div>
  )
}

export default ToDo
