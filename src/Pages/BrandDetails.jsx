import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandProductsCard from "../Components/BrandDetailsComponents/BrandProductsCard";
import BrandDetailsBanner from "../Components/BrandDetailsComponents/BrandDetailsBanner";


const BrandDetails = () => {

    const [allProducts, setAllProducts] = useState([])

    const brands = useLoaderData();
    const { _id, brandName, logo } = brands;
    // console.log(_id, brandName, logo)

    useEffect(() => {
        async function handleAllProducts() {
            try {
                const res = await fetch("http://localhost:5000/products")
                if (res.ok) {
                    const allData = await res.json();
                    setAllProducts(allData);
                } else {
                    console.error("failed to fetch All data")
                }
            } catch (error) {
                console.error('Error!!!!')
            }
        }
        handleAllProducts();
    }, []);

    // console.log(allProducts);

    const filteredProducts = allProducts.filter((product) => product.brand.toLowerCase() == brandName.toLowerCase())

    // console.log(filteredProducts)



    return (
        <div>
            <BrandDetailsBanner></BrandDetailsBanner>

            <div className="text-center font-dancing text-3xl my-10 items-center" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                <img className="mx-auto w-20 h-14" src={logo} alt="" />
                <p>Explore the beauty with <span className="text-4xl font-bold">{brandName}</span></p>
                <h1 className="my-8">There are <span className="text-4xl font-bold"> "{filteredProducts.length}" </span> Products available</h1>
            </div>

            <div>
                {filteredProducts.length > 0 ? (
                    <div  className="grid grid-cols-1 mx-4 md:grid-cols-2 gap-4 md:mx-12 lg:grid-cols-4 lg:mx-28">
                        {
                            filteredProducts.map(brandProduct => <BrandProductsCard key={brandProduct._id} brandProduct={brandProduct}></BrandProductsCard>)
                        }
                    </div>
                ) : (
                    <div className="">
                        <img className="mx-auto rounded-full w-1/3 h-1/3" src="https://i.ibb.co/FgGkvHT/noData3.jpg" alt="" />
                    </div>
                )}
            </div>


        </div>
    );
};

export default BrandDetails;