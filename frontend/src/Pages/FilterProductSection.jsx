import React, { useState, useEffect } from 'react'
import color from '../colors.js'
import Navbar from "../Components/Navbar"
import SubNavbar from '../Components/SubNavbar'
import ProductCard from "../Components/ProductCard"
import { Funnel, X, ChevronDown } from 'lucide-react'
import logo from "/logo.jpg"
import { useLocation } from 'react-router-dom'
import toast from 'react-hot-toast'
import UserInstance from '../axios/userInstanse.js'
import { Loader } from 'lucide-react'



const FilterProductSection = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [IsProductsLoading, setIsProductsLoading] = useState(false)
  const [Products, setProducts] = useState([])
  const [Availability, setAvailability] = useState('all');
  const [Min, setMin] = useState("");
  const [Max, setMax] = useState("")
  const [Go , setGo] = useState(false)


  const handleMinChange = (e) => {
    setMin(e.target.value)
  }

  const handleMaxChange = (e) => {
    setMax(e.target.value)
  }

  const handleAvailabilityChange = () => {
    setAvailability(e.target.value);
  }

  useEffect(() => {
    if (IsOpen) {
      document.body.classList.add('overflow-hidden')
    }
    else {
      document.body.classList.remove("overflow-hidden")
    }

  }, [IsOpen])

  const { search } = useLocation()

  async function fun() {
    setIsProductsLoading(true)

    try {
      console.log("search Text :  " + search)
      const safeSearch = search == ""?"?":search
      const params = new URLSearchParams(safeSearch);
      if (Availability) params.set("availability", Availability);
      if (Min) params.set("min", Min);
      if (Max) params.set("max", Max);

      const res = await UserInstance.get(`/getFilteredProducts?${params.toString()}`);
      setProducts(res.data)
      console.log(res.data);
    } catch (error) {
      console.log("Error in useEffect in FilterProducttSecion : ", error)
      toast.error("Interal Server Error");
    } finally {
      setIsProductsLoading(false)
    }
  }

  useEffect(() => {
    fun()
  }, [search , Availability , Go])


  return (
    <div className='min-h-[100vh] relative' style={{ backgroundColor: color.bg2 }}>
      <Navbar />
      <SubNavbar />

      <div className='flex justify-center relative my-5 px-3'>
        <div className='w-full max-w-[1650px] justify-center flex'>
          {/* Filter section */}
          <div className={` w-full max-w-[350px] absolute min-h-screen lg:min-h-auto max-h-screen overflow-y-auto left-0 lg:static transition-all duration-500 z-20 p-1 sm:p-2 md:p-3  ${IsOpen ? "left-0" : " left-[-500px]"} `} style={{ backgroundColor: color.bg2 }} >

            <div className='flex justify-between'>
              <h1 className='text-[24px] sm:text-[26px] md:text-[30px] font-bold'>Filters</h1>
              {IsOpen ? <button onClick={() => { setIsOpen(!IsOpen) }}><X /></button> : <div></div>}
            </div>
            <details open className=''>
              <summary className='list-none text-[16px] sm:text-[16px] md:text-[18px] font-semibold mt-3 sm:mt-4 md:mt-6 flex justify-between '><span>Availability</span> <span><ChevronDown /></span></summary>
              <div>
                <div className='flex  gap-2'>
                  <input type="radio" id='availability1' onChange={handleAvailabilityChange} value={'all'} defaultChecked name='availability' />
                  <label htmlFor="availability1">All</label>
                </div>
                <div className='flex  gap-2' >
                  <input type="radio" id='availability2' onChange={handleAvailabilityChange} value={"in"} name='availability' />
                  <label htmlFor="availability2">In Stock</label>
                </div>
                <div className='flex  gap-2' >
                  <input type="radio" id='availability3' onChange={handleAvailabilityChange} value='out' name='availability' />
                  <label htmlFor="availability3">Out of Stock</label>
                </div>
              </div>
            </details>


            <details open className=''>
              <summary className='list-none text-[16px] sm:text-[16px] md:text-[18px] font-semibold mt-3 sm:mt-4 md:mt-6 flex justify-between '><span>Price range</span> <span><ChevronDown /></span></summary>
              <div className='flex mt-[7px]'>
                <input onChange={handleMinChange} value={Min} className='border  border-gray-300 focus:border-blue-500 w-[90px] p-2 rounded-tl-[10px] rounded-bl-[10px] text-[14px] outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' type="text" placeholder='Min' />
                <input onChange={handleMaxChange} value={Max} className='border border-gray-300 focus:border-blue-500 w-[90px] p-2 rounded-tr-[10px] rounded-br-[10px] text-[14px] outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' type="text" placeholder='Max' />
                <button onClick={()=>setGo(pre=>!pre)} className='py-2 px-3 rounded hover:bg-gray-300 text-blue-500 text-[12px] font-bold ml-[10px] cursor-pointer border border-gray-300'>Go</button>

              </div>
            </details>


          </div>
          {IsOpen && <div className='absolute z-10  bg-black/20 w-screen h-screen'></div>}

          {/* Product Section */}
          <div>
            <button onClick={() => { setIsOpen(!IsOpen) }} className='lg:hidden flex items-center border border-gray-300  text-gray-500 text-[12px] rounded my-5 p-2 '><Funnel size={22} />Filters</button>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-1'>
              {IsProductsLoading ? <div className=' text-blue-500 grow flex justify-center' ><Loader size={40} className='animate-spin' /></div> : Products.length == 0 ? <div className='grow' >No Product Found</div> : Products.map((e) => (
                <ProductCard product={e} />
                // <div>{e}</div>
              ))}

            </div>
          </div>
        </div>
      </div>




      <div className='flex items-center justify-center flex-col bg-white px-6'>
        <div className='flex items-center justify-center gap-4'><img className='w-[100px]' src={logo} alt="" /> <span className='text-4xl' >Buy Nest</span></div>
        <div className='w-full max-w-[500px]'>Shop the best products at unbeatable prices. Fast shipping, secure payments, and customer-first service — all in one place</div>
      </div>
    </div>
  )
}

export default FilterProductSection