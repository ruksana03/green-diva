import { useLoaderData } from "react-router-dom";
import ProductCard from "../Components/ProductsComponents/ProductCard";
import { useState } from "react";

const Products = () => {
    const products = useLoaderData();
    // console.log(products);

    const [updatedProducts, setUpdatedProducts] = useState(products);


    return (
        <div>
            <div className="my-12 mx-auto text-center font-dancing text-xl">
                <h1 className="text-center">Explore Our {products.length} Makeup Products</h1>
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
            <div className="grid grid-cols-1 mx-4 md:grid-cols-2 gap-4 md:mx-12 lg:grid-cols-4 lg:mx-28">
                {
                    updatedProducts.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        updatedProducts={updatedProducts}
                        setUpdatedProducts={setUpdatedProducts}
                    ></ProductCard>)
                }
            </div>

        </div>
    );
};

export default Products;