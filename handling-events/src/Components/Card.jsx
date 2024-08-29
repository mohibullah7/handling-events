import React from "react";

function Card() {
  let data = [
    {
      SongName: "Mahy way",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, reiciendis?",
      button: "Download",
    },
    {
      SongName: "Muhabta sajia way",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, reiciendis?",
      button: "Download",
    },
    {
      SongName: "dil da naseeba ",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, reiciendis?",
      button: "Download",
    },
  ];

  const CikconButton=()=>{
     alert("yes bi=utton is workiing")
  }

  const choha =()=>{
   document.getElementById("para").style.display='none';
  }

  return (
    <>
      <div className="flex items-center justify-center w-full bg-zinc-300 h-screen gap-10">
        {data.map((elem, index) => ( 
          <div key={index} className="w-80 bg-zinc-100 p-3 rounded-md">
            <h1 className="text-xl font-semibold">{elem.SongName}</h1>
            <p id="para" className="mt-4 para">{elem.description}</p>
            <button onClick={CikconButton} onMouseOver={choha} className="rounded-md px-2 py-2 bg-blue-500 mt-3">
              {elem.button}
            </button>
          </div>
          ))}
      </div>
    </>
  );
}

export default Card;
