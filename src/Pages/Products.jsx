import { useLoaderData } from "react-router-dom";
import AddProduct from "./AddProduct";
import ProductCard from "../Components/ProductsComponents/ProductCard";
import { useState } from "react";


const Products = () => {
    

    const products = useLoaderData();
    console.log(products);

    const [updatedProducts , setUpdatedProducts] = useState(products);

    return (
        <div>
            <div className="my-28"> Products:{products.length}</div>
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
            <div className="my-28"><AddProduct></AddProduct></div>
        </div>
    );
};

export default Products;