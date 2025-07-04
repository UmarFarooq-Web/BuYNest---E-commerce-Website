import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from "./Pages/ProductPage"
import FilterProductSection from './Pages/FilterProductSection'
import './App.css'
import ShippingPage from './Pages/ShippingPage'
import HomeLayout from './Pages/HomeLayout'
import AdminDashboard from './Pages/AdminDashboard'
import AdminAddProduct from './Pages/AdminAddProduct'
import AdminProducts from './Pages/AdminProducts'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<HomeLayout/>}>
            <Route index element={<AdminDashboard/>} />
            <Route path='/add-product' element={<AdminAddProduct/>} />
            <Route path='/products' element={<AdminProducts/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
