import { useLoaderData } from "react-router-dom";
import ProductCard from "../Components/ProductsComponents/ProductCard";
import { useState } from "react";
// import Swal from "sweetalert2";
// import Swal from "sweetalert2";


const Products = () => {
    const products = useLoaderData();
    // console.log(products);

    const [updatedProducts, setUpdatedProducts] = useState(products);
    // const [cartProducts, setCartProducts] = useState({ });
    // const [duplicateProductMassage, setDuplicateProductMassage] = useState(false)
    // const [cartProductIds, setCartProductIds] = useState([]);

    // console.log(cartProducts);

    // const handleCartProduct = () =>{
        
    //     fetch("http://localhost:5000/products/addToCart", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(cartProducts ),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);

    //             if (data.insertedId) {
    //                 Swal.fire({
    //                     title: 'Success!',
    //                     text: 'Product added successfully!',
    //                     icon: 'success',
    //                     confirmButtonText: 'Cool'
    //                 })
    //             }
    //         });
    // }

    


    // const handleDuplicateCartProduct = (productId) => {
    //     for (const cartProduct of cartProducts) {
    //         if (cartProduct._id === productId) {
    //             setDuplicateProductMassage(true);
    //             console.log(duplicateProductMassage);
    //             Swal.fire({
    //                 title: 'Added!',
    //                 text: 'Your product has been added.',
    //                 icon: 'success',
    //             });
    //             return;
    //         }
    //     }
    //     setDuplicateProductMassage(false);
    // // };

    // console.log(duplicateProductMassage)

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
                        // cartProducts={cartProducts}
                        // setCartProducts={setCartProducts}
                        // handleCartProduct={handleCartProduct}
                        // handleDuplicateCartProduct={handleDuplicateCartProduct}
                        // duplicateProductMassage={duplicateProductMassage}
                      

                    ></ProductCard>)
                }
            </div>
            
        </div>
    );
};

export default Products;