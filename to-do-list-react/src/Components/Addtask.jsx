
const Addtask = () => {
//  const addBtn = document.querySelector('.spanAdd');

// const outer = () => {
//  const inp = document.querySelector('input');
//  const task = inp.innerHTML;
//  return console.log(task);
// }
// outer();

const Addtaskbtn = (newTask)=>{
  return <div className="todo-container text-gray-700 text-center flex justify-center align-center mt-2 w-3/5 m-auto">
  <div className="flex justify-between bg-yellow-100 shadow mb-2 w-full">
    <span className="w-full text-left leading-loose p-2 pl-10 cursor-pointer" onClick="checkTodo(this)">{newTask}</span>
    <div className="close-btn p-2 pr-8 text-xl cursor-pointer">Delete</div>
  </div>
</div>

};

  return (
    <div className="flex m-auto mt-10 justify-center p-2 bg-gray-300 w-3/5 ">
      <input type="text" className='rounded text-gray-700 p-4 justify-center align-center w-full 'value={newTask} onChange={handleInputChange} placeholder="Write your to-do..." /> 
      <span onClick={Addtaskbtn} className="spanAdd bg-green-500 p-4 justify-center rounded text-white px-6 cursor-pointer font-semibold">Add</span>      
    </div>
    
  )
}

export default Addtask
