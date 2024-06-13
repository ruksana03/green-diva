
import Banner from "../Components/HomeComponents/Banner";
import Brands from "../Components/HomeComponents/Brands";
// import DivaProducts from "../Components/HomeComponents/DivaProducts";
import KnowMore from "../Components/HomeComponents/KnowMore";
import NewsLetter from "../Components/HomeComponents/NewsLetter";
import ProductCategory from "../Components/HomeComponents/ProductCategory/ProductCategory";
import Testimonials from "../Components/HomeComponents/Testimonials";
import SkinTypes from "../Components/HomeComponents/skinTypes/SkinTypes";


const Home = () => {
    return (
        <div>
            <Banner/>
            <SkinTypes/>
            <ProductCategory/>
            <KnowMore/>
            {/* <DivaProducts/> */}
            <Testimonials/>
            <Brands/>
            <NewsLetter/>
        </div>


    );
};

export default Home;
