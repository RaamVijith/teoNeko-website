import React from "react";

const InfoSection: React.FC = () => {
  return (
    <div className="w-full pb-[5vh] pt-[10vh] px-[12vw] flex flex-col lg:flex-row justify-between gap-6">
      {/* Left Info Boxes */}
      <div className="w-full lg:w-[35%] flex flex-col justify-center gap-4">
        {/* Info Box 1 */}
        <div className="p-6 border border-gray-300 rounded-sm">
          <h3 className="text-xl font-semibold text-[#7EA79B] mb-2">YOU SHOP, ANYTIME</h3>
          <p className="text-gray-600">
            With I shop New World, your local store's range and specials are all at your fingertips.
          </p>
        </div>
        {/* Info Box 2 */}
        <div className="p-6 border border-gray-300 rounded-sm">
          <h3 className="text-xl font-semibold text-[#7EA79B] mb-2">WE PICK THE FRESHEST & FINEST</h3>
          <p className="text-gray-600">
            Our personal shoppers pick your items just as you would. You can even leave them instructions.
          </p>
        </div>
        {/* Info Box 3 */}
        <div className="p-6 border border-gray-300 rounded-sm">
          <h3 className="text-xl font-semibold text-[#7EA79B] mb-2">WE DELIVER, OR YOU PICK UP</h3>
          <p className="text-gray-600 ">
            Straight to your door, or on your way home. Get your groceries the way that suits you.
          </p>
        </div>
      </div>

      {/* Right Image Cards */}
      <div className="w-full lg:w-[65%] flex flex-col lg:flex-row gap-6">
        {/* Image Card 1 */}
        <div className="relative group w-full h-[40vh] lg:h-[50vh] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg"
            alt="Happy Customers"
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
            <h2 className="text-8xl font-bold">230</h2>
            <p className="text-2xl font-semibold">Happy Customers</p>
          </div>
        </div>

        {/* Image Card 2 */}
        <div className="relative group w-full h-[40vh] lg:h-[50vh] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4103407/pexels-photo-4103407.jpeg"
            alt="This Month's Specials"
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-12  5 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
            <h2 className="text-5xl font-bold">THIS MONTH'S SPECIALS</h2>
            <p className="text-2xl font-semibold mt-2">Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
