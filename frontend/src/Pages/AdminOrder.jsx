import React from 'react'
import color from '../colors'
import textpic2 from '/testpic2.jpeg'
import { Mail, MapPin, Phone, PhoneIcon, User } from 'lucide-react'
const AdminOrder = () => {
    return (
        <div>
            <div className='p-2 sm:p-3 md:p-5 lg:p-6' style={{ backgroundColor: color.bg2 }}>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold' >Order #89340</h1>

                <div className='flex flex-col lg:flex-row gap-3'>
                    <div className='overflow-x-auto grow p-1'>
                        <div className='min-w-[800px]'>
                            <div className='flex justify-between font-bold text-[18px] border-t border-b border-gray-300 py-1'>
                                <div className='w-[4%]'></div>
                                <div className='w-[30%]'>Product</div>
                                <div className='w-[15%]'>Color</div>
                                <div className='w-[10%]'>Size</div>
                                <div className='w-[10%]'>Price</div>
                                <div className='w-[10%]'>Quantity Status</div>
                                <div className='w-[10%]'>Total</div>
                            </div>
                            <div className='flex justify-between items-center h-[75px] border-b border-gray-300 py-2'>
                                <div className='w-[4%] h-[40px] lg:h-[50px] border border-gray-300 rounded flex justify-center items-center p-1 overflow-hidden'><img src={textpic2} alt="" /></div>
                                <div className='w-[30%] overflow-hidden '> <a href="#" className='text-blue-600  hover:underline overflow-ellipsis overflow-hidden block  whitespace-nowrap' >sd</a></div>
                                <div className='w-[15%] flex items-center gap-2'>sd</div>
                                <div className='w-[10%]'>sd</div>
                                <div className='w-[10%]'>asdf</div>
                                <div className='w-[10%] h-full flex items-center'>qwe</div>
                                <div className='w-[10%] flex'>qwe </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:max-w-[400px] w-full'>
                        <div style={{ backgroundColor: color.bg1 }} className=' w-full rounded-xl border border-gray-300 shadow-xl py-6 px-4'>
                            <h1 className='font-bold text-2xl'>Summary</h1>

                            <div className='flex justify-between mt-4'>
                                <span>Items Total : </span>
                                <span>$1200</span>
                            </div>

                            <div className='flex justify-between mt-4'>
                                <span>Tax : </span>
                                <span>$100</span>
                            </div>
                            <div className='flex justify-between mt-4'>
                                <span>sub total : </span>
                                <span>$1300</span>
                            </div>
                            <div className='flex justify-between mt-4'>
                                <span>Shipping cost : </span>
                                <span>$50</span>
                            </div>

                            <div className='flex justify-between mt-3 font-bold text-xl py-3 border-t border-b border-dotted border-gray-950'>
                                <span>Total </span>
                                <span>$50</span>
                            </div>
                        </div>

                        <div style={{ backgroundColor: color.bg1 }} className=' w-full rounded-xl border border-gray-300 shadow-xl mt-3 py-6 px-4'>
                            <h1 className='font-bold text-2xl'>Order Status</h1>

                            <select style={{ backgroundColor: color.bg1 }} name="" id="" className=' text-gray-500 mt-6 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                                <option value="Pending">Pending</option>
                                <option value="Complted">Completed</option>
                                <option value="Canceled"> Canceled</option>
                            </select>
                            <button className='w-full mt-6 rounded text-white py-2 cursor-pointer bg-blue-500 hover:bg-blue-700'>Update</button>
                        </div>
                    </div>

                </div>

                <div style={{ backgroundColor: color.bg1 }} className=' w-full rounded-xl border border-gray-300 shadow-xl mt-3 py-6 px-4'>
                    <h1 className='text-xl md:text-3xl lg:text-3xl font-bold' >Details</h1>
                    <div className='mt-4 flex gap-10'>
                        <div className='flex items-start'>
                            <User size={20}/>
                            <div >
                                <h1 className= ' text-[18px] font-[700]' >Customer Name</h1>
                                <p className='text-blue-600  text-[18px]' >Umar Farooq</p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <Mail size={20}/>
                            <div >
                                <h1 className= ' text-[18px] font-[700]' >Email</h1>
                                <p className='text-blue-600  text-[18px]' >UmarFarooq@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <PhoneIcon size={20}/>
                            <div >
                                <h1 className= ' text-[18px] font-[700]' >Phone</h1>
                                <p className='text-blue-600  text-[18px]' >03227204787</p>
                            </div>
                        </div>
                    </div>
                        <div className='flex items-start'>
                            <MapPin  size={20} />
                            <div >
                                <h1 className= ' text-[18px] font-[700]' >Address</h1>
                                <p className='text-blue-600  text-[18px]' >
                                    <div className='flex gap-2' ><h3 className='text-black font-[500]' >State :</h3><span>Punjab</span></div>
                                    <div className='flex gap-2' ><h3 className='text-black font-[500]' >City :</h3><span>Sheikhupura</span></div>
                                    <div className='flex gap-2' ><h3 className='text-black font-[500]' >Zip Code :</h3><span>39350</span></div>
                                    <div className='flex gap-2' ><h3 className='text-black font-[500]' >Address : </h3><span>Jandialah Road Mohallah Qadirabad Sheikhupura</span></div>
                                </p>
                            </div>
                        </div>                       
                </div>

            </div>
        </div>
    )
} 

export default AdminOrder