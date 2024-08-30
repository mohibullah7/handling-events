import React from 'react'
import { useState } from "react";


function UseState3() {

  const [val, passed] = useState({ name: "Mohib khan", pass: true });


  return (
    <>
    
    <div className="flex flex-col h-screen w-full bg-zinc-300 justify-center items-center ">
        <div className="w-80 bg-zinc-200 p-10 rounded-md">
          <h2 className={`text-lg font-bold ${val.pass === false ?'text-amber-600':'text-green-600'}`}>
            {val.name}</h2>
          <p className="text-2xl">{val.pass.toString()}</p>
          <button
            onClick={()=> passed({...val, pass: !val.pass })}
            className={`${val.pass === true ? 'bg-blue-600':'bg-red-600'} px-3 py-3 mt-5 rounded-full`}
          >
            change color
          </button>
        </div>
      </div>
    
    </>
  )
}

export default UseState3
