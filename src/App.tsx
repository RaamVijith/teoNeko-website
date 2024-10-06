import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import InfoSection from "./components/InfoSection"
import LogoBanner from "./components/LogoBanner"
import Navbar from "./components/Navbar"
import PopularCategories from "./components/PopularCategory"
import SaleBanner from "./components/SalesBanner"
import TopNavbar from "./components/TopNavbar"


function App() {

  return (
    <>
    <TopNavbar/>
      <Navbar/>
      <div className="flex justify-center w-[76vw] ml-[12vw] items-center h-[1px] bg-gray-400"></div>
      <HeroSection/>
      <PopularCategories/>
      <SaleBanner/>
      <InfoSection/>
      <LogoBanner/>
      <Footer/>
    </>
  )
}

export default App
