import React, { useState } from 'react'

function UseState7() {
  const [val1,setval] = useState(
  [
    {name:'mohib',
      age:233
    },
    {name:'kohli',
      age:24
    },
    {name:'dongi',
      age:32
    }
  ]
  )
  return (
    <>
    
    <div>
      {val1.map((item)=>(
        <div>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
        </div>
      ))}
    </div>
    <button onClick={()=>setval(()=>val1.map(item=>item.name ==='kohli' ? ({name:'khano ',age:100}):item ) )} 
    
    className='p-3 bg-blue-950'>
      chnage values
    </button>
    
    
    </>
  )
}

export default UseState7
