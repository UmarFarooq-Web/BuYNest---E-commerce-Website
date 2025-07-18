import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import SubNavbar from '../Components/SubNavbar'
import color from "../colors.js"
import logo from '/logo.jpg'
import { Loader, Trash2 } from 'lucide-react'
import { useStep } from '../StepProvider.jsx'
import { useNavigate } from 'react-router-dom'
import useStore from '../store/useStore.js'
import { useEditor } from '@tiptap/react'
import toast from 'react-hot-toast'
import UserInstance from '../axios/userInstanse.js'
import { Link } from 'react-router-dom'
import NoItemsInCart from '../Components/EmptyCart.jsx'

const Cart = () => {
    const { setStep } = useStep();
    const navigate = useNavigate()
    const [ProductsData, setProductsData] = useState(null);
    const [IsLoadingCart, setIsLoadingCart] = useState(false);
    
    const { cartProducts, setCartProducts , setUserData } = useStore();

    const handleCheckout = () => {
        setUserData({OrderItems:cartProducts , Total:getSubTotal()})
        
        setStep(2);
        navigate("/shipping")
    }

    const data = {
        tax:100,
        shippingcost:100,
        discount:83
    }

    const handleDelete = (ProductId) => {
        
        const cart = JSON.parse(localStorage.getItem('cart')) || []

        const newCart = cart.filter((e)=>e.ProductId !== ProductId)

        localStorage.setItem('cart' , JSON.stringify(newCart));

        window.location.reload()
        
    }


    const getSubTotal = () =>{
        if (!ProductsData || ProductsData.length === 0) return 0;
        let subTotal = 0;

        ProductsData.forEach(element => {
            subTotal += element.Total
        });

        return subTotal
    }


    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartProducts(cart);
    }, [])

    useEffect(() => {
        async function fun() {
            if (cartProducts.length <= 0) return
            try {
                setIsLoadingCart(true)
                const res = await UserInstance.post("/get-cart-products", { Products: JSON.stringify(cartProducts) })
                setProductsData(res.data.data);
            } catch (error) {
                toast.error(error?.response?.data?.message || "Internal server Error")
                console.log("Error while fatching data for cart in cartPage : ", error)
            }
            setIsLoadingCart(false)
        }

        fun()

    }, [cartProducts])







    return (
        <div className='min-h-[100vh] relative flex flex-col' style={{ backgroundColor: color.bg2 }}>
            <Navbar />
            <SubNavbar />
            <div className='flex justify-center grow'>

                <div className='w-full max-w-[1200px] px-2'>
                    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl mt-[15px]  sm:mt-[25px] md:mt-[30px]'>Cart</h1>
                    {cartProducts.length > 0?<div className='flex-col lg:flex-row flex'>
                        <div className='flex  mt-[15px]  sm:mt-[25px] md:mt-[30px] overflow-auto  '>
                            <div className='min-w-[786px] max-w-[786px] overflow-auto'>
                                <hr className='text-gray-300' />

                                <div className='w-full flex gap-1'>
                                    <div className='w-[10%]'></div>
                                    <div className='w-[29%]'>Products</div>
                                    <div className='w-[12%]' >Size</div>
                                    <div className='w-[10%]'>Color</div>
                                    <div className='w-[10%]'>Price</div>
                                    <div className='w-[13%]'>Quantity</div>
                                    <div className='w-[10%]'>Total</div>
                                    <div className='w-[8%]'></div>
                                </div>
                                <hr className='text-gray-300' />



                                <div className='max-h-[265px] overflow-y-auto'>

                                    {IsLoadingCart? <div className='text-blue-500 w-full flex justify-center ' ><Loader size={40} /></div> : !ProductsData? <div className='text-blue-400 text-2xl flex justify-center' >No Product is in your Cart</div>  : 
                                    ProductsData.map((e)=>( <div key={e._id}> <div className='w-full flex my-[5px] gap-1 h-[55px]'>
                                        <div className='w-[7%] p-1 border border-gray-300 rounded'><img src={logo} alt="" /></div>
                                        <div className='w-[32%]  py-2 overflow-y-hidden text-[13px] text-blue-500 font-semibold hover:underline'><Link to={`/product/${e._id}`}>{e.Title}</Link></div>
                                        <div className='w-[12%] py-2 flex items-center text-gray-500' >{e.Variant?.find(a=>a.Option == "Size")?e.Variant.find(a=>a.Option == "Size")?.value:"Null"}</div>
                                        <div className='w-[10%] py-2 flex items-center text-gray-500'>{e.Variant?.find(a=>a.Option == "Color")?e.Variant.find(a=>a.Option == "Color")?.value:"Null"}</div>
                                        <div className='w-[10%] py-2 flex items-center text-gray-500 '>{e.Price}</div>
                                        <div className='w-[13%] py-2 flex items-center text-gray-500 gap-[5px] '><span className='w-[20px] text-center'>{e.Quantity}</span></div>
                                        <div className='w-[10%] py-2 flex items-center text-gray-500'>{e.Total}</div>
                                        <button  onClick={()=>handleDelete(e._id)} className='w-[6%] py-2 flex items-center text-gray-500 hover:text-gray-800'><Trash2 size={20} /></button>
                                    </div>
                                    <hr className='text-gray-300' /></div>))}







                                    <hr className='text-gray-300' />

                                </div>

                                <div className='w-full my-2 flex'>
                                    <div className=' flex justify-between w-[94%]'>
                                        <span>Items subtotal</span>
                                        <span>${getSubTotal()}</span>
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
                                <span>${getSubTotal()}</span>
                            </div>

                            <div className='flex justify-between mt-3'>
                                <span>Tax : </span>
                                <span>${data.tax}</span>
                            </div>
                            <div className='flex justify-between mt-3'>
                                <span>Shipping cost : </span>
                                <span>${data.shippingcost}</span>
                            </div>
                            <div className='flex justify-between mt-3'>
                                <span>sub total : </span>
                                <span>${getSubTotal() + data.tax + data.shippingcost} </span>
                            </div>
                            <div className='flex justify-between mt-3'>
                                <span>Discount : </span>
                                <span>-${data.discount}</span>
                            </div>

                            <div className='flex justify-between mt-3 font-bold text-2xl py-3 border-t border-b border-dotted border-gray-950'>
                                <span>Total </span>
                                <span>${(getSubTotal() + data.tax + data.shippingcost)-data.discount}</span>
                            </div>

                            <button onClick={handleCheckout} className='w-full mt-6 rounded text-white py-2 cursor-pointer bg-blue-500 hover:bg-blue-700'>Proceed to Checkout</button>

                        </div>
                    </div>:
                    <NoItemsInCart/>
                     }

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