import React from 'react'
import logo from "../../public/logo.jpg"
import { Search , ShoppingCart , User } from 'lucide-react'
import color from '../colors'
import { useRef } from 'react'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useStore from '../store/useStore.js'
const Navbar = () => {
    const [IsFocused , setIsFocused] = useState(false);
    const [SearchText , setSearchText] = useState('')
    const {cartProducts , setCartProducts} = useStore()
    const [cartLength , setCartLength] = useState(0)
    const navigate = useNavigate();

    const handleChange = (e)=>{
        setSearchText(e.target.value)
    }

    const handleSearch = () =>{
        if(SearchText.trim == '') return
        navigate(`/products?search=${SearchText}`)
    }


    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []

        setCartLength(cart.length)

      
    }, [cartProducts])
    


    
  return (
    <div className={` flex justify-center py-2 px-3`} style={{backgroundColor:color.bg2}}>
        <div className='w-[100%] max-w-[1200px] flex justify-between'>
            <div className="flex items-center gap-2 cursor-pointer " onClick={()=>navigate('/')} >
                <img className='w-[30px]' src={logo} alt="" />
                <span className='font-bold text-gray-500 w-[100px]'>Buy Nest</span>
            </div>
            <div style={IsFocused?{backgroundColor:color.bg1 , border:`1px solid ${color.Blue}`}:{backgroundColor:color.bg1}} className={` bg-[${color.bg1}] w-[100%] max-w-[700px] border border-gray-300 flex  items-center px-3 py-1 gap-2 rounded-4xl`}>
                <input onFocus={()=>setIsFocused(true)} onKeyDown={(e)=>{ if(e.key === 'Enter'){handleSearch()} }} value={SearchText} onChange={handleChange} onBlur={()=>setIsFocused(false)} className='outline-none w-full' type="text" placeholder='Search' />
                <button className='cursor-pointer' onClick={handleSearch} >
                    <Search size={15} color='gray' />
                </button>
            </div>
            <div className='flex gap-3 cursor-pointer'>
                <button className='cursor-pointer relative' onClick={()=>navigate('/cart')} ><ShoppingCart /> { cartLength > 0  && <div className='absolute -top-1 -right-3 px-2 rounded-full bg-green-400' >{cartLength}</div>} </button>
                <button className='cursor-pointer'><User /></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar