import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'

const Navbar = () => {

    const navLinks =
        <>
            <li className="my-auto text-lg font-bold">
                <NavLink to="/"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "normal" : "normal",
                            color: isPending ? "black" : "black",
                            textDecoration: isActive || isPending ? "underline" : "none",
                            cursor: "pointer",
                    
                        
                        };
                    }}
                >Home</NavLink>
            </li>
            <li className="my-auto text-lg font-bold">
                <NavLink to="/products"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "normal" : "normal",
                            color: isPending ? "black" : "black",
                            textDecoration: isActive || isPending ? "underline" : "none",
                            cursor: "pointer",
                          
                        };
                    }}
                >Products</NavLink>
            </li>


        </>

    return (
        <div className="">
            <div className="navbar bg-[#B0C591] px-28">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link><img className="h-20 w-24" src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-2 px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;