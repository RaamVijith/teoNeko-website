import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);

  const toggleWomenDropdown = () => {
    setIsWomenDropdownOpen(!isWomenDropdownOpen);
  };

  const closeWomenDropdown = () => {
    setIsWomenDropdownOpen(false);
  };

  return (
    <nav className=" p-7 w-full  px-[12vw] z-[100] hidden sm:block ">
      {/* Navbar Links - Hidden on mobile, shown on medium and above */}
      <ul className="flex space-x-[50px] items-center justify-center  z-[100] ">
        <li
          className="relative group cursor-pointer "
          onMouseEnter={toggleWomenDropdown}
          onMouseLeave={closeWomenDropdown}
        >
          <div className="flex flex-row  hover:text-black hover:underline text-[#7EA79B] text-xl font-bold items-end">
            <span>ALL TEA</span>

            <FaAngleDown />
          </div>

          {/* Dropdown */}
          {isWomenDropdownOpen && (
            <div className="absolute left-0 mt-2 z-10 w-[70vw] p-[50px] bg-white shadow-xl grid grid-cols-5 md:grid-cols-5 gap-4">
              {/* Packaged Teas */}
              <div>
                <h3 className="text-xl font-semibold text-[#7EA79B] pb-2">
                  Packaged Teas
                </h3>
                <ul>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">Teabag Sachets</li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">
                    2 Quart Iced Teas
                  </li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">
                    Loose Leaf Tea Tins
                  </li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">Sampler Packs</li>
                </ul>
              </div>

              {/* Teaware Tea */}
              <div>
                <h3 className="text-xl font-semibold text-[#7EA79B] pb-2">
                  Teaware Tea
                </h3>
                <ul>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">Accessories</li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">Iced Teaware</li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">
                    On the Go Teaware
                  </li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">Teacups</li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">Teapots</li>
                </ul>
              </div>

              {/* Tea for Gifts */}
              <div>
                <h3 className="text-xl font-semibold text-[#7EA79B] pb-2">
                  Tea for Gifts
                </h3>
                <ul>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">Gift Cards</li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">Gifts Under $25</li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">Gifts $25 - $50</li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">
                    Gifts Premium $50-$100
                  </li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">Tea Program</li>
                </ul>
              </div>

              {/* Tea Club TC */}
              <div>
                <h3 className="text-xl font-semibold text-[#7EA79B] pb-2">
                  Tea Club TC
                </h3>
                <ul>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">
                    3 Month Subscription
                  </li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">
                    6 Month Subscription
                  </li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">
                    9 Month Subscription
                  </li>
                  <li className="hover:text-[#7EA79B] pb-1 text-xl">
                    12 Month Subscription
                  </li>
                </ul>
              </div>

              <div>
                  <img
                    src= "https://sabaithai.com/wp-content/uploads/2023/09/Lemon-Ginger-And-Honey-Tea-Boosts-Your-Immune-System.jpg"
                    alt="fashion model"
                    className="h-[221px] w-[128px] rounded-md shadow-sm"
                  />
                </div>
            </div>
          )}
        </li>

        {/* Women's Dropdown */}
        <li
          className="relative group cursor-pointer "
          onMouseEnter={toggleWomenDropdown}
          onMouseLeave={closeWomenDropdown}
        >
          <div className="flex flex-row  hover:text-black hover:underline text-[#7EA79B] text-xl font-bold items-end">
            <span>LOOSE TEAS</span>
            <FaAngleDown />
          </div>
        </li>

        <li className="hover:text-[#7EA79B] cursor-pointer text-lg font-light">
          <div className="flex flex-row  hover:text-black hover:underline text-[#7EA79B] text-xl font-bold items-end">
            <span>LOOSE HERBAL TEAS</span>
          </div>
        </li>

        <li className="hover:text-[#7EA79B] cursor-pointer text-lg font-light">
          <div className="flex flex-row  hover:text-black hover:underline text-[#7EA79B] text-xl font-bold items-end">
            <span>MATCHA AND SUPERFOODS</span>
          </div>
        </li>

        <li className="flex flex-row  hover:text-black hover:underline text-[#7EA79B] text-xl font-bold items-end">
          ROBIOS TEAS
        </li>
        <li className="flex flex-row  hover:text-black hover:underline text-[#7EA79B] text-xl font-bold items-end">
          TEA BAGS
        </li>
        <li
          className="relative group cursor-pointer "
          onMouseEnter={toggleWomenDropdown}
          onMouseLeave={closeWomenDropdown}
        >
          <div className="flex flex-row  hover:text-black hover:underline text-[#7EA79B] text-xl font-bold items-end">
            <span>PRODUCT TYPES</span>
            <FaAngleDown />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
