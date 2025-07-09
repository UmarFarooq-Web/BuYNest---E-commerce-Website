import React, { use, useState , useEffect } from 'react'
import color from '../colors'
import { Search, ChevronDown, Check, Clock3, ChevronRight, ChevronLeft, Loader } from 'lucide-react'
import textpic2 from '/testpic2.jpeg'
import StarRatings from 'react-star-ratings';
import AdminInstance from '../axios/adminInstanse';
import { Link } from 'react-router-dom';


const AdminProducts = () => {
    const [LatestReviewSearchBarFocus, setLatestReviewSearchBarFocus] = useState(false)
    const [SearchText, setSearchText] = useState('')
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0)
    const [Products, setProducts] = useState(null);


    const getProducts = async () => {
        try {
            const res = await AdminInstance.get(`/get-products?page=${page}&limit=10&search=${SearchText}`)
            setProducts(res.data.products)
            setTotalProducts(res.data.totalProducts);
            setTotalPages(res.data.pages);
            setPage(res.data.currentPage)

        } catch (error) {

        }

    }

    useEffect(() => {
        getProducts()
    }, [page , SearchText])


    const handleChange = (e) =>{
        setSearchText(e.target.value)
    }




    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        // const date = Date.now()
        return new Intl.DateTimeFormat('en-US', {
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


                    <Link to={'/admin/add-product'} className='mt-6 rounded px-4 text-white flex justify-center py-2 w-[200px] cursor-pointer bg-blue-500 hover:bg-blue-700'>Add Product</Link>
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
                        {Products ? <span>
                            {Products.map((e, i) => (<div key={i} className='flex justify-between items-center h-[75px] border-b border-gray-300 py-2'>
                                <div className='w-[4%] h-[50px] lg:h-[60px] border border-gray-300 rounded flex justify-center items-center p-1 overflow-hidden'><img src={textpic2} alt="" /></div>
                                <div className='w-[21%] overflow-hidden '> <a href="#" className='text-blue-600  hover:underline overflow-ellipsis overflow-hidden block  whitespace-nowrap' > {e.Title}</a></div>
                                <div className='w-[11%] flex items-center gap-2'>{e.RegularPrice}</div>
                                <div className='w-[11%]'>{e.SalePrice}</div>
                                <div className='w-[11%] h-full flex items-center'>{e.Category}</div>
                                <div className='w-[11%]'>{e.SubCategory}</div>
                                <div className='w-[11%] flex'>
                                    {
                                        e.Status == "Publish" ? <div className='border rounded border-[#90D67F] text-[#1C6E3D] bg-[#D9FBD0] py-0.5 px-1 text-[10px] flex gap-0.5 font-medium' >Active<Check size={15} /></div>
                                            :
                                            <div className='border rounded border-[#FFCC85] text-[#BC3803] bg-[#FFEFCA] py-0.5 px-1 text-[10px] flex gap-0.5 font-medium' >Inactive<Clock3 size={15} /></div>
                                    }
                                </div>

                                <div className='w-[11%]'>{getTimeFormatFormReviews(e.createdAt)}</div>
                            </div>))}

                            <div className='flex justify-between'>
                                <div className='flex gap-6 mt-3' >
                                    <div className='text-[15px] text-gray-700'>{10 * (page-1)} to {Math.min((page) * 10, totalProducts)} items of {totalProducts}</div>
                                 </div>
                                <div className='flex gap-2'>
                                    <button onClick={() => { if (page > 1) { setPage(page - 1) } }} className='flex items-center text-[15px] cursor-pointer text-blue-500 hover:underline' ><ChevronLeft size={20} />Previous</button>

                                    <button onClick={() => { if (totalPages > page) { setPage(page + 1) } }} className='flex items-center text-[15px] cursor-pointer text-blue-500 hover:underline' >Next<ChevronRight /></button>
                                </div>
                            </div></span> :<div> <Loader className='animate-spin'/> </div>}

                    </div>
                </div>
            </div>





        </div>
    )
}

export default AdminProducts