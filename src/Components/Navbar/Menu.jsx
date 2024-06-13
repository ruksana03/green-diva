/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useThemeToggle from '../../Hooks/useThemeToggle';

const Menu = () => {
  const { mode, toggleTheme } = useThemeToggle();

  const navLinksData = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/pricingPlans", label: "Pricing Plans" },
    { to: "/aboutUs", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/userProfile", label: "User Profile" },
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
      <ul className="flex flex-col lg:flex-row gap-6">{navLinks}</ul>
    </>
  );
};

export default Menu;
