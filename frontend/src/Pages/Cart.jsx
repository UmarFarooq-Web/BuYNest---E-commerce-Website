import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import SubNavbar from '../Components/SubNavbar'
import color from "../colors.js"
import logo from '/logo.jpg'

const Cart = () => {
    const [Quantity, setQuantity] = useState(1)


    const handleIncrement = () => {
        setQuantity(Quantity + 1)
    }

    const handleDecrement = () => {
        setQuantity(Quantity - 1)
    }

    return (
        <div className='min-h-[100vh] relative' style={{ backgroundColor: color.bg2 }}>
            <Navbar />
            <SubNavbar />
            <div className='flex justify-center'>

                <div className='w-full max-w-[1200px] px-2'>
                    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl mt-[15px]  sm:mt-[25px] md:mt-[30px]'>Cart</h1>

                    <div className='flex  mt-[15px]  sm:mt-[25px] md:mt-[30px] overflow-auto  flex-col lg:flex-row'>
                        <div className='min-w-[786px] max-w-[786px] overflow-auto'>
                            <hr className='text-gray-300' />

                            <div className='w-full flex gap-1'>
                                <div className='w-[10%]'></div>
                                <div className='w-[29%]'>Products</div>
                                <div className='w-[12%]' >Size</div>
                                <div className='w-[10%]'>Price</div>
                                <div className='w-[10%]'>Color</div>
                                <div className='w-[13%]'>Quantity</div>
                                <div className='w-[10%]'>Total</div>
                                <div className='w-[8%]'></div>
                            </div>
                            <hr className='text-gray-300' />



                            <div className='max-h-[265px] overflow-y-auto'>
                                <div className='w-full flex my-[5px] gap-1 h-[55px]'>
                                    <div className='w-[7%] p-1 border border-gray-300 rounded'><img src={logo} alt="" /></div>
                                    <div className='w-[32%]  py-2 overflow-y-hidden text-[13px] text-blue-500 font-semibold hover:underline'><a href="#">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress</a></div>
                                    <div className='w-[12%] py-2 flex items-center text-gray-500' >Xl</div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500 '>$200</div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500'>Red Pink</div>
                                    <div className='w-[13%] py-2 flex items-center text-gray-500 gap-[5px] '><button onClick={handleDecrement} className='cursor-pointer'>-</button><span className='w-[20px] text-center'>{Quantity}</span><button className='cursor-pointer' onClick={handleIncrement}>+</button></div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500'>Total</div>
                                    <div className='w-[6%] py-2 flex items-center text-gray-500'></div>
                                </div>
                                <hr className='text-gray-300' />










                                <div className='w-full flex my-[5px] gap-1 h-[55px]'>
                                    <div className='w-[7%] p-1 border border-gray-300 rounded'><img src={logo} alt="" /></div>
                                    <div className='w-[32%]  py-2 overflow-y-hidden text-[13px] text-blue-500 font-semibold hover:underline'><a href="#">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress</a></div>
                                    <div className='w-[12%] py-2 flex items-center text-gray-500' >Xl</div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500 '>$200</div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500'>Red Pink</div>
                                    <div className='w-[13%] py-2 flex items-center text-gray-500 gap-[5px] '><button onClick={handleDecrement} className='cursor-pointer'>-</button><span className='w-[20px] text-center'>{Quantity}</span><button className='cursor-pointer' onClick={handleIncrement}>+</button></div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500'>Total</div>
                                    <div className='w-[6%] py-2 flex items-center text-gray-500'></div>
                                </div>
                                <hr className='text-gray-300' /><div className='w-full flex my-[5px] gap-1 h-[55px]'>
                                    <div className='w-[7%] p-1 border border-gray-300 rounded'><img src={logo} alt="" /></div>
                                    <div className='w-[32%]  py-2 overflow-y-hidden text-[13px] text-blue-500 font-semibold hover:underline'><a href="#">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress</a></div>
                                    <div className='w-[12%] py-2 flex items-center text-gray-500' >Xl</div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500 '>$200</div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500'>Red Pink</div>
                                    <div className='w-[13%] py-2 flex items-center text-gray-500 gap-[5px] '><button onClick={handleDecrement} className='cursor-pointer'>-</button><span className='w-[20px] text-center'>{Quantity}</span><button className='cursor-pointer' onClick={handleIncrement}>+</button></div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500'>Total</div>
                                    <div className='w-[6%] py-2 flex items-center text-gray-500'></div>
                                </div>
                                <hr className='text-gray-300' /><div className='w-full flex my-[5px] gap-1 h-[55px]'>
                                    <div className='w-[7%] p-1 border border-gray-300 rounded'><img src={logo} alt="" /></div>
                                    <div className='w-[32%]  py-2 overflow-y-hidden text-[13px] text-blue-500 font-semibold hover:underline'><a href="#">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress</a></div>
                                    <div className='w-[12%] py-2 flex items-center text-gray-500' >Xl</div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500 '>$200</div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500'>Red Pink</div>
                                    <div className='w-[13%] py-2 flex items-center text-gray-500 gap-[5px] '><button onClick={handleDecrement} className='cursor-pointer'>-</button><span className='w-[20px] text-center'>{Quantity}</span><button className='cursor-pointer' onClick={handleIncrement}>+</button></div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500'>Total</div>
                                    <div className='w-[6%] py-2 flex items-center text-gray-500'></div>
                                </div>
                                <hr className='text-gray-300' /><div className='w-full flex my-[5px] gap-1 h-[55px]'>
                                    <div className='w-[7%] p-1 border border-gray-300 rounded'><img src={logo} alt="" /></div>
                                    <div className='w-[32%]  py-2 overflow-y-hidden text-[13px] text-blue-500 font-semibold hover:underline'><a href="#">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress</a></div>
                                    <div className='w-[12%] py-2 flex items-center text-gray-500' >Xl</div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500 '>$200</div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500'>Red Pink</div>
                                    <div className='w-[13%] py-2 flex items-center text-gray-500 gap-[5px] '><button onClick={handleDecrement} className='cursor-pointer'>-</button><span className='w-[20px] text-center'>{Quantity}</span><button className='cursor-pointer' onClick={handleIncrement}>+</button></div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500'>Total</div>
                                    <div className='w-[6%] py-2 flex items-center text-gray-500'></div>
                                </div>
                                <hr className='text-gray-300' /><div className='w-full flex my-[5px] gap-1 h-[55px]'>
                                    <div className='w-[7%] p-1 border border-gray-300 rounded'><img src={logo} alt="" /></div>
                                    <div className='w-[32%]  py-2 overflow-y-hidden text-[13px] text-blue-500 font-semibold hover:underline'><a href="#">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress</a></div>
                                    <div className='w-[12%] py-2 flex items-center text-gray-500' >Xl</div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500 '>$200</div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500'>Red Pink</div>
                                    <div className='w-[13%] py-2 flex items-center text-gray-500 gap-[5px] '><button onClick={handleDecrement} className='cursor-pointer'>-</button><span className='w-[20px] text-center'>{Quantity}</span><button className='cursor-pointer' onClick={handleIncrement}>+</button></div>
                                    <div className='w-[10%] py-2 flex items-center text-gray-500'>Total</div>
                                    <div className='w-[6%] py-2 flex items-center text-gray-500'></div>
                                </div>
                                <hr className='text-gray-300' />







                            </div>







                        </div>
                        <div>2</div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Cart