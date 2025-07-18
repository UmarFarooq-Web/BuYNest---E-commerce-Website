import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import SubNavbar from "../Components/SubNavbar"
import banner from "/banner.png"
import color from '../colors'
import CategoryBar from '../Components/CategoryBar'
import ProductCard from '../Components/ProductCard'
import { ChevronRight, Loader } from 'lucide-react'
import logo from "/logo.jpg"
import UserInstance from '../axios/userInstanse'
import toast from "react-hot-toast"



const HomePage = () => {
  const [Products, setProducts] = useState(null);
  const [LoadingProducts, setLoadingProducts] = useState(false);


  useEffect(() => {
   async function  fun(){
      setLoadingProducts(true)
      try {

        const res = await UserInstance.get('/get-home-products')

        setProducts(res.data.products)

      } catch (error) {
        toast.error(error.response?.data?.message || "Internal server error")
      } finally {
        setLoadingProducts(false)
      }
    }

    fun()


  }, [])

  return (
    <div>
      <Navbar />
      <SubNavbar />
      <div className='px-6' style={{ backgroundColor: color.bg2 }}>
        {/* <CategoryBar /> */}
        <div className='m-auto w-full  max-w-[1700px]'>
          <img className='rounded-xl w-fit' src={banner} alt="" />

          <div>
            <h1 className='text-3xl font-bold mt-15'>Top Deals today</h1>
            <div className="flex flex-wrap gap-6">
              {LoadingProducts ? <div><Loader /></div> : Products && Products.map((e) => (<ProductCard product={e} />))}
            </div>
          </div>


          <hr className='my-10' />



          <hr className='my-10' />


        </div>
      </div>

      <div className='flex items-center justify-center flex-col px-6'>
        <div className='flex items-center justify-center gap-4'><img className='w-[100px]' src={logo} alt="" /> <span className='text-4xl' >Buy Nest</span></div>
        <div className='w-full max-w-[500px]'>Shop the best products at unbeatable prices. Fast shipping, secure payments, and customer-first service — all in one place</div>
      </div>
    </div>
  )
}

export default HomePage