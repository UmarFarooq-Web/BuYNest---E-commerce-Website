import React, { useState } from 'react'
import color from '../colors'
import Editor from '../Components/Editor';
import logo from '/logo.jpg'
import { HandCoins, X , Loader } from 'lucide-react';
import toast from 'react-hot-toast'
import AdminInstance from '../axios/adminInstanse';

const AdminAddProduct = () => {
  const [value, setValue] = useState('');
  const [Images, setImages] = useState([]);
  const [ImageFiles, setImageFiles] = useState([])
  const [DescriptionJson, setDescriptionJson] = useState(null)
  const [IsPublishing , setIsPublishing] = useState(false);
  const [data, setData] = useState({
    Title: '',
    RegularPrice: 0,
    SalePrice: 0,
    Quantity: 0,
    Category: "",
    SubCategory: "",
    Brand: "",

  })


  const [Variants, setVariants] = useState([
    { Option: "Size", value: "" },
    { Option: "Size", value: "" },
    { Option: "Size", value: "" }
  ])

  const handleVariantChange = (index, key, value) => {
    setVariants(pre => pre.map((e, i) => {
      return i === index ? { ...e, [key]: value } : e
    }))
  }

  const handleDrop = (e) => {
    e.preventDefault();
    // console.log(e.dataTransfer.files);

    const filesArray = Array.from(e.dataTransfer.files)
    // console.log(filesArray)

    const ImageFiles = filesArray.filter((e) => e.type.includes('image/'))

    setImageFiles(prev => [...prev, ...ImageFiles])

    const ImageURLS = ImageFiles.map((e) => URL.createObjectURL(e));

    console.log(ImageURLS);
    setImages([...Images, ...ImageURLS])
  }




  const handleChange = (e) => {
    const name = e.target.name;
    setData({ ...data, [name]: e.target.value })
  }

  const handleSubmit = async (status) => {

    setIsPublishing(true)

    if (data.Title === '') return toast.error("Title is required");
    if (!DescriptionJson || !DescriptionJson.content || DescriptionJson.content.length === 0) return toast.error("Description is required");
    if (data.RegularPrice === '' || data.RegularPrice <= 0) return toast.error("Regular Price is required and must be greater than 0");
    if (data.SalePrice === '' || data.SalePrice <= 0) return toast.error("Sale Price is required and must be greater than 0");
    if (data.Quantity === '' || data.Quantity <= 0) return toast.error("Quantity is required and must be greater than 0");
    if (data.Category === '') return toast.error("Category is required");
    if (data.SubCategory === '') return toast.error("Subcategory is required");
    if (data.Brand === '') return toast.error("Brand is required");
    if (ImageFiles.length <= 0) return toast.error("Atleast 1 Image is required");


    const formData = new FormData();
    formData.append('Title', data.Title)
    formData.append('Status', status)
    formData.append('RegularPrice', data.RegularPrice)
    formData.append('SalePrice', data.SalePrice)
    formData.append('Quandtity', data.Quantity)
    formData.append('Category', data.Category)
    formData.append('SubCategory', data.SubCategory)
    formData.append('Brand', data.Brand)
    formData.append('Variants', JSON.stringify(Variants))
    formData.append('Description', JSON.stringify(DescriptionJson))
    ImageFiles.forEach((file) => {
      formData.append('images', file)
    })

    try {
      const res = await AdminInstance.post('/add-product', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      toast.success(res.data.message);

      // Navigate('/admin/products')
    } catch (error) {
      toast.error(error?.response?.data?.message || "Interal server error")
      console.log("Error in Handle submit function in addProductPage : ", error)
    }

    setIsPublishing(false)

  }




  return (
    <div className='min-h-screen p-2 sm:p-3 md:p-5 lg:p-6' style={{ backgroundColor: color.bg2 }}>

      <div className='flex justify-between  flex-col sm:flex-row gap-2'>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold' >Add Product</h1>
        <div className=' flex gap-1'>
          <button className='rounded  text-gray-600 py-2 px-4 text-[12px] font-bold border-gray-300 border cursor-pointer'>Discard</button>
          <button className='rounded text-blue-500 py-2 px-4 text-[12px] font-bold border-gray-300 border cursor-pointer'>Save Draft</button>
          <button onClick={(e) => { e.preventDefault(); handleSubmit('Publish') }} className=' rounded text-white py-2 px-4 text-[12px]  font-bold cursor-pointer bg-blue-500 hover:bg-blue-700'>{IsPublishing?<Loader className='animate-spin' />  :"Publish Product"}</button>
        </div>

      </div>

      <div className='flex flex-col lg:flex-row mt-10' >
        <div className='grow flex flex-col gap-7 '  >

          <div>
            <h2 className='text-lg md:text-xl font-medium mb-3' >Product Title</h2>
            <input type="text" style={{ backgroundColor: color.bg1 }} onChange={handleChange} value={data.Title} name='Title' className=' border p-2 text-[13px] text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100' placeholder='Enter Product Title Here' />
          </div>

          <div>
            <h2 className='text-lg md:text-xl font-medium mb-3' >Product Description</h2>
            <Editor setDescriptionJson={setDescriptionJson} />
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
              <input type="text" style={{ backgroundColor: color.bg1 }} onChange={handleChange} value={data.RegularPrice} name='RegularPrice' className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter Regular Price' />
            </div>
            <div className='mt-3'>
              <div className='text-gray-600' > Sale Price</div>
              <input type="text" style={{ backgroundColor: color.bg1 }} onChange={handleChange} value={data.SalePrice} name='SalePrice' className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter Sale Price ' />
            </div>
            <div className='mt-3'>
              <div className='text-gray-600' > Quantity</div>
              <input type="text" style={{ backgroundColor: color.bg1 }} onChange={handleChange} value={data.Quantity} name='Quantity' className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter Quantity' />
            </div>
          </div>

        </div>



        <div className='min-w-[300px] w-full lg:w-[500px] mt-5 lg:mt-2' >

          <div style={{ backgroundColor: color.bg1 }} className='min-w-[300px] py-8 rounded-xl border border-gray-300 shadow-xl px-5 ml-3'>
            <h1 className='font-bold text-2xl'>Orgalize</h1>

            <div className='mt-3'>
              <div className='text-gray-600' > Category</div>
              <input type="text" style={{ backgroundColor: color.bg1 }} onChange={handleChange} value={data.Category} name='Category' className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter your Category ' />
            </div>

            <div className='mt-3'>
              <div className='text-gray-600' > Sub Category</div>
              <input type="text" style={{ backgroundColor: color.bg1 }} onChange={handleChange} value={data.SubCategory} name='SubCategory' className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter your Sub Category ' />
            </div>
            <div className='mt-3'>
              <div className='text-gray-600' > Brand</div>
              <input type="text" style={{ backgroundColor: color.bg1 }} onChange={handleChange} value={data.Brand} name='Brand' className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter brand name ' />
            </div>
          </div>



          <div style={{ backgroundColor: color.bg1 }} className='min-w-[300px] mt-4 py-8 rounded-xl border border-gray-300 shadow-xl px-5 ml-3'>
            <h1 className='font-bold text-2xl'>Variants</h1>

            <div className='mt-3'>
              <div className='text-gray-600' > Option 1</div>
              <select style={{ backgroundColor: color.bg1 }} onChange={(e) => { handleVariantChange(0, 'Option', e.target.value) }} value={Variants[0].Option} name="cardType" id="cardType" className=' mt-3 text-gray-500 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                <option value="Size">Size</option>
                <option value="Color">Color</option>
                <option value="Weight"> Weigth</option>
                <option value="Smell">Smell</option>
              </select>
              <input type="text" style={{ backgroundColor: color.bg1 }} onChange={(e) => { handleVariantChange(0, 'value', e.target.value) }} value={Variants[0].value} className=' mt-3 border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all' placeholder='Enter your Value comma seperated ' />
            </div>

            <div className='mt-3'>
              <div className='text-gray-600' > Option 2</div>
              <select style={{ backgroundColor: color.bg1 }} onChange={(e) => { handleVariantChange(1, 'Option', e.target.value) }} value={Variants[1].Option} name="cardType1" id="cardType1" className=' mt-3 text-gray-500 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                <option value="Size">Size</option>
                <option value="Color">Color</option>
                <option value="Weight"> Weigth</option>
                <option value="Smell">Smell</option>
              </select>
              <input type="text" style={{ backgroundColor: color.bg1 }} onChange={(e) => { handleVariantChange(1, 'value', e.target.value) }} value={Variants[1].value} className=' mt-3 border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all' placeholder='Enter your Value comma seperated ' />
            </div>

            <div className='mt-3'>
              <div className='text-gray-600' > Option 3</div>
              <select style={{ backgroundColor: color.bg1 }} onChange={(e) => { handleVariantChange(2, 'Option', e.target.value) }} value={Variants[2].Option} name="cardType2" id="cardType2" className=' mt-3 text-gray-500 border w-full border-gray-300 p-1 rounded focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all duration-100'>
                <option value="Size">Size</option>
                <option value="Color">Color</option>
                <option value="Weight"> Weigth</option>
                <option value="Smell">Smell</option>
              </select>
              <input type="text" style={{ backgroundColor: color.bg1 }} onChange={(e) => { handleVariantChange(2, 'value', e.target.value) }} value={Variants[2].value} className=' mt-3 border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all' placeholder='Enter your Value comma seperated ' />
            </div>
          </div>


        </div>
      </div>




    </div>
  )
}

export default AdminAddProduct