import React, { useRef, useState, useEffect } from 'react'
import color from '../colors';
import pic1 from '/textpic1.jpeg'
import pic2 from '/testpic2.jpeg'
import pic3 from '/testpic3.jpg'
import pic4 from '/testpic4.jpeg'
import Navbar from '../Components/Navbar';
import SubNavbar from '../Components/SubNavbar';
import StarRatings from 'react-star-ratings';
import { Loader, ShoppingCart, X } from 'lucide-react';
import ProductCard from '../Components/ProductCard';
import logo from '/logo.jpg'
import { useParams } from 'react-router-dom';
import UserInstance from '../axios/userInstanse';
import toast from 'react-hot-toast';
import ProductDescription from '../Components/ProductDescription';

const ProductPage = () => {
    const [TranslateValue, setTranslateValue] = useState(0);
    const [SelectedImage, setSelectedImage] = useState(0);
    const divRef = useRef(null);
    const [Images, setImages] = useState()
    const [IsShowRating, setIsShowRating] = useState(false);
    const [IsSubmitingRating, setIsSubmitingRating] = useState(false)
    const [IsRatingBoxShown, setIsRatingBoxShown] = useState(false);
    const [rating, setRating] = useState(0);
    const [RatingData, setRatingData] = useState({
        Name: "",
        Review: ""
    })



    const [IsLoadingProductData, setIsLoadingProductData] = useState(true)
    const [ProductData, setProductData] = useState(null);




    const Handleclick = (index) => {
        const width = -(index * (divRef.current.offsetWidth - 14));
        setTranslateValue(width);
        setSelectedImage(index)
    }


    const ratingDataChanged = (e) => {
        setRatingData({ ...RatingData, [e.target.name]: e.target.value })
    }


    const { productId } = useParams()

    const handleRatingSubmit = async () => {


        if (RatingData.Name == "") return toast.error("Name is required")
        if (RatingData.Review == "") return toast.error("Review is required")

        const formData = new FormData();
        formData.append("ProductId", productId);
        formData.append("Name", RatingData.Name);
        formData.append("Review", RatingData.Review)
        formData.append("Rating", rating)

        setIsSubmitingRating(true)
        try {
            const res = await UserInstance.post('/set-rating', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            toast.success(res.data.message)
            setIsRatingBoxShown(false)

            setRating(0);
            setRatingData({ Name: "", Review: "" })
        } catch (error) {
            toast.error(error?.response?.data?.message || "Internal Server Error");
            console.log("Error in HandleRatingSubmit : ", error)
        } finally {
            setIsSubmitingRating(false)
        }
    }


    useEffect(() => {
        async function fun() {
            try {
                const res = await UserInstance.get(`/get-product/${productId}`)
                setProductData(res.data.ProductData);
                setIsLoadingProductData(false)
                console.log(res.data)
                setImages(res.data.ProductData.Images)
            } catch (error) {
                toast.error(error?.response?.data?.message || "Internal Server Error");
                console.log("Error while getting product data : ", error)
            }
        }

        fun()

    }, [])



    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }).format(date);
    };

    const getTimeAgo = (timestamp) => {
        const now = Date.now();
        const diff = Math.floor((now - timestamp) / 1000);
        if (diff < 60) return 'Just now';
        if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;

        return formatTimestamp(timestamp);
    };


    const getTimeFormatFormReviews = (timestamp) => {
        const date = new Date(timestamp);
        const now = Date.now();
        const diff = Math.floor((now - date) / 1000);

        const displayTime = diff < 86400
            ? getTimeAgo(timestamp)
            : formatTimestamp(timestamp);

        return displayTime;

    }





    if (IsLoadingProductData) return (<div className='w-screen h-screen flex justify-center items-center text-blue-600'>
        <Loader size={70} className='animate-spin' />
    </div>)

    return (
        <div className='relative'>
            <Navbar />
            <SubNavbar />
            <div className='flex flex-col items-center pt-6 m-3  min-h-screen' style={{ backgroundColor: color.bg2 }}>


                <div className='flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:items-start w-full max-w-[1200px] gap-4'>

                    {/* Picture section */}
                    <div className='flex flex-col-reverse md:flex-row gap-2.5 lg:shrink-0'>
                        <div className=' flex md:flex-col gap-2'>
                            {Images.map((e, i) => (
                                <div key={i} id='1' onClick={() => Handleclick(i)} className={`w-[90px] h-[90px] border border-gray-300 p-2 rounded flex justify-center items-center object-contain hover:border-blue-500 cursor-pointer `} style={SelectedImage == i ? { borderColor: color.Blue } : {}}>
                                    <img src={e} alt="" />
                                </div>
                            ))}
                        </div>

                        <div ref={divRef} className='max-w-[500px] h-full max-h-[500px] overflow-hidden border border-gray-300 rounded-[10px] p-3'>
                            <div className='min-w-full min-h-[400px] flex gap-3 transition-all duration-300' style={{ transform: `translateX(${TranslateValue}px)` }}>
                                {Images.map((e, i) => (
                                    <img key={i} className='min-w-full object-contain' src={e} alt="" />
                                ))}
                            </div>
                        </div>

                    </div>


                    {/* Content Section */}
                    <div className=' flex flex-col gap-1'>
                        <div> <StarRatings
                            rating={ProductData.AverageRating}
                            starRatedColor="orange"
                            numberOfStars={5}
                            name='rating'
                            starDimension="19px"
                            starSpacing="1px"
                        /> <span className='text-sm text-gray-500'>({ProductData.NumberOfRatings} People Rated) </span></div>

                        <h1 className='font-bold lg:text-2xl md:text-3xl'>{ProductData.Title}</h1>
                        <p className='flex items-end lg:gap-4 md:gap-2 gap-1 lg:mt-5 md:mt-3.5 sm:mt-2 mt-1 '><span className='lg:text-4xl md:text-3xl text-2xl font-bold'>${ProductData.SalePrice}</span><span className='lg:text-3xl md:text-2xl text-xl text-gray-500 line-through'>${ProductData.RegularPrice}</span><span className='text-orange-400 lg:text-2xl md:text-xl font-bold'>{parseInt(100-((ProductData.SalePrice/ProductData.RegularPrice)*100))}% off</span></p>
                        <span className='text-green-500 pt-7 lg:text-2xl md:text-xl'>{ProductData.Quantity > 0 ? "In Stock" : <span className='text-red-500'>Out of Stock</span>}</span>
                        <p><b>Do you want it on Saturday, July 29th?</b> Choose <b>Saturday Delivery</b> at checkout if you want your order delivered within 12 hours 43 minutes, Details. <b> Gift wrapping is available.</b> </p>
                        {ProductData?.Variants?.map((e) => (<div className='flex gap-3 border border-amber-500 p-2 rounded-xl' style={{ backgroundColor: color.bg1 }}>
                            <div className='text-amber-500 md:text-xl'>{e.Option}:</div>
                            <select className='bg-amber-500 text-white rounded w-full' name="Variants" id="Variants">
                                <option value="">SELECT</option>
                                {e?.value?.split(",")?.map((item) => (
                                    <option value={item} > {item}</option>
                                ))}
                            </select>
                        </div>))}
                    </div>

                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:items-start w-full max-w-[1200px] gap-4 mt-2'>
                    <div className='w-[100%] lg:w-[600px] flex gap-2 mt-4 md:mt-0.5 lg:mt-0.5'>
                        <button className='flex items-center justify-center py-3 w-[50%] border border-amber-500 rounded-4xl text-amber-500 hover:bg-amber-500 hover:text-white cursor-pointer transition duration-200'><ShoppingCart />Add to cart</button>
                        <button className='flex items-center justify-center py-3 w-[50%] border border-amber-500 rounded-4xl text-white bg-amber-500 hover:bg-amber-600 transition duration-200 cursor-pointer'><ShoppingCart />Buy Now</button>

                    </div>
                    <div className='flex gap-3'>

                    </div>
                </div>


                <div className='w-full max-w-[1200px] mt-7'>

                    <div className='flex gap-7'>
                        <button onClick={() => { setIsShowRating(false) }} className={`relative py-3  cursor-pointer after:transition-all after:duration-150 after:absolute after:w-[0%] hover:after:w-[100%] after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0  ${IsShowRating ? '' : 'text-blue-600 after:w-[100%]'} `}    >Description</button>
                        <button onClick={() => { setIsShowRating(true) }} className={`relative py-3  cursor-pointer after:transition-all after:duration-150 after:absolute after:w-[0%] hover:after:w-[100%] hover:text-blue-600 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0  ${IsShowRating ? 'text-blue-600 after:w-[100%]' : ''} `}>Ratings & Reviews</button>
                    </div>


                    {!IsShowRating ?
                        <div className=' rounded border border-gray-400 mt-5' style={{ backgroundColor: color.bg1 }}>
                            <ProductDescription content={ProductData.Description} />
                        </div>

                        :

                        <div className=' rounded mt-5 p-2 sm:p-3 md:p-4'>
                            <div className='flex justify-between'>

                                <div className='flex items-center'>
                                    <span className='md:text-4xl sm:text-3xl text-2xl font-bold text-amber-500'>{ProductData.AverageRating}</span>
                                    <span className='text-gray-400 pt-1 sm:pt-4'>/5</span>
                                    <span>
                                        <StarRatings
                                            rating={ProductData.AverageRating}
                                            starRatedColor="orange"
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension="30px"
                                            starSpacing="1px"
                                        />
                                    </span>
                                    <span>{ProductData.NumberOfRatings} ratings</span>
                                </div>
                                <button onClick={() => setIsRatingBoxShown(true)} className='rounded bg-blue-600 text-white p-1.5 sm:p-3 text-[12px] md:text-sm cursor-pointer hover:bg-blue-700'>Rate this Product</button>
                            </div>






                            {ProductData.Ratings.length > 0 ? ProductData?.Ratings?.map((e) => (
                                <div className='mt-2'>
                                    <div className=' flex items-center gap-2 font-bold'>
                                        <StarRatings
                                            rating={e.Rating}
                                            starRatedColor="orange"
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension="15px"
                                            starSpacing="1px"
                                        /> by {e.Name}</div>
                                    <div className='text-sm text-gray-400 mt-1'>{formatTimestamp(e.createdAt)}</div>
                                    <div>{e.Review}</div>
                                </div>))
                                :
                                <div className='text-xl' >Currently no Review</div>
                            }

                        </div>}


                </div>

                <div className='w-full max-w-[1500px] my-7'>
                    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>Similar Products</h1>
                    <p>Essential for a better life</p>
                    <div className='flex gap-2 flex-wrap mt-2'>
                        {/* <ProductCard /> */}
                    </div>
                </div>


            </div>

            <div className='flex items-center justify-center flex-col px-6'>
                <div className='flex items-center justify-center gap-4'><img className='w-[100px]' src={logo} alt="" /> <span className='text-4xl' >Buy Nest</span></div>
                <div className='w-full max-w-[500px]'>Shop the best products at unbeatable prices. Fast shipping, secure payments, and customer-first service — all in one place</div>
            </div>







            {IsRatingBoxShown && <div>
                <div className='h-full w-screen bg-black/10 absolute top-0 left-0 right-0 bottom-0 z-20' > </div>
                <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] min-w-[200px] w-full  max-w-[400px] p-4  border border-gray-300 rounded z-20 ' style={{ backgroundColor: color.bg1 }}>
                    <div className='flex justify-between' ><span className='text-gray-800 text-xl' >Rate this Product</span><button className='text-gray-700 cursor-pointer' onClick={() => setIsRatingBoxShown(!IsRatingBoxShown)} ><X /></button></div>

                    <div className='mt-10'>
                        <div className='text-gray-600' > Full Name</div>
                        <input type="text" style={{ backgroundColor: color.bg1 }} onChange={ratingDataChanged} value={RatingData.Name} name='Name' className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Enter your full name' />
                    </div>
                    <div className='mt-3'>
                        <div className='text-gray-600' > Review </div>
                        <input type="text" style={{ backgroundColor: color.bg1 }} onChange={ratingDataChanged} value={RatingData.Review} name='Review' className=' border py-2 px-2 text-gray-500 rounded w-full border-gray-300 focus:border-blue-500  outline-0 outline-blue-500/20 outline-offset-0 focus:outline-4 transition-all mt-1' placeholder='Write s Review' />
                    </div>
                    <div className='mt-3'>
                        <div className='text-gray-600' > Rate this Product</div>
                        <StarRatings
                            rating={rating}
                            starRatedColor="gold"
                            changeRating={setRating}
                            numberOfStars={5}
                            name="rating"
                            starDimension="30px"
                            starSpacing="5px"
                        />
                    </div>

                    <div className='mt-5'>
                        <div className='flex justify-end gap-1'>
                            <button onClick={() => setIsRatingBoxShown(false)} className=' mt-6 rounded w-20 text-[15px] py-2 px-3 cursor-pointer bg-gray-200 border-gray-300 border  hover:bg-gray-400 transition-all duration-100'>Cancal</button>
                            <button onClick={handleRatingSubmit} className=' mt-6 rounded w-20 text-white py-2 px-4 font-bold  cursor-pointer bg-blue-500 hover:bg-blue-700 transition-all duration-100 flex justify-center'>{IsSubmitingRating ? <Loader className='animate-spin' /> : "Submit"}</button>
                        </div>
                    </div>

                </div>
            </div>}

        </div>
    )
}

export default ProductPage