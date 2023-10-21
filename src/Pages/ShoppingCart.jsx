import { useContext, useState } from "react";
import CartProductRow from "../Components/ShoppingCartComponents/CartProductRow";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const ShoppingCart = () => {
    const { user } = useContext(AuthContext);
    const cartProducts = useLoaderData();
    const [updatedCartProducts, setUpdatedCartProducts] = useState(cartProducts);
    const userCart = updatedCartProducts.filter((userCartProduct) => user.uid == userCartProduct.userId)

    return (
        <div className="my-28">
            <div className="font-dancing text-2xl text-center my-4">
                {user.displayName} Your Cart Have {userCart.length} Products
            </div>

            <div className="overflow-x-auto mx-24">
                <table className="table">

                    {/* head */}

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>

                    {/* table body  */}

                    <tbody>

                        {
                            userCart.map(cartARowProduct => (<CartProductRow key={cartARowProduct._id}
                                cartARowProduct={cartARowProduct}
                                updatedCartProducts={updatedCartProducts}
                                setUpdatedCartProducts={setUpdatedCartProducts}
                            ></CartProductRow>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div >


    );
};

export default ShoppingCart;