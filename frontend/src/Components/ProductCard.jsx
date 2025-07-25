import React, { useState } from 'react';
import banner from "/banner.png";
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
const ProductCard = ({product}) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Link
            to={`/product/${product._id}`}
            role="button"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="block w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] p-3 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
        >
            <div className="w-full h-40 sm:h-56 md:h-60 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                    src={product.Image}
                    className={`object-contain w-full h-full transition-transform duration-300 ${isHover ? "scale-110" : ""}`}
                />
            </div>

            <div className="mt-2 text-base font-semibold line-clamp-2">
                {product.Title}
            </div>

            <div className="mt-0.5 flex items-center gap-1">
                <StarRatings
                    rating={product.Rating}
                    starRatedColor="#f97316" // Tailwind orange-500
                    numberOfStars={5}
                    name="rating"
                    starDimension="16px"
                    starSpacing="1px"
                />
                <span className="text-sm text-gray-500">({product.Reviews} reviews)</span>
            </div>

            <div className="mt-4 flex items-end gap-2">
                <span className="text-lg sm:text-xl text-gray-400 line-through">${product.RegularPrice}</span>
                <span className="text-xl sm:text-2xl font-bold text-black">${product.SalePrice}</span>
            </div>
        </Link>
    );
};

export default ProductCard;
