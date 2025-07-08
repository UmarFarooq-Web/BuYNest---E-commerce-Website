import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import SubNavbar from '../Components/SubNavbar'
import color from "../colors.js"
import logo from '/logo.jpg'
import { Trash2 } from 'lucide-react'
import { useStep } from '../StepProvider.jsx'
import { useNavigate } from 'react-router-dom'
import  useStore  from '../store/useStore.js'

const Cart = () => {
    const [Quantity, setQuantity] = useState(1)
    const {setStep} = useStep();
    const navigate = useNavigate()
    const {cartProducts  , addToCart , removerFromCart} = useStore();

    const handleIncrement = () => {
        setQuantity(Quantity + 1)
    }

    const handleDecrement = () => {
        if (Quantity > 1) {
            setQuantity(Quantity - 1)
        }
    }

    const handleCheckout = () =>{
        setStep(2);
        navigate("/shipping")
    }

    return (
        <div className='min-h-[100vh] relative flex flex-col' style={{ backgroundColor: color.bg2 }}>
            <Navbar />
            <SubNavbar />
            <div className='flex justify-center grow'>

                <div className='w-full max-w-[1200px] px-2'>
                    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl mt-[15px]  sm:mt-[25px] md:mt-[30px]'>Cart</h1>
                    <div className='flex-col lg:flex-row flex'>
                        <div className='flex  mt-[15px]  sm:mt-[25px] md:mt-[30px] overflow-auto  '>
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
                                        <div className='w-[6%] py-2 flex items-center text-gray-500 hover:text-gray-800'><Trash2 size={20} /></div>
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

                                <div className='w-full my-2 flex'>
                                    <div className=' flex justify-between w-[94%]'>
                                        <span>Items subtotal</span>
                                        <span>$1200</span>
                                    </div>
                                    <div className='w-[14%]'></div>
                                </div>
                                <hr className='text-gray-300' />



                            </div>




                        </div>
                        {/* Summary */}
                        <div style={{ backgroundColor: color.bg1 }} className='min-w-[300px] rounded-xl border border-gray-300 shadow-xl py-2 px-4 ml-3'>
                            <h1 className='font-bold text-2xl'>Summary</h1>

                            <div className='flex justify-between mt-3'>
                                <span>Items Total : </span>
                                <span>$1200</span>
                            </div>

                            <div className='flex justify-between mt-3'>
                                <span>Tax : </span>
                                <span>$100</span>
                            </div>
                            <div className='flex justify-between mt-3'>
                                <span>sub total : </span>
                                <span>$1300</span>
                            </div>
                            <div className='flex justify-between mt-3'>
                                <span>Shipping cost : </span>
                                <span>$50</span>
                            </div>

                            <div className='flex justify-between mt-3 font-bold text-2xl py-3 border-t border-b border-dotted border-gray-950'>
                                <span>Total </span>
                                <span>$50</span>
                            </div>

                            <button onClick={handleCheckout}  className='w-full mt-6 rounded text-white py-2 cursor-pointer bg-blue-500 hover:bg-blue-700'>Proceed to Checkout</button>

                        </div>
                    </div>

                </div>
            </div>

            <div className='flex items-center justify-center flex-col bg-white px-6'>
                <div className='flex items-center justify-center gap-4'><img className='w-[100px]' src={logo} alt="" /> <span className='text-4xl' >Buy Nest</span></div>
                <div className='w-full max-w-[500px]'>Shop the best products at unbeatable prices. Fast shipping, secure payments, and customer-first service — all in one place</div>
            </div>
        </div >
    )
}

export default Cart