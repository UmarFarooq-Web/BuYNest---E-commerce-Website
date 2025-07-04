import React, { useState } from 'react'
import color from '../colors'
import logo from '/logo.jpg'
import { Search, ShoppingCart, User, Menu, Home , PackageSearch } from 'lucide-react'
import { Outlet, useSearchParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const HomeLayout = () => {
    const [IsFocused, setIsFocused] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    const navLink = [
        { name: "Dashboard", path: "/", Icon: Home },
        { name: "Add Product", path: "/add-product", Icon: User },
        { name : "Products" , path: "/products" , Icon:PackageSearch}
    ]
    return (
        <div className='relative h-screen '>
            {/* Navbar */}
            <div className={` flex justify-center py-2  px-3 border-b border-gray-400`} style={{ backgroundColor: color.bg1 }}>
                <div className='w-[100%] flex justify-between'>
                    <div className="flex items-center gap-2">
                        <button onClick={() => { setIsVisible(!isVisible) }} className='cursor-pointer block xl:hidden' ><Menu /></button>
                        <img className='w-[30px]' src={logo} alt="" />
                        <span className='font-bold text-gray-500 w-[100px]'>Buy Nest</span>
                    </div>
                    <div className='flex gap-3 cursor-pointer'>
                        <button className='cursor-pointer'><ShoppingCart /></button>
                        <button className='cursor-pointer'><User /></button>
                    </div>
                </div>
            </div>

            <div className='flex h-[calc(100%-47px)] '>
            {/* Body */}
                {/* SideBar */}
                <div style={{ backgroundColor: color.bg1 }} className={`w-full h-[calc(100%-47px)] max-w-[250px] transition-all duration-500 xl:translate-x-0 z-10 xl:opacity-100 absolute xl:relative border-r border-gray-400 ${isVisible ? "translate-x-0 opacity-100 " : " -translate-x-[300px] opacity-0"} p-3 md:p-5 flex flex-col gap-1`}>

                    {navLink.map(({ name, path, Icon }, i) => (
                        <NavLink key={i} to={path}
                            end
                            className={({ isActive }) =>
                                `w-full py-1 px-2  rounded  hover:bg-gray-200 text-[15px]  group ${isActive ? 'text-blue-600' : "text-gray-700"}`
                            }
                        >
                            <div className='flex items-center gap-2'>
                                <Icon size={18} className={` `} />{name}
                            </div>
                        </NavLink>
                    ))}

                </div>


                {/* outlet */}
                <div className='overflow-y-auto h-full w-full relative z-[1]'  style={{backgroundColor:color.bg1}}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout