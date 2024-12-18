import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartIcon = ({ itemCount }) => {
  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="text-gray-700 dark:text-white" size={24} />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;