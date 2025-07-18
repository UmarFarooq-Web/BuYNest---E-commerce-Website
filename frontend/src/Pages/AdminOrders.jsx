import React, { use, useState } from 'react'
import color from '../colors'
import { Search, ChevronDown, Check, Clock3, ChevronRight, ChevronLeft } from 'lucide-react'
import textpic2 from '/testpic2.jpeg'
import StarRatings from 'react-star-ratings';
import { useEffect } from 'react';
import AdminInstance from '../axios/adminInstanse';


const AdminProducts = () => {
  const [LatestReviewSearchBarFocus, setLatestReviewSearchBarFocus] = useState(false)
  const [SearchText, setSearchText] = useState('')
  const [Orders, setOrders] = useState([])
  const [IsLoadingOrders, setIsLoadingOrders] = useState(false)



  const sampleOrders = [
    {
      OrderId: "ORD1001",
      Customer: "Ali Khan",
      Email: "ali.khan@example.com",
      Phone: "0301-1234567",
      Total: 4999,
      OrderStatus: "Completed",
      PaymentType: "Card",
      Date: "2025-06-10"
    },
  ];


  let FillteredOrders = []

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  async function FetchOrders() {
    setIsLoadingOrders(true)
    try {
      const res = await AdminInstance.get('/orders')
      setOrders(res.data);
      console.log(res.data)
    } catch (error) {
      console.log("error in FetchOrders function in AdminOrders : ", error)
      toast.error("Internal server Error")
    } finally {
      setIsLoadingOrders(false)
    }
  }

  useEffect(() => {
    FetchOrders()

  }, [])



  FillteredOrders = Orders?.filter((e) => {

    if (SearchText.trim() === '') return true
    return e.OrderId.toLowerCase().includes(SearchText.toLowerCase()) ||
      e.Total.toString().toLowerCase().includes(SearchText.toLowerCase()) ||
      e.Customer.toLowerCase().includes(SearchText.toLowerCase()) ||
      e.PaymentType.toLowerCase().includes(SearchText.toLowerCase()) ||
      e.Email.toLowerCase().includes(SearchText.toLowerCase()) ||
      e.Phone.toLowerCase().includes(SearchText.toLowerCase()) ||

      e.OrderStatus.toLowerCase().includes(SearchText.toLowerCase())

  })



  const RowsPerPage = 10;
  const [Page, setPage] = useState(0)
  const [ViewAllReviews, setViewAllReviews] = useState(false);
  const PaginatedOrdersData = ViewAllReviews ? FillteredOrders : FillteredOrders.slice(Page * RowsPerPage, (Page + 1) * RowsPerPage);

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
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold' >Orders</h1>
        <div className='flex flex-col md:flex-row justify-between'>

          <div className={`flex text-gray-400 items-center gap-2 border transition-all bg-white duration-100 mt-8 ${LatestReviewSearchBarFocus ? 'border-blue-500' : 'border-gray-400'} py-1 px-2 w-[400px] rounded `}>
            <Search size={20} />
            <input type="text" placeholder='Search' onChange={handleChange} value={SearchText} className='outline-none w-full placeholder:text-gray-400 text-black' onFocus={() => setLatestReviewSearchBarFocus(true)} onBlur={() => setLatestReviewSearchBarFocus(false)} />
          </div>


          {/* <button className='mt-6 rounded px-4 text-white py-2 w-[200px] cursor-pointer bg-blue-500 hover:bg-blue-700'>Add Product</button> */}
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
              <div className='w-[11%]'>Order</div>
              <div className='w-[11%]'>Customer</div>
              <div className='w-[20%]'>Email</div>
              <div className='w-[11%]'>Phone</div>
              <div className='w-[11%]'>Total</div>
              <div className='w-[11%]'>Order Status</div>
              <div className='w-[11%]'>Payment Type</div>
              <div className='w-[11%]'>Date</div>
            </div>
            {PaginatedOrdersData.map((e, i) => (<div key={i} className='flex justify-between items-center h-[75px] border-b border-gray-300 py-2'>
              {/* <div className='w-[4%] h-[50px] lg:h-[60px] border border-gray-300 rounded flex justify-center items-center p-1 overflow-hidden'><img src={textpic2} alt="" /></div> */}
              <div className='w-[11%] overflow-hidden '> <a href="#" className='text-blue-600  hover:underline overflow-ellipsis overflow-hidden block  whitespace-nowrap' > {e.OrderId}</a></div>
              <div className='w-[11%] flex items-center gap-2'>{e.Customer}</div>
              <div className='w-[20%]'>{e.Email}</div>
              <div className='w-[11%]'>{e.Phone}</div>
              <div className='w-[11%] h-full flex items-center'>{e.Total}</div>
              <div className='w-[11%] flex'>{e.OrderStatus} </div>
              <div className='w-[11%]'>{e.PaymentType}</div>

              <div className='w-[11%]'>{getTimeFormatFormReviews(e.Date)}</div>
            </div>))}

            <div className='flex justify-between'>
              <div className='flex gap-6 mt-3' >
                <div className='text-[15px] text-gray-700'>{RowsPerPage * Page + 1} to {Math.min((Page + 1) * RowsPerPage, FillteredOrders.length)} items of {FillteredOrders.length}</div>
                <button onClick={() => { setViewAllReviews(!ViewAllReviews) }} className='flex items-center text-[15px] cursor-pointer text-blue-500 hover:underline'> {ViewAllReviews ? "View less" : " View all "} <ChevronRight size={20} /></button>
              </div>
              <div className='flex gap-2'>
                <button onClick={() => { if (Page > 0) { setPage(Page - 1) } }} className='flex items-center text-[15px] cursor-pointer text-blue-500 hover:underline' ><ChevronLeft size={20} />Previous</button>

                <button onClick={() => { if (parseInt(FillteredOrders.length / RowsPerPage) > Page) { setPage(Page + 1) } }} className='flex items-center text-[15px] cursor-pointer text-blue-500 hover:underline' >Next<ChevronRight /></button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProducts