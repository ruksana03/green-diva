import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const aProductDetails = useLoaderData();

    return (
        <div>
            Product Details:{aProductDetails.name}
            <div>
                <div className="flex flex-col md:flex-row lg:flex-row gap-6">
                    <div className="w-full md:w-1/2 lg:w-1/2"><img src={aProductDetails.img} alt="" /></div>
                    <div className="p-12">
                        <h1>{aProductDetails.name}</h1>
                        <p>{aProductDetails.brand}</p>
                        <p>{aProductDetails.type}</p>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default ProductDetails;