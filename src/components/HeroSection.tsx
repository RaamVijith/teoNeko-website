import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center pt-10 w-full px-[12vw] gap-8 lg:gap-[4vh]">
      {/* First Card */}
      <div className="relative group w-full lg:w-[60vw] h-[40vh] lg:h-[80vh] overflow-hidden cursor-pointer">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/725/717/298/leaves-brew-tea-green-tea-wallpaper-preview.jpg"
          alt="Quality Tea Production"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white transition-opacity duration-300">
          <h2 className="text-3xl lg:text-5xl font-bold">Quality Tea Production</h2>
          <p className="mt-2 text-lg lg:text-2xl">Enjoy the best tea from India.</p>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:gap-[4vh] justify-between items-stretch w-full lg:w-auto">
        {/* Second Card */}
        <div className="relative group w-full lg:w-[20vw] h-[40vh] lg:h-[38vh] overflow-hidden cursor-pointer">
          <img
            src="https://c1.wallpaperflare.com/preview/143/259/782/green-tea-green-tee-nature.jpg"
            alt="Organic Matcha"
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white transition-opacity duration-300">
            <h2 className="text-2xl lg:text-4xl font-bold">Organic Matcha</h2>
            <p className="mt-2 text-lg lg:text-2xl">Shop matcha tea</p>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative group w-full lg:w-[20vw] h-[40vh] lg:h-[38vh] overflow-hidden cursor-pointer">
          <img
            src="https://c0.wallpaperflare.com/preview/35/1002/563/green-tea-teabag-drink.jpg"
            alt="Trending Teas"
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white transition-opacity duration-300">
            <h2 className="text-2xl lg:text-4xl font-bold">Trending Teas</h2>
            <p className="mt-2 text-lg lg:text-2xl">Get 20% off on herbal teas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
