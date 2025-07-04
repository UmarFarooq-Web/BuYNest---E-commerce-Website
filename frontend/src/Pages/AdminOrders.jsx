import React, { use, useState } from 'react'
import color from '../colors'
import { Search, ChevronDown, Check, Clock3, ChevronRight, ChevronLeft } from 'lucide-react'
import textpic2 from '/testpic2.jpeg'
import StarRatings from 'react-star-ratings';


const AdminProducts = () => {
    const [LatestReviewSearchBarFocus, setLatestReviewSearchBarFocus] = useState(false)
    const [SearchText, setSearchText] = useState('')



    const Orders = [
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
  {
    OrderId: "ORD1002",
    Customer: "Sara Ahmed",
    Email: "sara.ahmed@example.com",
    Phone: "0320-9876543",
    Total: 2999,
    OrderStatus: "Pending",
    PaymentType: "COD",
    Date: "2025-06-12"
  },
  {
    OrderId: "ORD1003",
    Customer: "Hamza Malik",
    Email: "hamza.malik@example.com",
    Phone: "0345-6547890",
    Total: 8499,
    OrderStatus: "Canceled",
    PaymentType: "Card",
    Date: "2025-06-09"
  },
  {
    OrderId: "ORD1004",
    Customer: "Mehwish Tariq",
    Email: "mehwish.tariq@example.com",
    Phone: "0311-3344556",
    Total: 1500,
    OrderStatus: "Completed",
    PaymentType: "COD",
    Date: "2025-06-15"
  },
  {
    OrderId: "ORD1005",
    Customer: "Zain Raza",
    Email: "zain.raza@example.com",
    Phone: "0333-6677889",
    Total: 12500,
    OrderStatus: "Pending",
    PaymentType: "Card",
    Date: "2025-06-20"
  },
  {
    OrderId: "ORD1006",
    Customer: "Hira Shah",
    Email: "hira.shah@example.com",
    Phone: "0302-1122334",
    Total: 3999,
    OrderStatus: "Completed",
    PaymentType: "COD",
    Date: "2025-06-11"
  },
  {
    OrderId: "ORD1007",
    Customer: "Usman Javed",
    Email: "usman.javed@example.com",
    Phone: "0315-7788990",
    Total: 5500,
    OrderStatus: "Completed",
    PaymentType: "Card",
    Date: "2025-06-18"
  },
  {
    OrderId: "ORD1008",
    Customer: "Ayesha Noor",
    Email: "ayesha.noor@example.com",
    Phone: "0346-9988776",
    Total: 2300,
    OrderStatus: "Canceled",
    PaymentType: "COD",
    Date: "2025-06-08"
  },
  {
    OrderId: "ORD1009",
    Customer: "Bilal Yousuf",
    Email: "bilal.yousuf@example.com",
    Phone: "0331-4455667",
    Total: 7200,
    OrderStatus: "Completed",
    PaymentType: "Card",
    Date: "2025-06-21"
  },
  {
    OrderId: "ORD1010",
    Customer: "Nimra Saeed",
    Email: "nimra.saeed@example.com",
    Phone: "0307-5566778",
    Total: 3600,
    OrderStatus: "Pending",
    PaymentType: "COD",
    Date: "2025-06-16"
  },
  {
    OrderId: "ORD1011",
    Customer: "Faizan Ali",
    Email: "faizan.ali@example.com",
    Phone: "0321-8899001",
    Total: 9500,
    OrderStatus: "Completed",
    PaymentType: "Card",
    Date: "2025-06-13"
  },
  {
    OrderId: "ORD1012",
    Customer: "Madiha Hassan",
    Email: "madiha.hassan@example.com",
    Phone: "0340-7788555",
    Total: 4800,
    OrderStatus: "Canceled",
    PaymentType: "COD",
    Date: "2025-06-14"
  },
  {
    OrderId: "ORD1013",
    Customer: "Hassan Rauf",
    Email: "hassan.rauf@example.com",
    Phone: "0309-6677442",
    Total: 6900,
    OrderStatus: "Completed",
    PaymentType: "Card",
    Date: "2025-06-19"
  },
  {
    OrderId: "ORD1014",
    Customer: "Amna Yaqoob",
    Email: "amna.yaqoob@example.com",
    Phone: "0310-4433221",
    Total: 1700,
    OrderStatus: "Pending",
    PaymentType: "COD",
    Date: "2025-06-17"
  },
  {
    OrderId: "ORD1015",
    Customer: "Tariq Iqbal",
    Email: "tariq.iqbal@example.com",
    Phone: "0335-2255774",
    Total: 9999,
    OrderStatus: "Completed",
    PaymentType: "Card",
    Date: "2025-06-22"
  },
  {
    OrderId: "ORD1016",
    Customer: "Sana Nadeem",
    Email: "sana.nadeem@example.com",
    Phone: "0341-9090901",
    Total: 2750,
    OrderStatus: "Canceled",
    PaymentType: "COD",
    Date: "2025-06-07"
  },
  {
    OrderId: "ORD1017",
    Customer: "Rehan Sheikh",
    Email: "rehan.sheikh@example.com",
    Phone: "0308-5556664",
    Total: 8200,
    OrderStatus: "Completed",
    PaymentType: "Card",
    Date: "2025-06-23"
  },
  {
    OrderId: "ORD1018",
    Customer: "Lubna Farooq",
    Email: "lubna.farooq@example.com",
    Phone: "0322-3211234",
    Total: 6100,
    OrderStatus: "Pending",
    PaymentType: "COD",
    Date: "2025-06-24"
  }
];


    let FillteredOrders = []

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    

    FillteredOrders = Orders.filter((e) => {

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

    const [Categorys, setCategorys] = useState(["Plants" ,"Toys"])
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