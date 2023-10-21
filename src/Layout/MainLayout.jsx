import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
// import DarkModeToggle from "../Components/DarkModeToggle";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            {/* <DarkModeToggle></DarkModeToggle> */}
            <Outlet></Outlet>

            <Footer></Footer>


        </div>
    );
};

export default MainLayout;