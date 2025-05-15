import React,{useState,useEffect} from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import {HashLink} from 'react-router-hash-link'
const Home = () => {
const [load,setLoad]=useState(true)
const get_data=()=>{
if(load===true){
  setTimeout(()=>{
    setLoad(false)
  },1200)
}
}
useEffect(()=>{
  get_data();
},[])
 useEffect(()=>{
   window.scrollTo({ top: 0, behavior: "smooth" });
 },[])
 let images=["A1","A2","A3","A4","A5","A6"];
  return (
  <>
      {load==true && <>
    <div className="w-full flex flex-col items-center justify-center gap-4 py-28">
    <img src="Home/Navbar.png"  className="w-72 h-54" />
       <img src="Home/Texts.png" className="w-64 h-24"/>
    </div>
  </>}
  { load===false && <>
    <div className="w-full h-18 flex gap-x-6 bg-red-500">
  <img src="Home/Theme.png" onClick={()=>
    window.location.reload()} className="w-30 h-16"/>
  <div className="w-full flex items-center justify-center">
    <img src="Home/Texts.png" className="w-52 h-16" />
    </div>
  </div>
<div className="w-full my-1 gap-4 flex justify-center flex-col">
<div className="w-full flex justify-center">
<img src="Home/Navbar.png" className="w-80 h-64 transition duration-300 ease-in-out transform hover:scale-105" />
</div>
<div id="about" className="w-full flex flex-col justify-center items-center">
<h1 className="text-lg font-bold  underline">About</h1>
</div>
<div className="w-full flex flex-row flex-wrap font-bold text-xs">
<p className="ml-2 mr-2">The Angry Birds are the titular main characters of the popular Rovio franchise of the same name. The birds are named Red (a cardinal), Chuck (a canary), Jay, Jim and Jake (three bluebirds), Bubbles (an oriole), Hal (a toucan), Matilda (a chicken), Bomb (a loon), Terence (a mutated cardinal), Stella (a galah), Silver (a falcon), Melody (a potoo), Jo (superb bird-of-paradise) and The Mighty Eagle (a bald eagle). They strive to protect their eggs from their archenemies, the Bad Piggies, and their leader, King Pig.
</p>
</div>
</div>
<div id="services" className="w-full flex my-2 items-center flex-col justify-center gap-5">
<h1 className="text-lg font-bold  underline">Services</h1>
<div className="w-full flex flex-row gap-8 flex-wrap justify-center">
<HashLink smooth to="/game">
<div className="w-30 h-30 bg-red-400 rounded-md shadow-rose-500 shadow-md flex justify-center items-center gap-2 flex-col p-4 font-bold text-sm transition duration-300 ease-in-out transform hover:scale-105 font-bold ">
<img src="Home/computer.png" className="w-30 h-24"/>
<h1>Computer</h1>
</div>
</HashLink>
<HashLink smooth to="/multigame">
<div className="w-30 h-30 bg-red-400 rounded-md shadow-rose-500 shadow-md flex justify-center items-center gap-2 flex-col p-4 font-bold text-sm transition duration-300 ease-in-out transform hover:scale-105 font-bold ">
<img src="Home/Multi.png" className="w-30 h-24"/>
<h1>Multiplayer</h1>
</div>
</HashLink>
</div>
</div>
<div id="gallery" className="w-full flex py-6 items-center flex-col justify-center gap-8">
<h1 className="text-lg font-bold underline-offset-4  underline">Gallery</h1>
<div className="w-full flex justify-center items-center gap-3 flex-row flex-wrap">
{
  images.map((i)=>{
    return(<>
    <div className="flex flex-row transition duration-300 ease-in-out transform hover:scale-105 flex-wrap">
    <img className="w-36 h-54" src={`Home/${i}.jpg`} />
    </div>
    </>)
  })
}
</div>
</div>
<footer className="bg-rose-500 text-white  shadow-inner py-4">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
<div>
<div className="flex items-center space-x-3 flex-col mb-4">
<img src="Home/Theme.png" className="w-80 h-30" alt="Angry Birds"  />
<img src="Home/Texts.png" className="w-72 h-30" alt="Angry Birds"  />
</div>
<p className="text-sm text-red-200">Enter the wild world of Angry Birds! Launch, smash, and conquer levels filled with piggy mischief. Join millions of players in this epic feathered adventure.</p></div>
<div className="space-y-3">
<h3 className="text-lg font-semibold">Explore</h3>
<ul className="text-red-200 space-y-1">
<HashLink smooth to='#about'> <li className="transition">About</li></HashLink>
<HashLink smooth to='#services'> <li className="transition">Services</li></HashLink>
<HashLink smooth to='#gallery'> <li className="transition">Gallery</li></HashLink>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-lg font-semibold">Connect with Us</h3>
<div className="flex space-x-5">
<FaFacebook className=" cursor-pointer text-xl" />
<FaTwitter className=" cursor-pointer text-xl" />
<FaInstagram className="cursor-pointer text-xl" />
<FaYoutube className="cursor-pointer text-xl" />
</div>
<div className="text-sm text-red-200">
<a>Privacy Policy</a> ·
<a  className="ml-2 ">Terms of Service</a>
</div>
</div> </div>
<div className="text-center mt-8 p-4 text-sm text-red-200 border-t border-red-700 ">
<p>  © {new Date().getFullYear()} Angry Birds Universe. All rights reserved.</p>
</div></footer>
</>}
  </>
  );
};
export default Home;
