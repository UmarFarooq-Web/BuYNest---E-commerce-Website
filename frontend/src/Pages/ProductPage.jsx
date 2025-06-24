import React, { useRef, useState } from 'react'
import color from '../colors';
import pic1 from '/textpic1.jpeg'
import pic2 from '/testpic2.jpeg'
import pic3 from '/testpic3.jpg'
import pic4 from '/testpic4.jpeg'
import Navbar from '../Components/Navbar';
import SubNavbar from '../Components/SubNavbar';
import StarRatings from 'react-star-ratings';
import { ShoppingCart } from 'lucide-react';

const ProductPage = () => {
    const [TranslateValue, setTranslateValue] = useState(0);
    const [SelectedImage, setSelectedImage] = useState(0);
    const divRef = useRef(null);
    const [Images, setImages] = useState([pic1, pic2, pic3, pic4])

    const Handleclick = (index) => {
        const width = -(index * (divRef.current.offsetWidth - 14));
        setTranslateValue(width);
        setSelectedImage(index)

    }
    return (
        <div>
            <Navbar />
            <SubNavbar />
            <div className='flex justify-center flex-col items-center pt-6 m-3'>


                <div className='flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:items-start w-full max-w-[1200px] gap-4'>

                    {/* Picture section */}
                    <div className='flex flex-col-reverse md:flex-row gap-2.5 lg:shrink-0'>
                        <div className=' flex md:flex-col gap-2'>
                            {Images.map((e, i) => (
                                <div key={i} id='1' onClick={() => Handleclick(i)} className={`w-[90px] h-[90px] border border-gray-300 p-2 rounded flex justify-center items-center object-contain hover:border-blue-500 cursor-pointer `} style={SelectedImage == i ? { borderColor: color.Blue } : {}}>
                                    <img src={e} alt="" />
                                </div>
                            ))}
                        </div>

                        <div ref={divRef} className='max-w-[500px] h-full max-h-[500px] overflow-hidden border border-gray-300 rounded-[10px] p-3'>
                            <div className='min-w-full flex gap-3 transition-all duration-300' style={{ transform: `translateX(${TranslateValue}px)` }}>
                                {Images.map((e, i) => (
                                    <img key={i} className='min-w-full' src={e} alt="" />
                                ))}
                            </div>
                        </div>

                    </div>


                    {/* Content Section */}
                    <div className=' flex flex-col gap-1'>
                        <div> <StarRatings
                            rating={4.5}
                            starRatedColor="orange"
                            numberOfStars={5}
                            name='rating'
                            starDimension="19px"
                            starSpacing="1px"
                        /> <span className='text-sm text-gray-500'>(45 People Rated) </span></div>

                        <h1 className='font-bold lg:text-2xl md:text-xl'>24" iMac® with Retina 4.5K display - Apple M1 8GB Memory - 256GB SSD - w/Touch ID (Latest Model) - Blue</h1>
                        <p className='flex items-end lg:gap-4 md:gap-2 gap-1 lg:mt-5 md:mt-3.5 sm:mt-2 mt-1 '><span className='lg:text-4xl md:text-3xl text-2xl font-bold'>$3000.99</span><span className='lg:text-3xl md:text-2xl text-xl text-gray-500 line-through'>$14000</span><span className='text-orange-400 lg:text-2xl md:text-xl font-bold'>10% off</span></p>
                        <span className='text-green-500 pt-7 lg:text-2xl md:text-xl'>In Stock</span>
                        <p><b>Do you want it on Saturday, July 29th?</b> Choose <b>Saturday Delivery</b> at checkout if you want your order delivered within 12 hours 43 minutes, Details. <b> Gift wrapping is available.</b> </p>
                        <div className='flex gap-3 border border-amber-500 p-2 rounded-xl'>
                            <div className='text-amber-500 md:text-xl'>Size:</div>
                            <select className='bg-amber-500 text-white rounded' name="Variants" id="Variants">
                                <option value="">SELECT</option>
                                <option value="SM">SM</option>
                                <option value="LG">LG</option>
                                <option value="">XL</option>
                                <option value="">XXL</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:items-start w-full max-w-[1200px] gap-4'>
                    <div className='w-[100%] lg:w-[600px] flex gap-2 mt-4 md:mt-0.5 lg:mt-0.5'>
                        <button className='flex items-center justify-center py-3 w-[50%] border border-amber-500 rounded-4xl text-amber-500 hover:bg-amber-500 hover:text-white cursor-pointer transition duration-200'><ShoppingCart />Add to cart</button>
                        <button className='flex items-center justify-center py-3 w-[50%] border border-amber-500 rounded-4xl text-white bg-amber-500 hover:bg-amber-600 transition duration-200 cursor-pointer'><ShoppingCart />Buy Now</button>

                    </div>
                    <div className='flex gap-3'>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default ProductPage