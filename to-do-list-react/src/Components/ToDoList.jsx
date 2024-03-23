import React, { useState } from 'react'

export default 

function ToDoList() {
   
    const[tasks, setTasks] = useState(["Eat"]);
    const[newTask, setNewask] = useState("");

    function handleInputChange (event){
        setNewask(event.target.value);
    }
  function addTask(){
    if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewask("")
    
    }
    
  }
  function deleteTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

  }
  
    return (
        
<div className=' to-do-list className="flex m-auto mt-10 justify-center p-2 bg-gray-300 w-3/5 "'>
        <h1>To-Do-List</h1>
    
    <div className='flex justify-between'>
        <input className='rounded text-gray-700 p-4 justify-center align-center w-full ' 
        type="text" 
        placeholder="Enter a Task"
        value={newTask}
        onChange={handleInputChange}/>
        <button className='add-butto spanAdd bg-green-500 p-4 justify-center rounded text-white px-8 cursor-pointer font-semibold'
        onClick={addTask}>
            Add
            
        </button>
    </div>
    <ol>
        {tasks.map((task, index) =>
        
        <li key={index}>
            <div className='flex justify-between'>
            <span className='text'>{task}</span>
            <button
            className='delete-button spanAdd bg-red-500 p-4 flex justify-end rounded text-white px-6 cursor-pointer font-semibold'
            onClick={() => deleteTask(index)}>
                Delete
            </button>


            </div>
           
        </li>
        )}
    </ol>
</div>);
}

