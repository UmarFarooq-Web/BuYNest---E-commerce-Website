import React, { useState } from 'react'
import color from '../colors'
import Editor from '../Components/Editor';

const AdminAddProduct = () => {
  const [value, setValue] = useState('');
  return (
    <div className='min-h-screen p-2 sm:p-3 md:p-5 lg:p-6' style={{ backgroundColor: color.bg2 }}>

      <div className='flex justify-between  flex-col sm:flex-row gap-2'>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold' >Add Product</h1>
        <div className=' flex gap-1'>
          <button className='rounded  text-gray-600 py-2 px-4 text-[12px] font-bold border-gray-300 border cursor-pointer'>Save Draft</button>
          <button className='rounded text-blue-500 py-2 px-4 text-[12px] font-bold border-gray-300 border cursor-pointer'>Save Draft</button>
          <button className=' rounded text-white py-2 px-4 text-[12px]  font-bold cursor-pointer bg-blue-500 hover:bg-blue-700'>Publish Product</button>
        </div>

      </div>

      <div className='flex flex-col lg:flex-row mt-10' >
        <div className='grow flex flex-col gap-7 '  >

          <div>
            <h2 className='text-lg md:text-xl font-medium mb-3' >Product Title</h2>
            <input type="text" style={{ backgroundColor: color.bg1 }} className=' border p-2 text-[13px] text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' placeholder='Enter Product Title Here' />
          </div>

          <div>
            <h2 className='text-lg md:text-xl font-medium mb-3' >Product Description</h2>

            <div>
              <Editor />
            </div>

          </div>

        </div>
        <div className='w-[500px]' >a</div>
      </div>




    </div>
  )
}

export default AdminAddProduct