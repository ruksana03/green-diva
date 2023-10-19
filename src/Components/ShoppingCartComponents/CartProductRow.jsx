import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import Swal from "sweetalert2";

// const CartProductRow = (cartARowProduct,updatedProducts, setUpdatedProducts) => {
const CartProductRow = ({ cartARowProduct,updatedCartProducts, setUpdatedCartProducts }) => {


    const [quantity, setQuantity] = useState(1);

    // console.log("new:", cartARowProduct);
    // console.log("name", cartARowProduct.cartProduct.name);
    // if (!cartProduct.cartProduct) {
    //     return "No data added here";
    // }
    const { _id, img, price } = cartARowProduct;

    // console.log(_id)
    // console.log(typeof(_id))


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

                fetch(`http://localhost:5000/cartProducts/${_id}`, {
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
            <td><img className="w-20" src={img} alt="" /></td>
            <td><h1>{price}</h1></td>
            <td>

                <button className="text-center p-2 border-2 text-2xl" onClick={removeQuantity}><IoIosRemove className=""></IoIosRemove></button>
                <button className="text-xl text-center p-2 border-2">{quantity}</button>
                <button className="text-center p-2 border-2 text-2xl" onClick={addQuantity}><IoIosAdd className=""></IoIosAdd></button>

            </td>
            <td>{total}</td>
            <td><button className="bg-[#B0C591] text-xl px-4 py-1 rounded-2xl text-white">
                <BsEye></BsEye>
            </button></td>
        </tr>

    );
};

export default CartProductRow;