import React from 'react'
import { ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import color from '../colors'



const CategoryBar = () => {
    const [IsHover, setIsHover] = useState([false, false])
    const [Data, setData] = useState([
  {
    Name: "Grocery",
    Link: "https://www.google.com",
  },
  {
    Name: "Products",
    Link: "https://www.youtube.com",
  },
  {
    Name: "Electronics",
    Link: "https://www.bestbuy.com",
  },
  {
    Name: "Clothing",
    Link: "https://www.zara.com",
  },
  {
    Name: "Home & Kitchen",
    Link: "https://www.ikea.com",
  },
  {
    Name: "Books",
    Link: "https://www.amazon.com/books",
  },
  {
    Name: "Toys",
    Link: "https://www.toysrus.com",
  },
  {
    Name: "Health & Beauty",
    Link: "https://www.sephora.com",
  },
  {
    Name: "Automotive",
    Link: "https://www.autozone.com",
  },
  {
    Name: "Sports & Outdoors",
    Link: "https://www.decathlon.com",
  }
])


    const UpdateArray = (i, e) => {
        let newArray = [...IsHover];
        newArray[i] = e;
        setIsHover(newArray)
    }

    return (
        <div className='w-full max-w-[1200px] overflow-x-auto flex gap-13 py-6  m-auto'>
            {Data.map((e, i) => (
                <a href={e.Link} onMouseEnter={() => UpdateArray(i, true)} onMouseLeave={() => UpdateArray(i, false)} className='flex flex-col gap-3 items-center cursor-pointer'>
                    <div className={`w-[65px] h-[65px] rounded flex justify-center items-center`} style={IsHover[i] ? { backgroundColor: color.Blue } : { backgroundColor: "#E5EDFF" }}><ShoppingBag size={35} color={IsHover[i] ? "white" : "black"} /></div>
                    <span className={`text-[12px] w-full text-center ${IsHover[i] ? "underline" : ""}`}>{e.Name}</span>
                </a>))}
        </div>
    )
}

export default CategoryBar