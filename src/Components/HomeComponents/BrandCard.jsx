// import { BsEye } from "react-icons/bs";
// import { MdOutlineDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {

    // console.log(brand)
    const { _id, brandName, logo } = brand;




    return (

        <div>
            <Link to={`/brandDetails/${_id}`}>
                <div className=" w-full h-full hover:bg-[#E0E0DB] rounded-lg">
                    <img className="w-20 h-14 mx-auto border-2 border-[#8B9D7F] rounded-lg" src={logo} alt="" />
                    <h1 className="text-center  font-dancing text-lg">{brandName}</h1>
                    {/* <div className="flex justify-center gap-4 w-full bg-gradient-to-r from-[#EAD4BB] to-[#CCA78D] text-white rounded-lg" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                        <button className="border-2 rounded-lg bg-white text-[#C4C4C4] p-2"><BsEye className="text-xl"></BsEye></button>

                        <button className="border-2 rounded-lg bg-white text-[#C4C4C4] p-2"><MdOutlineDelete className="text-xl"></MdOutlineDelete></button>

                        <button className="border-2 rounded-lg bg-white text-[#C4C4C4] p-2"><MdModeEdit className="text-xl"></MdModeEdit></button>
                    </div> */}

                </div>
            </Link>
        </div>
    );
};

export default BrandCard;