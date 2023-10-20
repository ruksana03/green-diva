import { Link, NavLink } from "react-router-dom";
// import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

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
            <li className="my-auto text-lg font-bold">
                <NavLink to="/pricingPlans"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "normal" : "normal",
                            color: isPending ? "black" : "black",
                            textDecoration: isActive || isPending ? "underline" : "none",
                            cursor: "pointer",

                        };
                    }}
                >Pricing Plans</NavLink>
            </li>
            <li className="my-auto text-lg font-bold">
                <NavLink to="/aboutUs"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "normal" : "normal",
                            color: isPending ? "black" : "black",
                            textDecoration: isActive || isPending ? "underline" : "none",
                            cursor: "pointer",

                        };
                    }}
                >About Us</NavLink>
            </li>
            <li className="my-auto text-lg font-bold">
                <NavLink to="/contact"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "normal" : "normal",
                            color: isPending ? "black" : "black",
                            textDecoration: isActive || isPending ? "underline" : "none",
                            cursor: "pointer",

                        };
                    }}
                >Contact</NavLink>
            </li>


        </>

    return (
        <div className="">
            <div className="navbar bg-[#f7f8f6] px-28">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'><h2 className="font-dancing items-center text-4xl font-extrabold hover:from-[#537451]  hover:to-[#A0D7AC]" style={{
                        background: '-webkit-linear-gradient(left, #537451, #74B47D, #A0D7AC)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: '#A0D7AC' ,
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>
                        Green Diva
                    </h2></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold  text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <Link to='/shoppingCart'><button className="btn text-lg text-black" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>View cart</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURl} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm text-black btn-ghost">{user.displayName}</button>

                                </li>
                                <Link to='/addProduct' className="btn text-black btn-sm  btn-ghost">Add Product</Link>
                                <li>
                                    <button className="btn text-black btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            : <Link to='/joinUs' className="ml-4 btn text-base text-black" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}> Join Us </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;