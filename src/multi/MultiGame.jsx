import React,{useState,useEffect} from "react";
import {HashLink} from 'react-router-hash-link'
import Birds from './Birds.js'
import Play from './Play'
import Plays from './Plays'
const MultiGame = () => {
const [load,setLoad]=useState(true)
const [birds,setBirds]=useState([])
const [player,setPlayer]=useState(null)
const [computer,setComputer]=useState(null)
const [toss,setToss]=useState(null)
const [start,setStart]=useState(false)
const get_data=()=>{
if(load===true){
  setTimeout(()=>{
    setLoad(false)
    setBirds(Birds)
  },1200)
}
}
const rand=()=>{
if(toss===null){
  let r=Math.floor(Math.random()*50);
  if(r%2===0){
    setToss("Player")
  }
  else{
    setToss("Computer")
  }
  }
}
const adds=(i)=>{
  let k=birds.filter((it)=>it.image!=i)
 setPlayer(i)
 setBirds(k)
}
const added=(i)=>{
  setComputer(i)
}
useEffect(()=>{
  get_data();
},[])
 useEffect(()=>{
   window.scrollTo({ top: 0, behavior: "smooth" });
 },[])
  return (
  <>
          {load==true && <>
    <div className="w-full flex flex-col items-center justify-center gap-4 py-28">
    <img src="Home/Navbar.png" className="w-72 h-54" />
       <img src="Home/Texts.png" className="w-64 h-24" />
    </div>
  </>}
    {
    load===false && player===null && computer==null && <>
 <div className="w-full py-6 flex flex-col">
    <h1 className="font-bold text-xl text-center underline-offset-8 underline">Select Player 1 Bird</h1>
    <div className="w-full flex py-6 flex-row flex-wrap justify-center gap-4">
    {
      birds.map((i)=>{
        return(<>
     <img src={i.image} onClick={()=>{
       adds(i.image)
     }}
     className="w-24 rounded-md h-24 transition duration-300 ease-in-out transform hover:scale-105" />
        </>)
      })
    }
    </div>
    </div>
    </>
  }
      {
    load===false && player!=null && computer==null && <>
 <div className="w-full py-6 flex flex-col">
    <h1 className="font-bold text-xl text-center underline-offset-8 underline">Select Player 2 Bird</h1>
    <div className="w-full flex py-6 flex-row flex-wrap justify-center gap-4">
    {
      birds.map((i)=>{
        return(<>
     <img src={i.image} onClick={()=>{
       added(i.image)
     }}
     className="w-24 rounded-md h-24 transition duration-300 ease-in-out transform hover:scale-105" />
        </>)
      })
    }
    </div>
    </div>
    </>
  }
    { load===false && player!=null && computer!=null && (toss===null || start===false) && <>
  <div className="w-full my-8 flex justify-center items-center text-center flex-col font-bold text-xl gap-6">
  <h1 className="underline">Toss the coin </h1>
  <img onClick={rand} src="Home/angrycoin.png" className="w-28 h-32"/>
{ toss==="Player" && <h1>Player 1 turn first</h1>}
{ toss==="Computer" && <h1>Player 2 turn first</h1>}
  { toss!=null && <button onClick={()=>setStart(true)} className="mt-4 px-4 font-bold py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">
        Start Game
      </button>}
  </div>
  </>
  }
    {
    
        load===false && player!=null && computer!=null && toss!=null && start===true && <>
      { toss==="Player" &&  <Play player={player} computer={computer} />}
      { toss==="Computer" &&  <Plays player={player} computer={computer} />}
        </>
      
        
  }
  </>
  );
};



export default MultiGame;
