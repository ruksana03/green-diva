
import { useEffect, useState } from "react";
import { BsEye, BsCartPlus } from "react-icons/bs";
import { MdOutlineDelete, MdModeEdit, MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// const ProductCard = ({ product, updatedProducts, setUpdatedProducts, cartProducts, setCartProducts,handleCartProduct }) => {
const ProductCard = ({ product, updatedProducts, setUpdatedProducts }) => {
    // console.log(product);


    // const [cartSuccessMassage, setCartSuccessMassage] = useState(false)
    // const [allUsers, setAllUsers] = useState([])




    const { _id, img, name, brand, price, rating } = product;

    const handleDelete = (_id) => {
        // console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://green-diva-server-byb33mxas-ruksanas-projects.vercel.app/products/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const filteredProducts = updatedProducts.filter((item) => item._id !== _id);
                            setUpdatedProducts(filteredProducts);
                        }

                    });
            }
        })

    };


    // useEffect(() => {
    //     async function handleAllUsers() {
    //         try {
    //             const res = await fetch("https://green-diva-server-byb33mxas-ruksanas-projects.vercel.app/users")
    //             if (res.ok) {
    //                 const allUser = await res.json();
    //                 setAllUsers(allUser);
    //             } else {
    //                 console.error("failed to fetch All data")
    //             }
    //         } catch (error) {
    //             console.error('Error!!!!')
    //         }
    //     }
    //     handleAllUsers();
    // }, []);

    // console.log(allUsers)

    // // Extract email addresses
    // const emails = allUsers.map((user) => user.email);

    // // Log the email addresses
    // console.log(emails);


    // const addCartProduct = (_id,userEmail) => {
    //     console.log(_id)
    //     fetch("https://green-diva-server-byb33mxas-ruksanas-projects.vercel.app/addToCart", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(product),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if (data.insertedId) {
    //                 setCartSuccessMassage(true)
    //                 Swal.fire({
    //                     title: "Added!",
    //                     text: "Your product has been added.",
    //                     icon: "success",
    //                 });
    //             }
    //         });
    // };





    return (
        <div>
            <div><img src={img} alt="" /></div>
            <div className="text-center">
                <h1 className="text-xl my-4"> {name}</h1>
                <h1 className="text-lg text-[#B0C591]"> {brand}</h1>
                <p>{price} BDT</p>
                <p className="my-2">Rating:{rating}/5</p>
            </div>

            <div className="mx-auto flex justify-center gap-4">
                
            <Link to={`/productDetails/${_id}`}> <button className="bg-[#B0C591] text-xl px-4 py-1 rounded-2xl text-white">
                        <MdAdd></MdAdd>
                    </button></Link>

               <Link to={`/productDetails/${_id}`}> <button className="bg-[#B0C591] text-xl px-4 py-1 rounded-2xl text-white">
                    <BsEye></BsEye>
                </button></Link>
                <button onClick={() => handleDelete(_id)} className="bg-red-800 text-xl px-4 py-1 rounded-2xl text-white">
                    <MdOutlineDelete></MdOutlineDelete>
                </button>
                <Link to={`/updateProduct/${_id}`}>
                    <button className="bg-black text-xl px-4 py-1 rounded-2xl text-white">
                        <MdModeEdit></MdModeEdit>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;