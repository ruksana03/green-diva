import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="lg:fixed top-0 left-0 w-full z-50"> <Navbar></Navbar>
            </div>

            <Outlet></Outlet>

            <div className="lg:static bottom-0 w-full z-50">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default MainLayout;