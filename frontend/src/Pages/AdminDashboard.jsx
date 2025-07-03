import React, { useState } from 'react'
import color from '../colors'
import { CircleAlert, ClockFading, Star } from 'lucide-react'
import TotalSalesLineGraph from '../Components/TotalSalesLineGraph';
import { data } from 'react-router-dom';
import TotalOrdersBarChart from '../Components/TotalOrdersBarChart';

const AdminDashboard = () => {
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
    return (
        <div > 
            {/* Graph section */}
            <div className='flex flex-col 2xl:flex-row' style={{ backgroundColor: color.bg2 }}>
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
        </div>
    )
}

export default AdminDashboard