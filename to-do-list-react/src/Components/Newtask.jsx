import ToDo from "./ToDo";

const Newtask = ({ todos, setTodos }) => {
    const toggleCompletion = (id) => {
        setTodos((prev) => 
            prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
        );
    };

    const deleteTask = (id) => {
        setTodos((prev) =>
            prev.filter((t) => t.id !== id  )
        );
    };


    return (
        <div>
            {/* <div className="todo-container text-gray-700 text-center flex justify-center align-center mt-2 w-3/5 m-auto">
                <div className="flex justify-between bg-white shadow mb-2 w-full rounded"> */}

                    {todos.map((todo) => (
                        <ToDo
                            key={todo.id}
                            todo={todo}
                            toggleCompletion={toggleCompletion}
                            deleteTask={deleteTask}
                        />
                    ))}

                    {/* <span className="w-full text-left leading-loose py-2 pl-6 cursor-pointer font-medium">{todos.title}</span>
                    <div className="close-btn px-6 py-2 text-m cursor-pointer bg-black text-white font-semibold rounded">Delete</div>
                </div>
            </div> */}
        </div>
    );
};

export default Newtask


{/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-trash-check" /> */ }