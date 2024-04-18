import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"
import MainLayout from "./components/MainLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="destination/:name" element={<Destination/>}/>
            <Route path="technology/:name" element={<Technology/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
