/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import useThemeToggle from "../../../Hooks/useThemeToggle";


const DashboardMenu = () => {
    const { mode, toggleTheme } = useThemeToggle();

    const navLinksData = [
      { to: "/dashboard", label: "Dashboard" },
      { to: "/dashboard/addNewProduct", label: "Add Products" },
      { to: "/dashboard/addFaceTypes", label: "Add FaceTypes" },
      { to: "/dashboard/addCategory", label: "Add Category" },
  
    ];
  
    const navLinks = navLinksData.map((link, index) => (
      <li key={index} className="">
        <NavLink
          to={link.to}
          className={({ isActive }) => isActive ? `active` : ``}
        >
          {link.label}
        </NavLink>
      </li>
    ));
  
    return (
      <>
        <ul className="flex flex-col gap-6">{navLinks}</ul>
      </>
    );
  };

export default DashboardMenu;