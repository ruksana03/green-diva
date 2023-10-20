import Banner from "../Components/HomeComponents/Banner";
import Brands from "../Components/HomeComponents/Brands";
import DivaProducts from "../Components/HomeComponents/DivaProducts";
import KnowMore from "../Components/HomeComponents/KnowMore";
import Testimonials from "../Components/HomeComponents/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DivaProducts></DivaProducts>
            <Brands></Brands>
            <KnowMore></KnowMore>
            <Testimonials></Testimonials>
            Home
        </div>
    );
};

export default Home;