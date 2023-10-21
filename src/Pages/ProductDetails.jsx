import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

import {  BsCartPlus } from "react-icons/bs";


const ProductDetails = () => {
    const [addedToCart, setAddedToCart] = useState(false);
    const aProductDetails = useLoaderData();

    const { user } = useContext(AuthContext);
    console.log(user)

    const { _id, img, name, price, brand, type, description } = aProductDetails


    // const handleAddToCart = () => {

    //     fetch("https://green-diva-server-b5eulip49-ruksanas-projects.vercel.app/addToCart", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             userId: user.uid,
    //             productId: _id,
    //             productName: name,
    //             price: price,
    //         }),
    //     })
    //         .then((response) => {
    //             if (response.status === 200) {
    //                 Swal.fire({
    //                     title: 'Success!',
    //                     text: 'Product updated successfully!',
    //                     icon: 'success',
    //                     confirmButtonText: 'Cool'
    //                 })
    //                 setAddedToCart(true);
    //             }
    //         })
    //         .catch((error) => {
    //             Swal.fire({
    //                 title: 'Error!',
    //                 text: 'Product updated successfully!',
    //                 icon: 'error',
    //                 confirmButtonText: 'ok'
    //             })
    //         });
    // };


    const handleAddToCart = () => {
        // Fetch the user's cart data
        fetch("https://green-diva-server-b5eulip49-ruksanas-projects.vercel.app/addToCart", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((cartData) => {
                // Check if the product is already in the cart for any user
                const productInCart = cartData.find(item => item.productId === _id && item.userId === user.uid);

                setAddedToCart(true)
                if (productInCart) {
                    Swal.fire({
                        title: "Check Your Cart!",
                        text: "This product is already added!",
                        icon: "info",
                        confirmButtonText: "Cool",
                    });
                } else {
                    setAddedToCart(false)
                    // If the product is not in any user's cart, add it
                    fetch("https://green-diva-server-b5eulip49-ruksanas-projects.vercel.app/addToCart", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            userId: user.uid,
                            productId: _id,
                            productName: name,
                            productImage: img,
                            price: price,
                        }),
                    })
                        .then((response) => {
                            if (response.status === 200) {
                                Swal.fire({
                                    title: "Success!",
                                    text: "Product added successfully!",
                                    icon: "success",
                                    confirmButtonText: "Cool",
                                });
                                // setAddedToCart(true);
                            } else {
                                Swal.fire({
                                    title: "Error!",
                                    text: "Product addition failed!",
                                    icon: "error",
                                    confirmButtonText: "OK",
                                });
                            }
                        })
                        .catch((error) => {
                            console.error("Error adding to cart", error);
                        });
                }
            })
            .catch((error) => {
                console.error("Error fetching cart data", error);
            });
    };
    
    
                return (
                    <div className="mx-28">
                        <h1 className="text-3xl font-dancing my-8 text-center">Product Details of <span className=" text-4xl font-medium">{name}</span></h1>
                        <div >
                            <div className="flex flex-col  md:flex-row lg:flex-row  gap-6">
                                <div className=""><img src={img} alt="" /></div>
                                <div className="p-12">
                                    <h1> {name}</h1>
                                    <p>{brand} Brand</p>
                                    <p>{type}</p>
                                    <p>About Product : {description}</p>
                                    <p>Price: {price} BDT</p>
                                    {
                                    addedToCart?(<button onClick={handleAddToCart} className="flex justify-center gap-4 text-xl text-white py-2 px-4 my-4 border-2 rounded-lg"  style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}><BsCartPlus></BsCartPlus>Added</button>
                                    ):(
                                    <button onClick={handleAddToCart} className="flex justify-center gap-4 text-xl text-white py-2 px-4 my-4 border-2 rounded-lg"  style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}><BsCartPlus></BsCartPlus>Add to Cart</button>)
                                    }
                                    
                                        
                                   
                                </div>
                            </div>

                        </div>
                    </div>
                );
            };

        export default ProductDetails;