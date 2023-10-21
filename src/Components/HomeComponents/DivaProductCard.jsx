import { Link } from "react-router-dom";


const DivaProductCard = ({divaProduct}) => {
    console.log(divaProduct)
    const {_id,img, name, brand, type, price,rating} = divaProduct || {}
    return (
       <Link to={`productDetails/${_id}`}>
        <div className="border-2 rounded-lg">
            <img className="rounded-t-lg" src={img} alt="" />
            <div className="text-center my-2">
            <h1>Product Name: {name}</h1>
            <h1>{type}</h1>
            <h1>{price}</h1>
            <h1>{brand}</h1>
            <h1>{rating}</h1>
            </div>
        </div>
       </Link>
    );
};

export default DivaProductCard;