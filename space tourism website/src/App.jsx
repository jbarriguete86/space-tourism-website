import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"
import MainLayout from "./components/MainLayout"
import CrewLayout from "./components/CrewLayout"
import DestinationLayout from "./components/DestinationLayout"
import TechnologyLayout from "./components/TechnologyLayout"


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="crew/:name" element={<Crew/>}/>
            <Route path="destination/:name" element={<Destination/>}/>
            <Route path="technology/:name" element={<Technology/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
