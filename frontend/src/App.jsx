import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from "./Pages/ProductPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
