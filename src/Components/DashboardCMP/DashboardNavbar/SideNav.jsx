import Logo from "../../Shared/Logo/Logo";
import DashboardMenu from "./DashboardMenu";


const SideNav = () => {
    return (
        <div className="min-h-screen shadow-2xl border-e pl-12 pt-8">
            <Logo />
            <div className="my-8">
                <DashboardMenu />
            </div>
        </div>
    );
};

export default SideNav;