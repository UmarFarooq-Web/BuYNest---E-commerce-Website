import React, { useState } from 'react'
import banner from "/banner.png"
import StarRatings from 'react-star-ratings'

const ProductCard = () => {
    const [IsHover , setIsHover] = useState(false);
    return (
        <a onMouseEnter={()=>setIsHover(true)}  onMouseLeave={()=>setIsHover(false)} className='mt-5' >
            <div className='max-w-[300px] w-full max-h-full h-[300px] border border-gray-300 p-2.5 rounded-xl flex justify-center items-center overflow-hidden'><img className={`transition-all duration-300 ${IsHover?"scale-110":""}`} src={banner} alt="" /></div>
            <div className='max-w-[300px] w-full mt-7 text-sm font-bold px-0.5 '>PlayStation 5 DualSense Wireless Controller</div>
            <div> <StarRatings
                rating={4.5}
                starRatedColor="orange"
                numberOfStars={5}
                name='rating'
                starDimension="19px"
                starSpacing="1px"
            /> <span className='text-sm text-gray-500'>(45 People Rated) </span></div>
            <div className='flex items-center gap-2 mt-10'> <span className='text-2xl text-gray-500 line-through '>$1000</span> <span  className='text-3xl font-bold' >$599</span> </div>

        </a>
    )
}

export default ProductCard