import React, { useState } from 'react'

function UseState6() {

  
  // let [val3,fnc1] = useState(['pehla','dusra','thisra','4tha','5nchwa','chata','7thwa','8hwa'])
  let [val3,fnc1] = useState([1,2,3,40,50,60,70])

  //index <= length -3
  // 0 <= 4  1
  // 1 <= 4  2
  // 2 <= 4  3
  // 3 <= 4  4
  // 4 <= 4  5
  // 5 <= 4  6
  // 6 <= 4  7

  return (
    <>
    <div className='p-10 bg-zinc-400 '>
    {val3.map((item)=>(
        <h1>
          {item}
        </h1>
        
    ))}
    <button onClick={()=>fnc1(([...val3,7]))  } 
    
    
    className='p-3 bg-blue-900'>
      multiply numbers
    
    </button>
   </div>
   
    
    </>
  )
}

export default UseState6

