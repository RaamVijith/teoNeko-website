import React from "react";

const PopularCategories: React.FC = () => {
  return (
    <div className="w-full py-[10vh] px-[12vw]">
      {/* Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-[#7EA79B] mb-10">
        POPULAR CATEGORY
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left: Image Section */}
        <div className="relative group w-full lg:w-[40%] h-[30vh] overflow-hidden cursor-pointer">
          <img
            src="https://images.pexels.com/photos/3026801/pexels-photo-3026801.jpeg"
            alt="Seasonal Deals"
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white transition-opacity duration-300">
            <h2 className="text-5xl font-bold">Seasonal Deals</h2>
            <p className="mt-2 text-2xl underline">Shop Now</p>
          </div>
        </div>

        {/* Right: Category Section */}
        <div className="w-full lg:w-[55%] flex flex-col lg:flex-row justify-between gap-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <div className="text-7xl text-gray-200 font-bold flex flex-row items-center gap-4 hover:text-[#7EA79B] cursor-pointer">
              01
              <h3 className="hover:text-black text-2xl font-semibold text-black">
                Packaged Teas
              </h3>
            </div>

            <ul className="text-gray-500 space-y-1 text-xl pl-20">
              <li>Teabag Sachets</li>
              <li>2 Quart Iced Teas</li>
              <li>Loose Leaf Tea Tins</li>
              <li>Sampler Packs</li>
              <li className="text-red-500 hover:underline cursor-pointer">
                View All
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <div className="text-7xl text-gray-200 font-bold flex flex-row items-center gap-4 hover:text-[#7EA79B] cursor-pointer">
              02
              <h3 className="hover:text-black text-2xl font-semibold text-black">
                Teaware
              </h3>
            </div>

            <ul className="text-gray-500 space-y-1 text-xl pl-20">
              <li>Accessories</li>
              <li>Iced Teaware</li>
              <li>Teacups</li>
              <li>Teapots</li>
              <li className="text-red-500 hover:underline cursor-pointer">
                View All
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <div className="text-7xl text-gray-200 font-bold flex flex-row items-center gap-4 hover:text-[#7EA79B] cursor-pointer">
              03
              <h3 className="hover:text-black text-2xl font-semibold text-black">
                Tea Gifts
              </h3>
            </div>

            <ul className="text-gray-500 space-y-1 text-xl pl-20">
              <li>Gift Cards</li>
              <li>Gifts Under $25</li>
              <li>Gifts $25 - $50</li>
              <li>Gifts Premium $50 - $100</li>
              <li className="text-red-500 hover:underline cursor-pointer">
                View All
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
