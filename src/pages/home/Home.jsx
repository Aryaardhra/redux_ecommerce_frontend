import Blogs from "../blogs/Blogs"
import TreadingProducts from "../shop/TreadingProducts"
import Banner from "./Banner"
import Categories from "./Categories"
import DealSection from "./DealSection"
import HeroSection from "./HeroSection"
import PromoBanner from "./PromoBanner"


const Home = () => {
  return (
    <>
    <Banner />
    <Categories />
    <HeroSection />
    <TreadingProducts />
    <DealSection />
    <PromoBanner />
    <Blogs />
    </>
  )
}

export default Home