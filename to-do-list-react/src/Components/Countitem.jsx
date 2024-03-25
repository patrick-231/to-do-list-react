const Countitem = ({ todos, done }) => {



  const uncheckedCount = (() => {
    if (done) {
      console.log('Hello')
      const a = todos.length--;
      console.log(a);
      return a;
    }
  })


  return (
    <div className="flex justify-between w-3/5 m-auto ">
      <p className="font-semibold text-xl">Item count: {todos.length} </p>
      <p className="font-semibold text-xl">Unchecked count: {uncheckedCount}</p>
    </div>
  )
}

export default Countitem
