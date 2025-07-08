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
import AdminOrders from './Pages/AdminOrders'
import AdminOrder from './Pages/AdminOrder'
import ProtectedStep from './ProtectedStep'
import Cart from './Pages/Cart'
import CheckoutPage from './Pages/ShippingPage'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<HomeLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path='/admin/add-product' element={<AdminAddProduct />} />
            <Route path='/admin/products' element={<AdminProducts />} />
            <Route path='/admin/orders' element={<AdminOrders />} />
            <Route path='/admin/order' element={<AdminOrder />} />
          </Route>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:productId' element={<ProductPage />} />
          <Route path='/products/:SearchText' element={<FilterProductSection/>} />

          <Route path='/cart' element={<Cart/>} />
          <Route path='/shipping' element={<ProtectedStep requiredStep={2} ><ShippingPage/></ProtectedStep>} />
          <Route path='/checkout' element={<ProtectedStep requiredStep={3} ><CheckoutPage/></ProtectedStep>} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
