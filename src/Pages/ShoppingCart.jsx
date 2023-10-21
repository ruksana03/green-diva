import { useContext, useState } from "react";
import CartProductRow from "../Components/ShoppingCartComponents/CartProductRow";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const ShoppingCart = () => {
    const { user } = useContext(AuthContext);
    // console.log(user)

    const cartProducts = useLoaderData();
    // console.log(cartProducts)

    const [updatedCartProducts, setUpdatedCartProducts] = useState(cartProducts);

  

     const userCart = updatedCartProducts.filter((userCartProduct) => user.uid == userCartProduct.userId)
    console.log(userCart) 

    // console.log(updatedProducts)

    return (
        <div className="my-28">
            Shopping cart: {cartProducts.length}
            User Name : {user.displayName}
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
                                setUpdatedCartProducts= {setUpdatedCartProducts}
                            ></CartProductRow>
                            ))
                        }


                    </tbody>

                    {/* foot */}

                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th> Total</th>
                            <th>Total quantity</th>
                            <th>Total price</th>
                        </tr>
                    </tfoot>

                </table>
            </div>

        </div >


    );
};

export default ShoppingCart;