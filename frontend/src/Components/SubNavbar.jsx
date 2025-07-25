import React from 'react'
import color from '../colors'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'



const SubNavbar = () => {
  return (
    <div className='flex justify-center py-2 px-2' style={{backgroundColor:color.bg1}}>
        <div className='w-[100%] max-w-[1200px] flex justify-between'>
            <button className='flex gap-0.5 items-center cursor-pointer'><Menu  size={16}/><span className='text-[13px]'>Category</span></button>
            <div className='text-[13px] text-gray-600 flex  gap-6'>
                <Link to={'/'} className='hover:text-black cursor-pointer transition duration-300'>Home</Link>
                <Link to={'/products'}  className='hover:text-black cursor-pointer transition duration-300'>Products</Link>
            </div>
        </div>
    </div>
  )
}

export default SubNavbar