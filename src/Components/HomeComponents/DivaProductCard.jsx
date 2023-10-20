

const DivaProductCard = ({divaProduct}) => {
    console.log(divaProduct)
    const {img, name, brand, type, price,rating} = divaProduct
    return (
        <div className="border-2 rounded-lg">
            <img className="rounded-t-lg" src={img} alt="" />
            <div className="text-center my-2">
            <h1>{name}</h1>
            <h1>{type}</h1>
            <h1>{price}</h1>
            <h1>{brand}</h1>
            <h1>{rating}</h1>
            </div>
        </div>
    );
};

export default DivaProductCard;