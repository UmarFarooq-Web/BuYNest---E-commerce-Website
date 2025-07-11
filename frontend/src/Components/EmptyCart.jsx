import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NoItemsInCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-blue-600 rounded-xl">
      <div className="bg-blue-100 p-5 rounded-full shadow animate-bounce mb-4">
        <ShoppingCart size={48} strokeWidth={2} />
      </div>
      <h2 className="text-3xl font-extrabold mb-2">Your Cart is Empty</h2>
      <p className="text-blue-500 text-sm md:text-base max-w-md mb-6 text-center">
        Looks like you haven't added anything yet. Start exploring our amazing products and fill your cart!
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default NoItemsInCart;
