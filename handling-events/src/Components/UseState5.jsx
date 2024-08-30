import React, { useState } from 'react'

function UseState5() {

  let [val3,fnc1] = useState(['pehla','dusra','thisra','4tha','5nchwa','chata','7thwa','8hwa'])
  return (

  
   <>
   
   <div className='p-10 bg-zinc-400 '>
    {val3.map((item)=>(
        <h1>
          {item}
        </h1>
    ))}
    <button onClick={()=>fnc1(()=>{
      return val3.filter((index)=>index != val3.length-1)
    })  } 
    
    
    className='p-3 bg-blue-900'>multiply numbers
    
    </button>
   </div>
   
   </>
  )
}

export default UseState5
