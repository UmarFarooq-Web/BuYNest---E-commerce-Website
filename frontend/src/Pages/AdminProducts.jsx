import React, { use, useState } from 'react'
import color from '../colors'
import { Search, ChevronDown, Check, Clock3, ChevronRight, ChevronLeft } from 'lucide-react'
import textpic2 from '/testpic2.jpeg'
import StarRatings from 'react-star-ratings';


const AdminProducts = () => {
    const [LatestReviewSearchBarFocus, setLatestReviewSearchBarFocus] = useState(false)
    const [SearchText, setSearchText] = useState('')
    // const [Products, setProducts] = useState([])



    const OriginalProductsData = [
        {
            Product: "Wireless Headphones",
            RegularPrice: 99.99,
            SalePrice: 79.99,
            Category: "Electronics",
            SubCategory: "Audio",
            Status: "Active",
            PublishedOn: "2025-05-01"
        },
        {
            Product: "Gaming Mouse",
            RegularPrice: 49.99,
            SalePrice: 39.99,
            Category: "Electronics",
            SubCategory: "Accessories",
            Status: "Active",
            PublishedOn: "2025-05-03"
        },
        {
            Product: "Running Shoes",
            RegularPrice: 120.00,
            SalePrice: 90.00,
            Category: "Footwear",
            SubCategory: "Sports",
            Status: "Inactive",
            PublishedOn: "2025-04-15"
        },
        {
            Product: "Bluetooth Speaker",
            RegularPrice: 79.99,
            SalePrice: 69.99,
            Category: "Electronics",
            SubCategory: "Audio",
            Status: "Active",
            PublishedOn: "2025-03-22"
        },
        {
            Product: "Yoga Mat",
            RegularPrice: 35.00,
            SalePrice: 25.00,
            Category: "Fitness",
            SubCategory: "Accessories",
            Status: "Active",
            PublishedOn: "2025-04-02"
        },
        {
            Product: "LED Monitor",
            RegularPrice: 199.99,
            SalePrice: 179.99,
            Category: "Electronics",
            SubCategory: "Display",
            Status: "Active",
            PublishedOn: "2025-06-10"
        },
        {
            Product: "Formal Shirt",
            RegularPrice: 45.00,
            SalePrice: 30.00,
            Category: "Apparel",
            SubCategory: "Men",
            Status: "Active",
            PublishedOn: "2025-05-20"
        },
        {
            Product: "Coffee Maker",
            RegularPrice: 89.00,
            SalePrice: 69.00,
            Category: "Home Appliances",
            SubCategory: "Kitchen",
            Status: "Inactive",
            PublishedOn: "2025-02-18"
        },
        {
            Product: "Smartphone Case",
            RegularPrice: 15.00,
            SalePrice: 10.00,
            Category: "Accessories",
            SubCategory: "Mobile",
            Status: "Active",
            PublishedOn: "2025-06-01"
        },
        {
            Product: "Backpack set",
            RegularPrice: 60.00,
            SalePrice: 45.00,
            Category: "Bags",
            SubCategory: "Travel",
            Status: "Active",
            PublishedOn: "2025-03-12"
        },
        {
            Product: "Lipstick Set",
            RegularPrice: 25.00,
            SalePrice: 18.00,
            Category: "Beauty",
            SubCategory: "Makeup",
            Status: "Active",
            PublishedOn: "2025-01-27"
        },
        {
            Product: "Office Chair",
            RegularPrice: 150.00,
            SalePrice: 125.00,
            Category: "Furniture",
            SubCategory: "Office",
            Status: "Inactive",
            PublishedOn: "2025-05-05"
        },
        {
            Product: "Scented Candles",
            RegularPrice: 20.00,
            SalePrice: 15.00,
            Category: "Home Decor",
            SubCategory: "Aromatherapy",
            Status: "Active",
            PublishedOn: "2025-03-08"
        },
        {
            Product: "Electric Kettle",
            RegularPrice: 40.00,
            SalePrice: 30.00,
            Category: "Home Appliances",
            SubCategory: "Kitchen",
            Status: "Active",
            PublishedOn: "2025-04-14"
        },
        {
            Product: "Tablet Stand",
            RegularPrice: 30.00,
            SalePrice: 20.00,
            Category: "Accessories",
            SubCategory: "Tech",
            Status: "Active",
            PublishedOn: "2025-06-18"
        },
        {
            Product: "Sports Watch",
            RegularPrice: 130.00,
            SalePrice: 110.00,
            Category: "Wearables",
            SubCategory: "Fitness",
            Status: "Inactive",
            PublishedOn: "2025-05-28"
        },
        {
            Product: "Notebook Pack",
            RegularPrice: 12.00,
            SalePrice: 8.00,
            Category: "Stationery",
            SubCategory: "Office",
            Status: "Active",
            PublishedOn: "2025-06-25"
        },
        {
            Product: "Hair Dryer",
            RegularPrice: 60.00,
            SalePrice: 45.00,
            Category: "Beauty",
            SubCategory: "Hair Care",
            Status: "Active",
            PublishedOn: "2025-04-30"
        }
    ];

    let Products = []

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    

    Products = OriginalProductsData.filter((e) => {

        if (SearchText.trim() === '') return true
        return e.Product.toLowerCase().includes(SearchText.toLowerCase()) || e.Category.toLowerCase().includes(SearchText.toLowerCase()) || e.SubCategory.toLowerCase().includes(SearchText.toLowerCase())
    })



    const RowsPerPage = 10;
    const [Page, setPage] = useState(0)
    const [ViewAllReviews, setViewAllReviews] = useState(false);
    const PaginatedProductsData = ViewAllReviews ? Products : Products.slice(Page * RowsPerPage, (Page + 1) * RowsPerPage);

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        // const date = Date.now()
        return new Intl.DateTimeFormat('en-US' , {
            month: 'short',    // "Nov"
            day: 'numeric',    // "5"
            hour: 'numeric',   // "3"
            minute: '2-digit', // "32"
            hour12: true       // "AM/PM" if you want
        }).format(date);
    };

    const getTimeAgo = (timestamp) => {
        const now = Date.now();
        const diff = Math.floor((now - timestamp) / 1000); // in seconds

        if (diff < 60) return 'Just now';
        if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;

        // Else, return formatted date
        return formatTimestamp(timestamp);
    };


    const getTimeFormatFormReviews = (timestamp) => {
        const date = new Date(timestamp);
        const now = Date.now();
        const diff = Math.floor((now - date) / 1000); // seconds

        const displayTime = diff < 86400
            ? getTimeAgo(timestamp)
            : formatTimestamp(timestamp);

        return displayTime;

    }

    const [Categorys, setCategorys] = useState(["Plants", "Toys"])
    return (
        <div >
            <div className='p-2 sm:p-3 md:p-5 lg:p-6' style={{ backgroundColor: color.bg2 }}>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold' >Products</h1>
                <div className='flex flex-col md:flex-row justify-between'>

                    <div className={`flex text-gray-400 items-center gap-2 border transition-all bg-white duration-100 mt-8 ${LatestReviewSearchBarFocus ? 'border-blue-500' : 'border-gray-400'} py-1 px-2 w-[400px] rounded `}>
                        <Search size={20} />
                        <input type="text" placeholder='Search' onChange={handleChange} value={SearchText} className='outline-none w-full placeholder:text-gray-400 text-black' onFocus={() => setLatestReviewSearchBarFocus(true)} onBlur={() => setLatestReviewSearchBarFocus(false)} />
                    </div>


                    <button className='mt-6 rounded px-4 text-white py-2 w-[200px] cursor-pointer bg-blue-500 hover:bg-blue-700'>Add Product</button>
                </div>
            </div>
            <hr className='text-gray-400' />




            <div style={{ backgroundColor: color.bg1 }} className='p-2 sm:p-3 md:p-5 lg:p-6'>


                {/* <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold' >All Products</h1>
                        <p className='text-md text-gray-600' ></p>
                    </div>
                    <div className={`flex text-gray-400 items-center gap-2 border transition-all duration-100 ${LatestReviewSearchBarFocus ? 'border-blue-500' : 'border-gray-400'} py-1 px-2 w-[400px] rounded `}>
                        <Search size={20} />
                        <input type="text" placeholder='Search' className='outline-none placeholder:text-gray-400 text-black' onFocus={() => setLatestReviewSearchBarFocus(true)} onBlur={() => setLatestReviewSearchBarFocus(false)} />
                    </div>
                </div> */}

                <div className='w-full  overflow-x-auto  p-1'>

                    <div className='min-w-[1200px]'>
                        <div className='flex justify-between font-bold text-[18px] border-t border-b border-gray-300 py-1'>
                            <div className='w-[4%]'></div>
                            <div className='w-[21%]'>Product</div>
                            <div className='w-[11%]'>Regular Price</div>
                            <div className='w-[11%]'>Sale Price</div>
                            <div className='w-[11%]'>Category</div>
                            <div className='w-[11%]'>Sub Category</div>
                            <div className='w-[11%]'>Status</div>
                            <div className='w-[11%]'>Published on</div>
                        </div>
                        {PaginatedProductsData.map((e, i) => (<div key={i} className='flex justify-between items-center h-[75px] border-b border-gray-300 py-2'>
                            <div className='w-[4%] h-[50px] lg:h-[60px] border border-gray-300 rounded flex justify-center items-center p-1 overflow-hidden'><img src={textpic2} alt="" /></div>
                            <div className='w-[21%] overflow-hidden '> <a href="#" className='text-blue-600  hover:underline overflow-ellipsis overflow-hidden block  whitespace-nowrap' > {e.Product}</a></div>
                            <div className='w-[11%] flex items-center gap-2'>{e.RegularPrice}</div>
                            <div className='w-[11%]'>{e.SalePrice}</div>
                            <div className='w-[11%] h-full flex items-center'>{e.Category}</div>
                            <div className='w-[11%]'>{e.SubCategory}</div>
                            <div className='w-[11%] flex'>
                                {
                                    e.Status == "Active" ? <div className='border rounded border-[#90D67F] text-[#1C6E3D] bg-[#D9FBD0] py-0.5 px-1 text-[10px] flex gap-0.5 font-medium' >Active<Check size={15} /></div>
                                        :
                                        <div className='border rounded border-[#FFCC85] text-[#BC3803] bg-[#FFEFCA] py-0.5 px-1 text-[10px] flex gap-0.5 font-medium' >Inactive<Clock3 size={15} /></div>
                                }
                            </div>

                            <div className='w-[11%]'>{getTimeFormatFormReviews(e.PublishedOn)}</div>
                        </div>))}

                        <div className='flex justify-between'>
                            <div className='flex gap-6 mt-3' >
                                <div className='text-[15px] text-gray-700'>{RowsPerPage * Page + 1} to {Math.min((Page + 1) * RowsPerPage, Products.length)} items of {Products.length}</div>
                                <button onClick={() => { setViewAllReviews(!ViewAllReviews) }} className='flex items-center text-[15px] cursor-pointer text-blue-500 hover:underline'> {ViewAllReviews ? "View less" : " View all "} <ChevronRight size={20} /></button>
                            </div>
                            <div className='flex gap-2'>
                                <button onClick={() => { if (Page > 0) { setPage(Page - 1) } }} className='flex items-center text-[15px] cursor-pointer text-blue-500 hover:underline' ><ChevronLeft size={20} />Previous</button>

                                <button onClick={() => { if (parseInt(Products.length / RowsPerPage) > Page) { setPage(Page + 1) } }} className='flex items-center text-[15px] cursor-pointer text-blue-500 hover:underline' >Next<ChevronRight /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>





        </div>
    )
}

export default AdminProducts