import React from 'react';
import Navbar from '../Components/Navbar';
import SubNavbar from '../Components/SubNavbar';
import color from "../colors";
import logo from "/logo.jpg";

const CheckoutPage = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <SubNavbar />


            <div className='grow flex justify-center' style={{ backgroundColor: color.bg2 }} >

                <div className='w-full max-w-[1200px] mx-4' >

                    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl mt-[15px]  sm:mt-[25px] md:mt-[30px]'>Checkout</h1>

                    <div>
                        <div className='mt-[10px]  sm:mt-[20px] md:mt-[25px] '>
                            <div className='flex gap-3 items-end'>
                                <h1 className='sm:text-xl md:text-2xl font-bold'>Shipping Details</h1>
                                <a className='text-blue-500 hover:text-blue-700 cursor-pointer bg-none hover:underline' href="#">edit</a>
                            </div>
                            <div className='flex mt-6 '>
                                <span className='w-[70px] sm:w-[100px] md:w-[150px] font-medium'>Name</span>
                                <span className='mr-[20px]'>:</span>
                                <span className='w-[100%] max-w-[300px]'>Umar farooq</span>
                            </div>
                            <div className='flex mt-3'>
                                <span className='w-[70px] sm:w-[100px] md:w-[150px] font-medium'>Address</span>
                                <span className='mr-[20px]'>:</span>
                                <span className='w-[100%] max-w-[300px]'>Apt: 6/B, 192 Edsel Road, Van Nuys
                                    California, USA 96580</span>
                            </div>
                            <div className='flex mt-3 '>
                                <span className='w-[70px] sm:w-[100px] md:w-[150px] font-medium'>Phone</span>
                                <span className='mr-[20px]'>:</span>
                                <span className='w-[100%] max-w-[300px]'>818-414-4092</span>
                            </div>

                        </div>

                        <div className='mt-[10px]  sm:mt-[20px] md:mt-[25px] '>

                            <div className='flex gap-3 items-end'>
                                <h1 className='sm:text-xl md:text-2xl font-bold'>Shipping Details</h1>
                                <a className='text-blue-500 hover:text-blue-700 cursor-pointer bg-none hover:underline' href="#">edit</a>
                            </div>
                            <label className='text-gray-600 mb-3.5' htmlFor="">

                                <input type="checkbox" className='border border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' />
                                Same as shipping details
                            </label>
                            <div className='flex mt-6 '>
                                <span className='w-[70px] sm:w-[100px] md:w-[150px] font-medium'>Name</span>
                                <span className='mr-[20px]'>:</span>
                                <span className='w-[100%] max-w-[300px]'>Umar farooq</span>
                            </div>
                            <div className='flex mt-3'>
                                <span className='w-[70px] sm:w-[100px] md:w-[150px] font-medium'>Address</span>
                                <span className='mr-[20px]'>:</span>
                                <span className='w-[100%] max-w-[300px]'>Apt: 6/B, 192 Edsel Road, Van Nuys
                                    California, USA 96580</span>
                            </div>
                            <div className='flex mt-3 '>
                                <span className='w-[70px] sm:w-[100px] md:w-[150px] font-medium'>Phone</span>
                                <span className='mr-[20px]'>:</span>
                                <span className='w-[100%] max-w-[300px]'>818-414-4092</span>
                            </div>

                        </div>

                        <div className='mt-[10px]  sm:mt-[20px] md:mt-[25px] '>
                            <h1 className='sm:text-xl md:text-2xl font-bold'>Payment Method</h1>
                            <div className='font-medium flex  gap-7 mt-3'>
                                <div className='flex gap-2'>
                                    <input type="radio" name='payment' id='Card' />
                                    <label htmlFor="Card">Card</label>
                                </div>
                                <div className='flex gap-2'>
                                    <input type="radio" name='payment' id='cash' />
                                    <label htmlFor="cash">Cash on Delivery</label>
                                </div>

                            </div>

                            <div className='mt-4 w-full max-w-[700px] mb-9'>

                                <div className='flex gap-3 w-full flex-col md:flex-row '>
                                    <div className='w-full  md:w-[50%]'>
                                        <div className='font-medium'>Select Card</div>
                                        <select style={{ backgroundColor: color.bg1 }} name="cardType" id="cardType" className=' text-gray-500 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                                            <option value="Select">Select a card</option>
                                            <option value="Visa">Visa</option>
                                            <option value="Master Card"> Master Card</option>
                                            <option value="Discover">Discover</option>
                                            <option value="American Express">Express</option>
                                        </select>
                                    </div>

                                    <div className='w-full md:w-[50%]'>
                                        <div className='font-medium'>Card Number</div>
                                        <input type="text" style={{ backgroundColor: color.bg1 }} className=' border p-1 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' placeholder='Enter card number' />
                                    </div>
                                </div>

                                <div className='w-full mt-3'>
                                    <div className='font-medium'>Card Number</div>
                                    <input type="text" style={{ backgroundColor: color.bg1 }} className=' border p-1 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' placeholder='Enter card number' />
                                </div>


                                <div className='flex gap-3 w-full flex-col md:flex-row mt-3 '>
                                    <div className='w-full  md:w-[50%] flex gap-1'>
                                        <div className='w-[50%]'>
                                            <div className='font-medium'>Select Card</div>
                                            <select style={{ backgroundColor: color.bg1 }} name="cardType" id="cardType" className=' text-gray-500 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                                                <option value="Select">Select a card</option>
                                                <option value="Visa">Visa</option>
                                                <option value="Master Card"> Master Card</option>
                                                <option value="Discover">Discover</option>
                                                <option value="American Express">Express</option>
                                            </select>
                                        </div>
                                        <div className='w-[50%]'>
                                            <div className='font-medium'>Select Card</div>
                                            <select style={{ backgroundColor: color.bg1 }} name="cardType" id="cardType" className=' text-gray-500 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                                                <option value="Select">Select a card</option>
                                                <option value="Visa">Visa</option>
                                                <option value="Master Card"> Master Card</option>
                                                <option value="Discover">Discover</option>
                                                <option value="American Express">Express</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='w-full md:w-[50%]'>
                                        <div className='font-medium'>CVC</div>
                                        <input type="text" style={{ backgroundColor: color.bg1 }} className=' border p-1 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' placeholder='Enter CVC' />
                                    </div>
                                </div>

                                <button className='w-full mt-6 rounded text-white py-2 cursor-pointer bg-blue-500 hover:bg-blue-700'>Pay</button>

                            </div >











                        </div>




                    </div>




                </div>




            </div>


            <div className='flex items-center justify-center flex-col bg-white px-6 mt-8'>
                <div className='flex items-center justify-center gap-4'><img className='w-[100px]' src={logo} alt="" /> <span className='text-4xl' >Buy Nest</span></div>
                <div className='w-full max-w-[500px]'>Shop the best products at unbeatable prices. Fast shipping, secure payments, and customer-first service — all in one place</div>
            </div>

        </div>
    )
}

export default CheckoutPage