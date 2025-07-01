import React, { useState } from 'react'
import color from '../colors'
import { CircleAlert, ClockFading, Star } from 'lucide-react'
import TotalSalesLineGraph from '../Components/TotalSalesLineGraph';
import { data } from 'react-router-dom';

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
    return (
        <div>
            {/* Graph section */}
            <div className='flex flex-col md:flex-row' style={{ backgroundColor: color.bg2 }}>
                <div className='p-2 sm:p-3 md:p-5 lg:p-6 w-[50%]'>
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
                <div>h</div>
            </div>
        </div>
    )
}

export default AdminDashboard