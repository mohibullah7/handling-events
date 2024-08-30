import React, { useState } from 'react'

function UseState4() {

  const [value, fnc] = useState([1,2,3,4,5,6])
  return (
    <>
    
    <div className='p-10 bg-zinc-400'>
        {value.map((item)=>(
            <h1>
              {item}
            </h1>
        ))}
        <button onClick={()=>fnc(()=>{
          
         return value.filter((item,indexx)=> indexx!=value.length-1)  }
      
      )} className='p-3 bg-blue-600 '>Remove one </button>
    </div>
    
    
    
    </>
  )
}

export default UseState4
