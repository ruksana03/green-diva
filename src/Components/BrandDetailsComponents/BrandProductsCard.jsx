// import { useState } from "react";
import { BsEye, BsCartPlus } from "react-icons/bs";
import { MdOutlineDelete, MdModeEdit, MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

const BrandProductsCard = ({brandProduct}) => {

    // console.log(brandProduct);

    const {_id, brand, description,price, img, name, rating,type} = brandProduct;

    return (
        <div>
            <h1>Brand Product : </h1>
        <div><img src={img} alt="" /></div>
        <div className="text-center">
            <h1 className="text-xl my-4"> {name}</h1>
            <h1 className="text-lg text-[#B0C591]"> {brand}</h1>
            <p>{price} BDT</p>
            <p className="my-2">Rating:{rating}/5</p>
        </div>

        <div className="mx-auto flex justify-center gap-4">
          
               
        <Link to={`/productDetails/${_id}`}><button className="bg-[#B0C591] text-xl px-4 py-1 rounded-2xl text-white">
                        <MdAdd></MdAdd>
                    </button></Link>
             

                    <Link to={`/productDetails/${_id}`}><button className="bg-[#B0C591] text-xl px-4 py-1 rounded-2xl text-white">
                <BsEye></BsEye>
            </button></Link>
            <Link to={`/updateProduct/${_id}`}>
                <button className="bg-black text-xl px-4 py-1 rounded-2xl text-white">
                    <MdModeEdit></MdModeEdit>
                </button>
            </Link>
        </div>
    </div>
    );
};

export default BrandProductsCard;