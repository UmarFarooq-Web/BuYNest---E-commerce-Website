import React, { useState } from 'react'
import color from '../colors'
import { CircleAlert, ClockFading, Star, Search, Check, Clock3, Rows, ChevronRight, ChevronLeft } from 'lucide-react'
import TotalSalesLineGraph from '../Components/TotalSalesLineGraph';
import { data } from 'react-router-dom';
import TotalOrdersBarChart from '../Components/TotalOrdersBarChart'
import textpic2 from '/testpic2.jpeg'
import StarRatings from 'react-star-ratings';

const AdminDashboard = () => {

    const [LatestReviewSearchBarFocus, setLatestReviewSearchBarFocus] = useState(false)

    const [TotalSalesData, setTotalSalesData] = useState([
        {
            id: 'solid-line',
            data: [
                { x: '01 May', y: 1 },
                { x: '03 May', y: 3 },
                { x: '06 May', y: 3 },
                { x: '08 May', y: 2 },
                { x: '12 May', y: 2 },
                { x: '13 May', y: 5 },
                { x: '15 May', y: 5 },
                { x: '18 May', y: 9 },
                { x: '20 May', y: 4 },
                { x: '23 May', y: 4 },
                { x: '25 May', y: 1 },
                { x: '27 May', y: 2 },
                { x: '30 May', y: 2 },
            ],
        },
        {
            id: 'dashed-line',
            data: [
                { x: '01 May', y: 2 },
                { x: '03 May', y: 1 },
                { x: '06 May', y: 0 },
                { x: '12 May', y: 0 },
                { x: '13 May', y: 1 },
                { x: '15 May', y: 5 },
                { x: '18 May', y: 5 },
                { x: '20 May', y: 8 },
                { x: '23 May', y: 3 },
                { x: '25 May', y: 4 },
                { x: '27 May', y: 6 },
                { x: '30 May', y: 5 },
            ],
        },
    ]);


    const [TotalOrdersData, setTotalOrdersData] = useState([
        {
            id: 'A',
            value: 6,
            max: 10,
        },
        {
            id: 'B',
            value: 9,
            max: 10,
        },
        {
            id: 'C',
            value: 7,
            max: 10,
        },
        {
            id: 'D',
            value: 5,
            max: 10,
        },
        {
            id: 'E',
            value: 4,
            max: 10,
        },
        {
            id: 'F',
            value: 6,
            max: 10,
        },
        {
            id: 'G',
            value: 6,
            max: 10,
        },
    ])

    // Reviews Section variables and functions

    const ReviewsData = [
        {
            Product: "Wireless Headphones",
            Customer: "Alice Johnson",
            Rating: 4.5,
            Review: "Great sound quality and battery life.",
            Status: "APPROVED",
            Time: 1720017000000
        },
        {
            Product: "Smartphone Case",
            Customer: "Bob Smith",
            Rating: 4.0,
            Review: "Fits perfectly. Good grip.",
            Status: "PENDING",
            Time: 1720000000000
        },
        {
            Product: "Bluetooth Speaker",
            Customer: "Charlie Brown",
            Rating: 5.0,
            Review: "Amazing bass and clarity!",
            Status: "APPROVED",
            Time: 1719990000000
        },
        {
            Product: "USB-C Cable",
            Customer: "Diana Prince",
            Rating: 3.5,
            Review: "Works fine, but a bit short.",
            Status: "PENDING",
            Time: 1719985000000
        },
        {
            Product: "Gaming Mouse",
            Customer: "Ethan Wright",
            Rating: 4.8,
            Review: "Perfect for FPS games.",
            Status: "APPROVED",
            Time: 1719972000000
        },
        {
            Product: "LED Monitor",
            Customer: "Fiona Davis",
            Rating: 4.2,
            Review: "Crisp display and good refresh rate.",
            Status: "APPROVED",
            Time: 1719960000000
        },
        {
            Product: "Mechanical Keyboard",
            Customer: "George Miller",
            Rating: 4.6,
            Review: "Love the tactile feedback.",
            Status: "PENDING",
            Time: 1719950000000
        },
        {
            Product: "Fitness Tracker",
            Customer: "Hannah Lee",
            Rating: 4.0,
            Review: "Helps keep track of steps and sleep.",
            Status: "APPROVED",
            Time: 1719940000000
        },
        {
            Product: "Laptop Stand",
            Customer: "Ian Thompson",
            Rating: 3.8,
            Review: "Build quality is okay.",
            Status: "PENDING",
            Time: 1719930000000
        },
        {
            Product: "Portable SSD",
            Customer: "Jenna Wilson",
            Rating: 5.0,
            Review: "Fast and reliable storage.",
            Status: "APPROVED",
            Time: 1719920000000
        },
        {
            Product: "Smartwatch",
            Customer: "Kevin Parker",
            Rating: 4.3,
            Review: "Very responsive and stylish.",
            Status: "APPROVED",
            Time: 1719910000000
        },
        {
            Product: "Wireless Charger",
            Customer: "Laura Kim",
            Rating: 3.9,
            Review: "Charges slowly with case on.",
            Status: "PENDING",
            Time: 1719900000000
        },
        {
            Product: "Noise Cancelling Earbuds",
            Customer: "Michael Scott",
            Rating: 4.7,
            Review: "Excellent noise reduction.",
            Status: "APPROVED",
            Time: 1719890000000
        },
        {
            Product: "Ergonomic Chair",
            Customer: "Nina Patel",
            Rating: 4.1,
            Review: "Comfortable for long hours.",
            Status: "APPROVED",
            Time: 1719880000000
        },
        {
            Product: "4K Webcam",
            Customer: "Oscar Brooks",
            Rating: 4.0,
            Review: "Great video quality.",
            Status: "PENDING",
            Time: 1719870000000
        },
        {
            Product: "Tablet Stand",
            Customer: "Paula Reed",
            Rating: 3.6,
            Review: "Slightly wobbly, but works.",
            Status: "APPROVED",
            Time: 1719860000000
        },
        {
            Product: "Graphic Tablet",
            Customer: "Quentin Ross",
            Rating: 4.9,
            Review: "Perfect for digital art.",
            Status: "APPROVED",
            Time: 1719850000000
        },
        {
            Product: "Wireless Keyboard",
            Customer: "Rachel Adams",
            Rating: 4.2,
            Review: "Nice key travel and build.",
            Status: "PENDING",
            Time: 1719840000000
        }
    ]

    const RowsPerPage = 5;
    const [Page, setPage] = useState(0)
    const [ViewAllReviews, setViewAllReviews] = useState(false);
    const PaginatedReviewsData = ViewAllReviews ? ReviewsData : ReviewsData.slice(Page * RowsPerPage, (Page + 1) * RowsPerPage);

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

    return (
        <div >
            {/* Graph section */}
            <div className='flex flex-col 2xl:flex-row border-b border-gray-400' style={{ backgroundColor: color.bg2 }}>
                <div className='p-2 sm:p-3 md:p-5 lg:p-6 w-full 2xl:w-[50%]'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold' >Ecommerce Dashboard</h1>
                    <p className='text-gray-700' >Here's what's going on your business right now</p>
                    <div className='mt-3 sm:mt-5 md:mt-7 lg:mt-9 flex gap-8 flex-col md:flex-row  '>
                        <div className='flex flex-row gap-1'>
                            <span className='flex justify-center items-center'>
                                <Star size={50} className='text-green-400' />
                            </span>
                            <span>
                                <h2 className='text-xl font-bold'>67 new Orders</h2>
                                <p>Awaiting Processing</p>
                            </span>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <span className='flex justify-center items-center'>
                                <ClockFading size={50} className='text-blue-400' />
                            </span>
                            <span>
                                <h2 className='text-xl font-bold'>6 Order</h2>
                                <p>On Hold</p>
                            </span>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <span className='flex justify-center items-center'>
                                <CircleAlert size={50} className='text-red-300' />
                            </span>
                            <span>
                                <h2 className='text-xl font-bold'>12 Products</h2>
                                <p>Out of Stock</p>
                            </span>
                        </div>
                    </div>
                    <hr className='text-gray-600 my-5' />
                    {/* Line chart */}
                    <div className='my-2 '>
                        <h1 className='font-bold text-xl md:text-2xl'>Total Sales</h1>
                        <p>Payment received across all channels</p>
                        <div className='h-[500px]'>
                            <TotalSalesLineGraph data={TotalSalesData} />
                        </div>
                    </div>

                </div>

                <div className='grow p-2 sm:p-3 md:p-5 lg:p-6'>
                    <div className='flex'>
                        <div className='bg-white w-[100%] p-3 rounded-xl border border-gray-400'>
                            <div className='flex w-full justify-between'>
                                <span className='text-[15px] font-bold'>Total Orders</span>
                                <span className='text-[18px] font-bold' >1,232,445</span>
                            </div>
                            <div className='text-[13px] font-medium text-gray-600'>Last 7 day</div>
                            <div className='h-[500px]'>
                                <TotalOrdersBarChart data={TotalOrdersData} />
                            </div>
                            <div className='flex w-full justify-between'>
                                <span className='flex items-center gap-x-1'>
                                    <span className='w-[15px] h-[10px] rounded' style={{ backgroundColor: color.Blue }}></span>
                                    <span className='text-[14px]'>Completed</span>
                                </span>
                                <span className='text-[14px]'>54%</span>
                            </div>
                            <div className='flex w-full justify-between'>
                                <span className='flex items-center gap-x-1'>
                                    <span className='w-[15px] h-[10px] rounded bg-[#93c5fd]' ></span>
                                    <span className='text-[14px]'>Total Orders</span>
                                </span>
                                <span className='text-[14px]'>54%</span>
                            </div>

                        </div>
                    </div>
                    <div className='lg:mt-6 md:mt-5 sm:mt-3 mt-2 flex justify-between'>
                        <div className='bg-white w-[33%] p-3 rounded-xl border border-gray-400'>
                            <div className='font-bold text-xl'>Total Sales :    </div>
                            <div className='text-center font-bold text-2xl text-blue-600'>$14140</div>
                        </div>
                        <div className='bg-white w-[33%] p-3 rounded-xl border border-gray-400'>
                            <div className='font-bold text-xl'>Total Profit :    </div>
                            <div className='text-center font-bold text-2xl text-blue-600'>$14140</div>
                        </div>
                        <div className='bg-white w-[33%] p-3 rounded-xl border border-gray-400'>
                            <div className='font-bold text-xl'>Total Orders :    </div>
                            <div className='text-center font-bold text-2xl text-blue-600'>140</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Reviews Section */}
            <div style={{ backgroundColor: color.bg1 }} className='p-2 sm:p-3 md:p-5 lg:p-6'>


                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold' >Latest Reviews</h1>
                        <p className='text-md text-gray-600' >Reviews of all products</p>
                    </div>
                    <div className={`flex text-gray-400 items-center gap-2 border transition-all duration-100 ${LatestReviewSearchBarFocus ? 'border-blue-500' : 'border-gray-400'} py-1 px-2 w-[400px] rounded `}>
                        <Search size={20} />
                        <input type="text" placeholder='Search' className='outline-none placeholder:text-gray-400 text-black' onFocus={() => setLatestReviewSearchBarFocus(true)} onBlur={() => setLatestReviewSearchBarFocus(false)} />
                    </div>
                </div>

                <div className='w-full  overflow-x-auto  p-1'>

                    <div className='min-w-[1200px]'>
                        <div className='flex justify-between font-bold text-[18px] border-t border-b border-gray-300 py-1'>
                            <div className='w-[4%]'></div>
                            <div className='w-[21%]'>Product</div>
                            <div className='w-[15%]'>Customer</div>
                            <div className='w-[7%]'>Rating</div>
                            <div className='w-[30%]'>Review</div>
                            <div className='w-[9%]'>Status</div>
                            <div className='w-[7%]'>Time</div>
                        </div>
                        {PaginatedReviewsData.map((e, i) => (<div key={i} className='flex justify-between items-center h-[75px] border-b border-gray-300 py-2'>
                            <div className='w-[4%] h-[50px] lg:h-[60px] border border-gray-300 rounded flex justify-center items-center p-1 overflow-hidden'><img src={textpic2} alt="" /></div>
                            <div className='w-[21%] overflow-hidden '> <a href="#" className='text-blue-600  hover:underline overflow-ellipsis overflow-hidden block  whitespace-nowrap' > {e.Product}</a></div>
                            <div className='w-[15%] flex items-center gap-2'>
                                <div className='w-[40px] h-[40px] overflow-hidden rounded-full' ><img className='w-full h-full' src={textpic2} alt="" /></div>
                                <div className='text-[15px] font-[500]' >{e.Customer}</div>
                            </div>
                            <div className='w-[7%]'>
                                <StarRatings
                                    rating={e.Rating}
                                    starRatedColor="#f97316"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="14px"
                                    starSpacing="1px"
                                />
                            </div>
                            <div className='w-[30%] h-full overflow-y-auto'>{e.Review}</div>
                            <div className='w-[9%] flex'>
                                {
                                    e.Status == "APPROVED" ? <div className='border rounded border-[#90D67F] text-[#1C6E3D] bg-[#D9FBD0] py-0.5 px-1 text-[10px] flex gap-0.5 font-medium' >APPROVED<Check size={15} /></div>
                                        :
                                        <div className='border rounded border-[#FFCC85] text-[#BC3803] bg-[#FFEFCA] py-0.5 px-1 text-[10px] flex gap-0.5 font-medium' >PENDING<Clock3 size={15} /></div>
                                }
                            </div>
                            <div className='w-[7%]'>{getTimeFormatFormReviews(e.Time)}</div>
                        </div>))}

                        <div className='flex justify-between'>
                            <div className='flex gap-6 mt-3' >
                                <div className='text-[15px] text-gray-700'>{RowsPerPage*Page+1} to {Math.min((Page + 1) * RowsPerPage, ReviewsData.length)} items of {ReviewsData.length}</div>
                                <button onClick={()=>{setViewAllReviews(!ViewAllReviews)}} className='flex items-center text-[15px] cursor-pointer text-blue-500 hover:underline'> {ViewAllReviews?"View less":" View all "} <ChevronRight size={20} /></button>
                            </div>
                            <div className='flex gap-2'>
                                <button  onClick={()=>{if(Page>0){setPage(Page-1)}}} className='flex items-center text-[15px] cursor-pointer text-blue-500 hover:underline' ><ChevronLeft size={20}/>Previous</button>
                                
                                <button  onClick={()=>{if(parseInt(ReviewsData.length/RowsPerPage) >Page){setPage(Page+1)}}} className='flex items-center text-[15px] cursor-pointer text-blue-500 hover:underline' >Next<ChevronRight/></button>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default AdminDashboard