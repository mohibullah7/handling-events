
import Card from './Components/Card'

import './App.css'
import { useState } from 'react'

function App() {
  
const  [score,setscore] = useState(true) ;

const [heading,chng]= useState('mohib khan mahsud')

const Hdchng=()=>{
  document.getElementById("hd").style.color='blue';
  document.getElementById("hd").style.fontSize='40px';
}

const [val,valset] = useState(12)
  return (
    <>
      {/* <Card/> */}
      <h1>
        
        {score.toString()}

      </h1>
      <button onClick={()=>setscore(!score) }  className='py-3 px-4 m-5 bg-blue-700'>
        click
      </button>

      <div className='flex items-center h-screen w-full bg-zinc-300 justify-center'>
          <div className='w-80 bg-slate-100 p-5'>
                <h1 id='hd' className='text-2xl bg-red-600'>
                  {heading}
                </h1>
                <button  onClick={()=>chng('hoja chnage')}
                 className='p-3 bg-blue-500 rounded-md'>change color</button>
          </div>
      </div>
      <div className='flex flex-col  h-screen w-full bg-zinc-300 justify-center items-center'>
          <h1>
              {val}
          </h1>
          <button onClick={()=>valset((prechacha)=>(prechacha*3))}
           className='p-3 bg-blue-500 rounded-full mt-10'>chnage number</button>
      </div>
    </>
  )
}

export default App
