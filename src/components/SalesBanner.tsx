import React from 'react';

const SaleBanner: React.FC = () => {
  return (
    <div className="px-[5vw] sm:px-[8vw] md:px-[10vw] lg:px-[12vw]">
      <div className="relative w-full h-[40vh] overflow-hidden group">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://media.licdn.com/dms/image/C5612AQG5gH6aVK0RSw/article-cover_image-shrink_720_1280/0/1520092400538?e=2147483647&v=beta&t=Km_ojkZB97HzBmMMlIXEreS4J6tLw5qYizvpgpcG4c4')] transition-transform transform group-hover:scale-110 group-hover:brightness-110 duration-500 ease-in-out">
        </div>
        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-10">
          <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold">SEASON SALE!</p>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mt-2 text-center">
            SAVE 50% ON ALL ITEMS
          </h1>
          <button className="mt-4 px-8 py-2 sm:px-6 sm:py-3 bg-[#E7928C] text-white font-semibold rounded hover:bg-pink-600 transition duration-300">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default SaleBanner;
