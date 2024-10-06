import React from 'react';
import { FaUserAlt, FaShoppingBasket } from 'react-icons/fa';

const TopNavbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-[12vw]">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="https://ld-magento-72.template-help.com/magento_mag-3886/pub/media/theme_options/default/logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Search Section */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 py-4 w-[35vw] px-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
       
      </div>

      {/* User and Basket Icons */}
      <div className="flex items-center space-x-6 gap-4">
        <FaUserAlt className="text-gray-400 cursor-pointer" size={28} />
        <div className="flex items-center space-x-2">
          <FaShoppingBasket className="text-gray-400 cursor-pointer" size={28} />
          <span className="text-gray-600 font-semibold pl-5">BASKET: 0 ITEMS</span>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
