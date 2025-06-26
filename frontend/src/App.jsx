import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from "./Pages/ProductPage"
import FilterProductSection from './Pages/FilterProductSection'
import './App.css'
import Cart from './Pages/Cart'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
