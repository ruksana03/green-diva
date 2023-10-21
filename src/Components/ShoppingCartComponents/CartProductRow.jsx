import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const CartProductRow = ({ cartARowProduct,updatedCartProducts, setUpdatedCartProducts }) => {

    const [quantity, setQuantity] = useState(1);

    const { _id, productId, productName, productImage, price} = cartARowProduct;


    const addQuantity = () => {
        setQuantity(quantity + 1);
    }
    const removeQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const total = (price * quantity).toFixed(2);



    const handleCurtDelete = _id => {
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
          console.log(typeof(_id))

                fetch(`https://green-diva-server-byb33mxas-ruksanas-projects.vercel.app/addToCart/${_id}`, {
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
                            const filteredCartProducts = updatedCartProducts.filter((item) => item._id !== _id);
                            setUpdatedCartProducts(filteredCartProducts);
                        }

                    });
            }
        })

    };

    return (

        <tr>
            <td><button onClick={() => handleCurtDelete(_id)} className="bg-red-800 text-xl px-4 py-1 rounded-2xl text-white">
                <MdOutlineDelete></MdOutlineDelete>
            </button></td>
            <td><img className="w-20" src={productImage} alt="" /></td>
            <td><h1>{productName}</h1></td>
            <td><h1>{price}</h1></td>
            <td>

                <button className="text-center p-1  text-2xl" onClick={removeQuantity}><IoIosRemove className=""></IoIosRemove></button>
                <button className="text-center text-xl">{quantity}</button>
                <button className="text-center p-1 text-2xl" onClick={addQuantity}><IoIosAdd className=""></IoIosAdd></button>

            </td>
            <td>{total}</td>
            <td><Link to={`/productDetails/${productId}`}><button className="bg-[#B0C591] text-xl px-4 py-1 rounded-2xl text-white">
                <BsEye></BsEye>
            </button></Link></td>
        </tr>

    );
};

export default CartProductRow;