import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import SubNavbar from '../Components/SubNavbar';
import color from "../colors";
import logo from "/logo.jpg";
import useStore from '../store/useStore';
import toast from 'react-hot-toast';
import UserInstance from '../axios/userInstanse';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { userData, setUserData } = useStore()
    const [PaymentType, setPaymentType] = useState("Card")
    const [CardData, setCardData] = useState({
        Type: "",
        Name: "",
        Number: "",
        ExpireMonth: "",
        ExpireYear: "",
        CVC: ""
    })
    const years = Array.from({ length: 2036 - 2000 }, (_, i) => 2000 + i);

    const navigate = useNavigate()

    const handleCardDataChange = (e) => {
        setCardData({ ...CardData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async () => {

        if (PaymentType === "Card") {

            if (CardData.Type == "") return toast.error("Select Card Type")
            if (CardData.Name == "") return toast.error("Name is required")
            if (CardData.Number == "") return toast.error("Number is required")
            if (CardData.ExpireMonth == "") return toast.error("Expiry Month is required")
            if (CardData.ExpireYear == "") return toast.error("Expiry Year is required")
            if (CardData.CVC == "") return toast.error("CVC is required")

            setUserData({ ...userData, PaymentType, CardData })

            try {
                const res = await UserInstance.post("/place-order", { Data: { ...userData, PaymentType, CardData } })
                toast.success(res.data.message)
                navigate("/")
            } catch (error) {
                console.log("Error in handle Submit in CheckoutPage : ", error)
                toast.error(error.response?.data?.message || "Interal Server Error")
            }



        }

    }


    if (!userData) return

    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <SubNavbar />

            <div className='grow flex justify-center' style={{ backgroundColor: color.bg2 }} >

                <div className='w-full max-w-[1200px] mx-4' >

                    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl mt-[15px]  sm:mt-[25px] md:mt-[30px]'>Checkout</h1>

                    <div>
                        {/* <div className='mt-[10px]  sm:mt-[20px] md:mt-[25px] '>
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

                        </div> */}

                        <div className='mt-[10px]  sm:mt-[20px] md:mt-[25px] '>

                            <div className='flex gap-3 items-end'>
                                <h1 className='sm:text-xl md:text-2xl font-bold'>Shipping Details</h1>
                            </div>
                            <div className='flex mt-6 '>
                                <span className='w-[70px] sm:w-[100px] md:w-[150px] font-medium'>Name</span>
                                <span className='mr-[20px]'>:</span>
                                <span className='w-[100%] max-w-[300px]'>{userData.Data.FullName}</span>
                            </div>
                            <div className='flex mt-3'>
                                <span className='w-[70px] sm:w-[100px] md:w-[150px] font-medium'>Address</span>
                                <span className='mr-[20px]'>:</span>
                                <span className='w-[100%] max-w-[300px]'>{userData.Data.Address}</span>
                            </div>
                            <div className='flex mt-3 '>
                                <span className='w-[70px] sm:w-[100px] md:w-[150px] font-medium'>Phone</span>
                                <span className='mr-[20px]'>:</span>
                                <span className='w-[100%] max-w-[300px]'>{userData.Data.PhoneNumber}</span>
                            </div>

                        </div>

                        <div className='mt-[10px]  sm:mt-[20px] md:mt-[25px] '>
                            <h1 className='sm:text-xl md:text-2xl font-bold'>Payment Method</h1>
                            <div className='font-medium flex  gap-7 mt-3'>
                                <div className='flex gap-2'>
                                    <input type="radio" onChange={() => setPaymentType("Card")} checked={PaymentType === 'Card'} value={"Card"} name='payment' id='Card' />
                                    <label htmlFor="Card">Card</label>
                                </div>
                                <div className='flex gap-2'>
                                    <input type="radio" onChange={() => setPaymentType("COD")} checked={PaymentType === 'COD'} value={"COD"} name='payment' id='cash' />
                                    <label htmlFor="cash">Cash on Delivery</label>
                                </div>

                            </div>

                            <div className='mt-4 w-full max-w-[700px] mb-9'>

                                {PaymentType === "Card" && <>

                                    <div className='flex gap-3 w-full flex-col md:flex-row '>
                                        <div className='w-full  md:w-[50%]'>
                                            <div className='font-medium'>Select Card</div>
                                            <select style={{ backgroundColor: color.bg1 }} value={CardData.Type} onChange={handleCardDataChange} name="Type" id="cardType" className=' text-gray-500 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                                                <option value="Select">Select a card</option>
                                                <option value="Visa">Visa</option>
                                                <option value="Master Card"> Master Card</option>
                                                <option value="Discover">Discover</option>
                                                <option value="American Express">Express</option>
                                            </select>
                                        </div>

                                        <div className='w-full md:w-[50%]'>
                                            <div className='font-medium'>Card Number</div>
                                            <input type="text" style={{ backgroundColor: color.bg1 }} value={CardData.Number} name='Number' onChange={handleCardDataChange} className=' border p-1 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' placeholder='Enter card number' />
                                        </div>
                                    </div>

                                    <div className='w-full mt-3'>
                                        <div className='font-medium'>Name</div>
                                        <input type="text" style={{ backgroundColor: color.bg1 }} value={CardData.Name} name='Name' onChange={handleCardDataChange} className=' border p-1 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' placeholder='Enter Name' />
                                    </div>


                                    <div className='flex gap-3 w-full flex-col md:flex-row mt-3 '>
                                        <div className='w-full  md:w-[50%] flex gap-1'>
                                            <div className='w-[50%]'>
                                                <div className='font-medium'>Expire month</div>
                                                <select style={{ backgroundColor: color.bg1 }} value={CardData.ExpireMonth} name='ExpireMonth' onChange={handleCardDataChange} id="cardType" className=' text-gray-500 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                                                    <option value="Select">Select a card</option>
                                                    <option value="01">January</option>
                                                    <option value="02">February</option>
                                                    <option value="03">March</option>
                                                    <option value="04">April</option>
                                                    <option value="05">May</option>
                                                    <option value="06">June</option>
                                                    <option value="07">July</option>
                                                    <option value="08">August</option>
                                                    <option value="09">September</option>
                                                    <option value="10">October</option>
                                                    <option value="11">November</option>
                                                    <option value="12">December</option>
                                                </select>
                                            </div>
                                            <div className='w-[50%]'>
                                                <div className='font-medium'>Expire year</div>
                                                <select style={{ backgroundColor: color.bg1 }} value={CardData.ExpireYear} name="ExpireYear" onChange={handleCardDataChange} id="cardType" className=' text-gray-500 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                                                    <option value="Select">Select a card</option>
                                                    {years.map((e, i) => (
                                                        <option value={e}>{e}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className='w-full md:w-[50%]'>
                                            <div className='font-medium'>CVC</div>
                                            <input type="text" style={{ backgroundColor: color.bg1 }} value={CardData.CVC} name="CVC" onChange={handleCardDataChange} className=' border p-1 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' placeholder='Enter CVC' />
                                        </div>
                                    </div>
                                </>}
                                <button onClick={handleSubmit} className='w-full mt-6 rounded text-white py-2 cursor-pointer bg-blue-500 hover:bg-blue-700'>Pay</button>

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