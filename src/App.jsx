import { useState,useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Game from './play/Game'
import MultiGame from './multi/MultiGame'
const App=()=>{
 useEffect(()=>{
   document.body.className="bg-rose-400";
 })
  return(<>
  <Router>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/game" element={<Game />} />
 <Route path="/multigame" element={<MultiGame />} />
  </Routes>
  </Router>
  </>)
}

export default App
