import { useState } from "react";
// import Newtask from "./Newtask";

const Addtask = ({ setTodos }) => {

  const [form, setForm] = useState({
    title: '',
  });

  // const [count, setCount] = useState({
  //   totalItem: 0,
  //   unchecked: 0
  // });

  const handleForm = (e) => {
    console.log(e.target.value);
    setForm(currentform => ({ ...currentform, [e.target.name]: e.target.value }))
  }

  const addToDo = (e) => {
    console.log(form.title);
    e.preventDefault();

    if (!form.title) {
      return alert('Please fill in the Task!');
    }

    setTodos((allTodos) =>{
      const newTodos = [
      ...allTodos,
      {
        id: allTodos.length + 1,
        ...form,
      },
    ];
    
    // Const handleCount (e) => (
    // setCount((prev)=> prev.map((e) => e.target.value = newTodos.length +1 ))
    // )
    
    localStorage.setItem('todos', JSON.stringify(newTodos))
    return newTodos
  });

    setForm({
      title: ''
    });
  };

  return (
    <div className="flex m-auto mt-10 justify-center mb-6 p-2 bg-gray-300 w-3/5 ">
      <form onSubmit={addToDo} className="flex w-full">
        <input name="title" type="text" className='rounded text-gray-700 p-4 justify-center align-center w-full' value={form.title} onChange={handleForm} placeholder="Write your to-do..." />
        <button className="spanAdd bg-green-500 p-4 justify-center rounded text-white px-6 cursor-pointer font-semibold">Add</button>
      </form>
      {/* <p>Item count:{count.totalItem} </p> */}
    </div>


  )
}

export default Addtask
