import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import SubNavbar from '../Components/SubNavbar'
import color from "../colors"
import logo from "/logo.jpg"
import { Country, State, City } from 'country-state-city';
import { useStep } from '../StepProvider'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import useStore from '../store/useStore'

const CheckoutPage = () => {
    const [States, setStates] = useState([])
    const [Cities, setCities] = useState([])

    const [SelectedState, setSelectedState] = useState('')

    const { setStep } = useStep()

    const navigate = useNavigate();

    const [ Data, setData ] = useState({
        FullName: "",
        Email: "",
        PhoneNumber: "",
        Address: "",
        State: "",
        City: "",
        Zip: ""

    })

    const {setUserData , userData} = useStore()

    useEffect(() => {
        const s = State.getStatesOfCountry('PK')
        setStates(s);
    }, [])

    useEffect(() => {
        const s = City.getCitiesOfState('PK', SelectedState)
        setCities(s);

    }, [SelectedState])

    const HandStateChange = (e) => {
        setSelectedState(e.target.value)
        console.log(e.target.value);
    }

    const handleDataChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })
    }

    const handleCheckout = () => {

        // if(!Data.FullName) return toast.error("Full Name is Required")
        // if(!Data.Email) return toast.error("Email is Required")
        // if(!Data.PhoneNumber) return toast.error("PhoneNumber is Required")
        // if(!Data.Address) return toast.error("Address is Required")
        // if(!Data.State) return toast.error("State is Required")
        // if(!Data.City) return toast.error("City is Required")

        setUserData({...userData , Data} )

        setStep(3);
        navigate("/checkout")
    }


    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <SubNavbar />


            <div className='grow flex justify-center' style={{ backgroundColor: color.bg2 }} >

                <div className='w-full max-w-[1200px] mx-4' >

                    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl mt-[15px]  sm:mt-[25px] md:mt-[30px]'>Shipping Info</h1>

                    <div>


                        <div className='mt-[10px]  sm:mt-[20px] md:mt-[25px] '>

                            <div className='mt-4 w-full max-w-[700px] mb-9'>
                                <div className='w-full mt-5'>
                                    <div className='font-medium'>Full Name</div>
                                    <input type="text" style={{ backgroundColor: color.bg1 }} value={Data.FullName} name='FullName' onChange={handleDataChange} className=' text-[14px] border p-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' placeholder='Enter Full Name' />
                                </div>

                                <div className='flex mt-5 gap-3 w-full flex-col md:flex-row '>
                                    <div className='w-full  md:w-[50%]'>
                                        <div className='font-medium'>Email</div>
                                        <input type='text' placeholder='Enter Email' style={{ backgroundColor: color.bg1 }} value={Data.Email} name='Email' onChange={handleDataChange} id="cardType" className=' text-[14px] p-2 text-gray-500 border w-full border-gray-300 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' />
                                    </div>

                                    <div className='w-full md:w-[50%]'>
                                        <div className='font-medium'>Phone</div>
                                        <input type="text" placeholder="Enter Phone Number" style={{ backgroundColor: color.bg1 }}value={Data.PhoneNumber} name='PhoneNumber' onChange={handleDataChange} className='text-[14px] border p-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' />
                                    </div>
                                </div>

                                <div className='w-full mt-5'>
                                    <div className='font-medium'>Address</div>
                                    <input type="text" placeholder='Address Line' style={{ backgroundColor: color.bg1 }} value={Data.Address} name='Address' onChange={handleDataChange} className='text-[14px] border p-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' />
                                </div>

                                <div className='flex gap-3 mt-5 w-full flex-col md:flex-row '>

                                    <div className='grow'>
                                        <div className='font-medium'>State</div>
                                        <select onChange={(e)=>{HandStateChange(e) ; handleDataChange(e)}} value={Data.State} name="State" style={{ backgroundColor: color.bg1 }} id="cardType" className=' text-[14px] p-2 text-gray-500 border w-full border-gray-300  rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                                            <option value="">-Select-</option>
                                            {States.length > 0 && States.map((e, i) => (
                                                <option value={e.isoCode}>{e.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='grow'>
                                        <div className='font-medium'>City</div>
                                        <select style={{ backgroundColor: color.bg1 }} value={Data.City} onChange={handleDataChange}  name="City" id="cardType" className=' text-[14px] p-2 text-gray-500 border w-full border-gray-300 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                                            <option value="">-Select-</option>
                                            {Cities.length > 0 && Cities.map((e, i) => (
                                                <option value={e.isoCode}>{e.name}</option>
                                            ))}
                                        </select>
                                    </div>


                                    <div className=''>
                                        <div className='font-medium'>Zip</div>
                                        <input type="text" style={{ backgroundColor: color.bg1 }} value={Data.Zip} name='Zip' onChange={handleDataChange} className=' border p-1 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' placeholder='Enter Zip code' />
                                    </div>
                                </div>

                                <div className='flex gap-3 mt-5 w-full flex-col md:flex-row'>
                                    <div className='w-1/3'>
                                        <button onClick={handleCheckout} className='w-full mt-6 rounded text-white py-2 cursor-pointer bg-blue-500 hover:bg-blue-700'>Proceed to Checkout</button>

                                    </div>
                                </div>



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