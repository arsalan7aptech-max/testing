import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
    function add(){
        setCount(count+1)
    }

     function subtract(){
       setCount(count > 0 ? count - 1 : 0);
    }

     function reset(){
        setCount(0)
    }
  return (
    <>
    <div className="ml-50 mt-10">
    <h1 className='mt-8 ml-80 font-bold bg-amber-400 w-fit text px-6 py-2 rounded-full text-2xl '>Counter</h1>
    <p className='mt-5 ml-80 font-bold  bg-blue-400 w-fit px-6 py-2 rounded-full text-2xl '>Count:{count}</p>
    </div>
 
  <div className="flex justify-center gap-10 mt-40">
    <button className="bg-green-400 px-6 py-2 rounded-full text-2xl font-sans font-bold" onClick={add} >Add+</button>
    <button className="bg-red-400 px-6 py-2 rounded-full text-2xl font-sans font-bold"onClick={subtract}>Subtract-</button>
  </div>

  <div className="flex justify-center mt-8">
    <button className="bg-blue-400 px-6 py-2 rounded-full text-2xl font-sans font-bold"onClick={reset}>Reset</button>
  </div>
</>
    
  )
}

export default Counter