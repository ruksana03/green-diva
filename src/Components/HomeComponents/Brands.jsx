import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        async function handleBrands() {
            try {
                const response = await fetch('https://green-diva-server.vercel.app/brands');
                if (response.ok) {
                    const data = await response.json();
                    setBrands(data);
                } else {
                    console.error("Failed to fetch");
                }
            } catch (error) {
                console.error('An error occurred while fetching brands:', error);
            }
        }
        handleBrands();
    }, []);

    return (
        <div className="my-12 w-10/12 mx-auto">
            <hr className="w-1/3 line" />
            <div className="mt-6 mb-12">
                <h1 className="styleHead">Brand</h1>
                <p className="SubHead">Explore Our Brand Partnerships</p>
            </div>
            {/* <h1 className="mb-5 text-xl font-medium text-center text-black" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                Explore Our Brand Partnerships
            </h1> */}
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
                {brands.map((brand) => (
                    <BrandCard key={brand._id} brand={brand} />
                ))}
            </div>
        </div>
    );
};

export default Brands;
