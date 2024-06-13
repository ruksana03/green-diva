import { Outlet } from "react-router-dom";
// import DashboardNav from "../Components/DashboardCMP/DashboardNavbar/DashboardNav";
import SideNav from "../Components/DashboardCMP/DashboardNavbar/SideNav";


const DashboardLayout = () => {
    return (
        <div>
            <div>
                {/* <DashboardNav /> */}
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <SideNav />
                </div>
                <div className="col-span-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;