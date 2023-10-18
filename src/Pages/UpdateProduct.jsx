import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, img, name, brand, price,type,description, rating } = product;
    console.log(product)

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const img = form.img.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updatedProduct = { img, name, price, brand, type, description, rating }
        console.log(updatedProduct)

        // send data to server 


        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });
    }
    return (
        <div className="my-28">
        <div className="text-xl text-center my-12">Update Product: {name}</div>
        <form onSubmit={handleUpdateProduct}>

            <div className="bg-[#FBF9FA] grid grid-cols-1 mx-8 p-12 md:grid-cols-2">

                {/*update input img  */}

                <div className="form-control w-full max-w-xs my-4">
                    <span className="label-text my-4">What is the image url?</span>
                    <input type="text" name="img" defaultValue={img} placeholder="Image url" className="input input-bordered w-full max-w-xs" />
                </div>

                {/*update input name  */}

                <div className="form-control w-full max-w-xs mb-4">
                    <span className="label-text my-4">What is the product name?</span>
                    <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                </div>

                {/*update input Brand name  */}

                <div className="form-control w-full max-w-xs mb-4">
                    <span className="label-text my-4">What is the product brand name?</span>
                    <input type="text" name="brand" defaultValue={brand} placeholder="Product Brand Name" className="input input-bordered w-full max-w-xs" />
                </div>

                {/*update select product type  */}

                <div className="form-control w-full max-w-xs mb-4">

                    <span className="label-text my-4">Pick the best fantasy franchise</span>
                    <select name="type" className="select select-bordered" value={type}>
                        <option disabled selected></option>
                        <option>Face</option>
                        <option>Eyes</option>
                        <option>Lips</option>
                        <option>Cheek</option>
                        <option>Brushes & Tools</option>
                        <option>Body</option>

                    </select>
                </div>

                {/*update product price */}

                <div className="form-control w-full max-w-xs mb-4">
                    <span className="label-text my-4">What is the product price?</span>
                    <input type="number" name="price" defaultValue={price} placeholder="Product price" className="input input-bordered w-full max-w-xs" />
                </div>

                {/*update short description  */}

                <div className="form-control mb-4">
                    <span className="label-text my-4">What is it & How to use ?</span>
                    <textarea name="description" className="textarea textarea-bordered h-24" defaultValue={description} placeholder="bio"></textarea>
                </div>

                {/*update product rating */}

                <div className="form-control w-full max-w-xs mb-4">
                    <span className="label-text my-4">What is the product rating?</span>
                    <input type="number" name="rating" defaultValue={rating} placeholder="Product price" className="input input-bordered w-full max-w-xs" />
                </div>

            </div>
            <input type="submit" value="Update Product" className="btn w-1/2 flex  mx-auto my-2 bg-[#c6d8ab]" />
        </form>

    </div>
    );
};

export default UpdateProduct;