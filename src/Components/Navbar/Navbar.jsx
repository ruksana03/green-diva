import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import { MdAdd } from "react-icons/md";
import DarkModeToggle from "../DarkModeToggle";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user?.uid)
    console.log(user)

    const [totalCartProduct, setTotalCartProduct] = useState([]) ;
    const [userProducts, setUserProducts] = useState([]);

    // useEffect for get all cart collection data 
    useEffect(() => {
        async function handleTotalCartProduct() {
            try {
                const response = await fetch('https://green-diva-server-byb33mxas-ruksanas-projects.vercel.app/addToCart')
                if (response.ok) {
                    const data = await response.json();
                    setTotalCartProduct(data);
                }
                else {
                    console.error("fail to fetch")
                }
            } catch (error) {
                console.error('An error occurred while fetching brands:', error);
            }
        }
        handleTotalCartProduct();
    }, [totalCartProduct])


    // useEffect for filter specific user cart products
    useEffect(() => {
        if (user) {
            const userCartProducts = totalCartProduct.filter((userCartProduct) => user.uid === userCartProduct.userId);
            setUserProducts(userCartProducts);
        } else {
            setUserProducts([]);
        }
    }, [user, totalCartProduct]);


    const navLinks =
        //  Nav list  
        <>
            <li className="my-auto text-lg font-dancing">
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
            <li className="my-auto text-lg font-dancing">
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
            <li className="my-auto text-lg font-dancing">
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
            <li className="my-auto text-lg font-dancing">
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
            <li className="my-auto text-lg font-dancing">
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
            <li className="my-auto text-lg font-dancing">
                <NavLink to="/userProfile"
                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "normal" : "normal",
                            color: isPending ? "black" : "black",
                            textDecoration: isActive || isPending ? "underline" : "none",
                            cursor: "pointer",

                        };
                    }}
                >User Profile</NavLink>
            </li>
        </>

    return (
        <div className="">
            <div className="navbar bg-[#f7f8f6] lg:px-28">
                {/* drop down menu for small device  */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'>
                        <h2
                            className="font-dancing items-center text-4xl font-extrabold hover:from-[#537451]  hover:to-[#A0D7AC]" style={{
                                background: '-webkit-linear-gradient(left, #537451, #74B47D, #A0D7AC)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: '#A0D7AC',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                            }}>
                            Green Diva
                        </h2>
                    </Link>
                </div>



                {/* nav item for large device  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 px-1">
                        {navLinks}
                    </ul>
                </div>



                {/* nav end */}
                <div className="navbar-end gap-6">
                    {/* nav cart handling  */}
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator ">
                                    <button className=" btn text-base text-white" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item bg-black text-white">{userProducts.length}</span>
                                    </button>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-dancing  text-lg">{userProducts.length} Items</span>
                                    <div className="card-actions">
                                        <Link to='/shoppingCart'><button className="btn text-lg text-white font-dancing" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>View cart</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div> : <Link to='/products'><button className="ml-4 btn text-base text-white" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}><MdAdd className="text-2xl"></MdAdd></button></Link>
                    }

                    <DarkModeToggle></DarkModeToggle>


                    {/* nav Profile handling  */}
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to='/userProfile'>
                                        <button className="btn text-lg text-white font-dancing " style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                            {user.displayName}
                                        </button>
                                    </Link>

                                </li>
                                <li>
                                    <Link to='/addProduct' className="btn text-lg text-white font-dancing" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                        Add Product
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/userProfile' className="btn text-lg text-white font-dancing" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                        Your Profile
                                    </Link>
                                </li>
                                <li>
                                    <button className="btn text-lg text-white font-dancing" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                                        onClick={logOut}>
                                        Logout
                                    </button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/joinUs' className="ml-4 btn text-base text-white" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                Join Us
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;