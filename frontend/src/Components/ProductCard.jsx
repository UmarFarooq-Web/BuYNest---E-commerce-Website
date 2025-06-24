import React, { useState } from 'react';
import banner from "/banner.png";
import StarRatings from 'react-star-ratings';

const ProductCard = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <a
            role="button"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="block w-full max-w-[270px] sm:max-w-[300px] md:max-w-[380px] p-3 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
        >
            <div className="w-full h-48 sm:h-56 md:h-74 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                    src={banner}
                    className={`object-contain w-full h-full transition-transform duration-300 ${isHover ? "scale-110" : ""}`}
                />
            </div>

            <div className="mt-4 text-base sm:text-lg font-semibold line-clamp-2">
                PlayStation 5 DualSense Wireless Controller
            </div>

            <div className="mt-2 flex items-center gap-1">
                <StarRatings
                    rating={4.5}
                    starRatedColor="#f97316" // Tailwind orange-500
                    numberOfStars={5}
                    name="rating"
                    starDimension="18px"
                    starSpacing="2px"
                />
                <span className="text-sm text-gray-500">(45 reviews)</span>
            </div>

            <div className="mt-4 flex items-end gap-2">
                <span className="text-lg sm:text-xl text-gray-400 line-through">$1000</span>
                <span className="text-xl sm:text-2xl font-bold text-black">$599</span>
            </div>
        </a>
    );
};

export default ProductCard;
