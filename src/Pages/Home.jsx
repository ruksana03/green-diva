import DarkModeToggle from "../Components/DarkModeToggle";
import Banner from "../Components/HomeComponents/Banner";
import Brands from "../Components/HomeComponents/Brands";
import DivaProducts from "../Components/HomeComponents/DivaProducts";
import KnowMore from "../Components/HomeComponents/KnowMore";
import Testimonials from "../Components/HomeComponents/Testimonials";



const Home = () => {


 

    return (
        <div>

<DarkModeToggle></DarkModeToggle>
            <Banner />
            <Brands />
            <DivaProducts />
            <KnowMore />
            <Testimonials />
        </div>


    );
};

export default Home;
