import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandProductsCard from "../Components/BrandDetailsComponents/BrandProductsCard";
import BrandDetailsBanner from "../Components/BrandDetailsComponents/BrandDetailsBanner";


const BrandDetails = () => {

    const [allProducts, setAllProducts] = useState([])

    const brands = useLoaderData();
    const { _id, brandName, logo } = brands;
    console.log(_id, brandName, logo)

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

    console.log(filteredProducts)



    return (
        <div>
            <BrandDetailsBanner></BrandDetailsBanner>
            brand details of : {brandName}

            <div>
                <div className="my-28"> Products:{filteredProducts.length}</div>
                <div className="grid grid-cols-1 mx-4 md:grid-cols-2 gap-4 md:mx-12 lg:grid-cols-4 lg:mx-28">
                    {filteredProducts.length > 0 ? (
                        <div>
                            {
                                filteredProducts.map(brandProduct => <BrandProductsCard key={brandProduct._id} brandProduct={brandProduct}></BrandProductsCard>)
                            }
                        </div>
                    ) : (
                        <div>
                            <p>No data found.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default BrandDetails;