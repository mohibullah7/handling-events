import Card from "./Components/Card";

import "./App.css";
import { useState } from "react";

function App() {
  const [val1, valSet] = useState({
    name:'mohib khan',
     banned:10
  });

  return (
    <>
      <div className="flex justify-center items-center flex-col bg-zinc-300">
        <div className="bg-zinc-200 w-80 p-5">
          <h1 className="text-3xl">{val1.name}</h1>
          <h2 className="text-2xl">{val1.banned.toString()}</h2>
          <button onClick={()=>valSet({...val1,banned: val1.banned})} className="p-3 bg-blue-900 rounded-md">change value</button>
        </div>
      </div>
    </>
  );
}

export default App;
