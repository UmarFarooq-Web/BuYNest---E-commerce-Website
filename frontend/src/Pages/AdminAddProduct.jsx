import React, { useState } from 'react'
import color from '../colors'
import Editor from '../Components/Editor';
import logo from '/logo.jpg'
import { X } from 'lucide-react';

const AdminAddProduct = () => {
  const [value, setValue] = useState('');

  const [Images, setImages] = useState([]);



  const handleDrop = (e) => {
    e.preventDefault();
    // console.log(e.dataTransfer.files);

    const filesArray = Array.from(e.dataTransfer.files)
    // console.log(filesArray)

    const ImageFiles = filesArray.filter((e) => e.type.includes('image/'))

    console.log(ImageFiles);

    const ImageURLS = ImageFiles.map((e) => URL.createObjectURL(e));

    console.log(ImageURLS);
    setImages([...Images, ...ImageURLS])

  }
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

            <Editor />
          </div>

          <div className='w-full '>
            <div className='flex gap-2 flex-wrap' >
              {Images.length > 0 && Images.map((e) => (
                <div className='w-[100px] h-[100px] rounded border border-gray-300 overflow-hidden relative' ><img src={e} className='object-contain h-full w-full m-auto' alt="" /> <div className='text-gray-500 z-10 absolute top-0 right-0 cursor-pointer ' onClick={() => setImages(Images.filter((a) => e !== a))} ><X size={20} /></div> </div>
              ))}
            </div>

            <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} className='flex justify-center items-center border-2 border-dotted border-gray-400 rounded min-h-[150px] mt-2' >
              <p>Drag your photos here or <span className='text-blue-500 hover:underline cursor-pointer' >Browse from device</span></p>
            </div>
          </div>

          <div>
            <h1 className='font-bold text-xl' >Inventory</h1>
            <div className='mt-3'>
              <div className='text-gray-600' > Regular Price</div>
              <input type="text" style={{ backgroundColor: color.bg1 }} className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter Regular Price' />
            </div>
            <div className='mt-3'>
              <div className='text-gray-600' > Sale Price</div>
              <input type="text" style={{ backgroundColor: color.bg1 }} className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter Sale Price ' />
            </div>
            <div className='mt-3'>
              <div className='text-gray-600' > Quantity</div>
              <input type="text" style={{ backgroundColor: color.bg1 }} className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter Quantity' />
            </div>
          </div>

        </div>



        <div className='min-w-[300px] w-full lg:w-[500px] mt-5 lg:mt-2' >

          <div style={{ backgroundColor: color.bg1 }} className='min-w-[300px] py-8 rounded-xl border border-gray-300 shadow-xl px-5 ml-3'>
            <h1 className='font-bold text-2xl'>Orgalize</h1>

            <div className='mt-3'>
              <div className='text-gray-600' > Category</div>
              <input type="text" style={{ backgroundColor: color.bg1 }} className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter your Category ' />
            </div>

            <div className='mt-3'>
              <div className='text-gray-600' > Sub Category</div>
              <input type="text" style={{ backgroundColor: color.bg1 }} className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter your Sub Category ' />
            </div>
            <div className='mt-3'>
              <div className='text-gray-600' > Brand</div>
              <input type="text" style={{ backgroundColor: color.bg1 }} className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter brand name ' />
            </div>
          </div>



          <div style={{ backgroundColor: color.bg1 }} className='min-w-[300px] mt-4 py-8 rounded-xl border border-gray-300 shadow-xl px-5 ml-3'>
            <h1 className='font-bold text-2xl'>Variants</h1>

            <div className='mt-3'>
              <div className='text-gray-600' > Option 1</div>
              <select style={{ backgroundColor: color.bg1 }} name="cardType" id="cardType" className=' mt-3 text-gray-500 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                <option value="SIze">Size</option>
                <option value="Color">Color</option>
                <option value="Weight"> Weigth</option>
                <option value="Smell">Smell</option>
              </select>
              <input type="text" style={{ backgroundColor: color.bg1 }} className=' mt-3 border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all' placeholder='Enter your Value comma seperated ' />
            </div>

            <div className='mt-3'>
              <div className='text-gray-600' > Option 2</div>
              <select style={{ backgroundColor: color.bg1 }} name="cardType1" id="cardType1" className=' mt-3 text-gray-500 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                <option value="SIze">Size</option>
                <option value="Color">Color</option>
                <option value="Weight"> Weigth</option>
                <option value="Smell">Smell</option>
              </select>
              <input type="text" style={{ backgroundColor: color.bg1 }} className=' mt-3 border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all' placeholder='Enter your Value comma seperated ' />
            </div>

            <div className='mt-3'>
              <div className='text-gray-600' > Option 3</div>
              <select style={{ backgroundColor: color.bg1 }} name="cardType2" id="cardType2" className=' mt-3 text-gray-500 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                <option value="SIze">Size</option>
                <option value="Color">Color</option>
                <option value="Weight"> Weigth</option>
                <option value="Smell">Smell</option>
              </select>
              <input type="text" style={{ backgroundColor: color.bg1 }} className=' mt-3 border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all' placeholder='Enter your Value comma seperated ' />
            </div>
          </div>


        </div>
      </div>




    </div>
  )
}

export default AdminAddProduct