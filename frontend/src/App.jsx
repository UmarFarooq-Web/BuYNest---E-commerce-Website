import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from "./Pages/ProductPage"
import FilterProductSection from './Pages/FilterProductSection'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FilterProductSection/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
