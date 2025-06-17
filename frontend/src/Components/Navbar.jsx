import React from 'react'
import logo from "../../public/logo.jpg"
import { Search , ShoppingCart , User } from 'lucide-react'
import color from '../colors'
import { useRef } from 'react'
import { useState } from 'react'
const Navbar = () => {
    const [IsFocused , setIsFocused] = useState(false);
  return (
    <div className={` flex justify-center py-2 px-3`} style={{backgroundColor:color.bg2}}>
        <div className='w-[100%] max-w-[1200px] flex justify-between'>
            <div className="flex items-center gap-2">
                <img className='w-[30px]' src={logo} alt="" />
                <span className='font-bold text-gray-500 w-[100px]'>Buy Nest</span>
            </div>
            <div style={IsFocused?{backgroundColor:color.bg1 , border:`1px solid ${color.Blue}`}:{backgroundColor:color.bg1}} className={` bg-[${color.bg1}] w-[100%] max-w-[700px] border border-gray-300 flex  items-center px-2 py-1 gap-2 rounded-4xl`}>
                <Search size={15} color='gray' />
                <input onFocus={()=>setIsFocused(true)} onBlur={()=>setIsFocused(false)} className='outline-none w-full' type="text" placeholder='Search' />
            </div>
            <div className='flex gap-3 cursor-pointer'>
                <button className='cursor-pointer'><ShoppingCart /></button>
                <button className='cursor-pointer'><User /></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar