import { Link, useLoaderData } from "react-router-dom";
import ProductCard from "../Components/ProductsComponents/ProductCard";
import { useState } from "react";
import useThemeToggle from "../Hooks/useThemeToggle";
import { FaMinus, FaPlus } from "react-icons/fa";


const Products = () => {
    const { mode } = useThemeToggle();
    const products = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const [isColorExpanded, setIsColorExpanded] = useState(false);
    const [isBrandExpanded, setIsBrandExpanded] = useState(false);
    const [isPriceExpanded, setIsPriceExpanded] = useState(false);
    const [isSizeExpanded, setIsSizeExpanded] = useState(false);

    const toggleColorList = () => {
        setIsColorExpanded(!isColorExpanded);
    };
    const toggleBrandList = () => {
        setIsBrandExpanded(!isBrandExpanded);
    };
    const togglePriceList = () => {
        setIsPriceExpanded(!isPriceExpanded);
    };
    const toggleSizeList = () => {
        setIsSizeExpanded(!isSizeExpanded);
    };

    // Logic to calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    // Function to handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="w-10/12 mx-auto">
            <div className={`mb-12 mx-auto text-center font-dancing text-xl pt-28 pb-12 ${mode === "dark" ? "bg-lightGreen" : mode === "light" ? "bg-skyBlue" : ""}`}>
                <div className="my-8">
                    <h1 className="text-center styleSubHead"> Products</h1>
                    <h1 className="baseText"><Link to='/' className="hover:text-lg">Home</Link> / Products</h1>
                </div>
                <h1 className="text-center baseText">Explore Our {products.length} Makeup Products</h1>
                <h2 className="text-base"
                    style={{
                        background: '-webkit-linear-gradient(left, #537451, #74B47D, #A0D7AC)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: '#A0D7AC',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>
                    Discover your Beauty with Green Diva
                </h2>
                <h1 className="text-sm"></h1>
            </div>

            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <h1
                        className={`py-3 pl-6 border-s-4 ${mode === "dark" ? "bg-darkGreen border-softPink" : mode === "light" ? "bg-skyBlue border-softPink" : ""}`}
                    >
                        Category
                    </h1>

                    <div>
                        <ul className="space-y-4 my-6">
                            <li className="flex justify-between">
                                Foundation Brush <FaPlus />
                            </li>
                            <li className="flex justify-between">
                                Lipstick <FaPlus />
                            </li>
                            <li className="flex justify-between">
                                Skin Powder <FaPlus />
                            </li>
                            <li className="flex justify-between">
                                Eyeshadow Palette <FaPlus />
                            </li>
                            <li className="flex justify-between">
                                Foundation <FaPlus />
                            </li>
                            <li className="flex justify-between">
                                Nail Polish <FaPlus />
                            </li>
                            <li className="flex justify-between">
                                Settings Powder <FaPlus />
                            </li>
                            <li className="flex justify-between">
                                Primer <FaPlus />
                            </li>
                        </ul>
                    </div>


                    {/* color  */}
                    <div className="my-6">
                        <h1 className={`py-3 pl-6 border-s-4 flex justify-between pr-6 ${mode === "dark" ? "bg-darkGreen  border-softPink" : " bg-mint border-softPink"}`} onClick={toggleColorList}>Shop By Color    {isColorExpanded ? <FaPlus /> : <FaMinus />} </h1>
                        {isColorExpanded && (
                            <ul className="space-y-4 my-6">
                                <li className="flex items-center gap-4">
                                    <div className="h-4 w-4 rounded-3xl bg-black"></div> Black
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="h-4 w-4 rounded-3xl bg-orange-100"></div> Sandal
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="h-4 w-4 rounded-3xl bg-pink-500"></div> Pink
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="h-4 w-4 rounded-3xl bg-red-500"></div> Red
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="h-4 w-4 rounded-3xl bg-red-900"></div> Brown
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="h-4 w-4 rounded-3xl bg-orange-500"></div> Orange
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="h-4 w-4 rounded-3xl bg-green-900"></div> Green
                                </li>
                            </ul>
                        )}
                    </div>


                    {/* brand  */}
                    <div className="my-6">
                        <h1 className={`py-3 pl-6 border-s-4 flex justify-between pr-6 ${mode === "dark" ? "bg-darkGreen  border-softPink" : " bg-mint border-softPink"}`} onClick={toggleBrandList}>Shop By Brand {isBrandExpanded ? <FaPlus /> : <FaMinus />}</h1>
                        {
                            isBrandExpanded && (
                                <ul className="space-y-4 my-6 list-disc mx-6">
                                    <li>
                                        Colorbar
                                    </li>
                                    <li>
                                        Harbals
                                    </li>
                                    <li>
                                        Lakme
                                    </li>
                                    <li>
                                        Eli
                                    </li>
                                    <li>
                                        Mars
                                    </li>
                                </ul>
                            )
                        }

                    </div>


                    {/* price  */}
                    <div className="my-6">
                        <h1 className={`py-3 pl-6 border-s-4 flex justify-between pr-6  ${mode === "dark" ? "bg-darkGreen  border-softPink" : " bg-mint border-softPink"}`} onClick={togglePriceList}>Shop By price {isPriceExpanded ? <FaPlus /> : <FaMinus />}</h1>
                        {
                            isPriceExpanded && (
                                <ul className="space-y-4 my-6">
                                    <li>
                                        $100 - $300
                                    </li>
                                    <li>
                                        $200 - $300
                                    </li>
                                    <li>
                                        $300 - $400
                                    </li>
                                    <li>
                                        $400 - $600
                                    </li>
                                    <li>
                                        $500- $700
                                    </li>
                                    <li>
                                        $700- $1000
                                    </li>
                                </ul>
                            )
                        }

                    </div>


                    {/* Size  */}
                    <div className="my-6">
                        <h1 className={`py-3 pl-6 border-s-4 flex justify-between pr-6  ${mode === "dark" ? "bg-darkGreen  border-softPink" : " bg-mint border-softPink"}`} onClick={toggleSizeList}>Shop By Size {isSizeExpanded ? <FaPlus /> : <FaMinus />}</h1>
                        {
                            isSizeExpanded && (
                                <ul className="space-x-4 my-6 flex">
                                    <li className="border py-2 px-3">
                                        S
                                    </li>
                                    <li className="border py-2 px-3">
                                        M
                                    </li>
                                    <li className="border py-2 px-3">
                                        L
                                    </li>
                                    <li className="border py-2 px-3">
                                        B
                                    </li>
                                </ul>
                            )
                        }

                    </div>

                    <h1 className={`py-3 pl-6 border-s-4 ${mode === "dark" ? "bg-darkGreen  border-softPink" : " bg-mint border-softPink"}`}>Best Selling</h1>

                </div>

                <div className="col-span-10">
                    <div className=" grid grid-cols-1 mx-4 md:grid-cols-2 gap-4 md:mx-12 lg:grid-cols-3 lg:mx-28">
                        {
                            currentItems.map(product => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                // Pass any other necessary props
                                />
                            ))
                        }
                    </div>

                    {/* Pagination */}
                    <nav className="mt-4 flex justify-center">
                        <ul className="pagination flex flex-row gap-8">
                            {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
                                <li key={index} className="page-item">
                                    <button onClick={() => paginate(index + 1)} className={`page-link h-12 w-12 border rounded-full p-2 ${currentPage === index + 1 ? 'active' : ''}`}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    );
};

export default Products;