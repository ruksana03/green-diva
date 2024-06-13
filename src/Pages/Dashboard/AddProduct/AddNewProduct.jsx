import Swal from 'sweetalert2'

const AddNewProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const img = form.img.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const newProduct = { img, name, price, brand, type, description, rating }
        console.log(newProduct)

        // send data to server 


        fetch("https://green-diva-server.vercel.app/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });
    }

    const handleAddBrand = e => {
        e.preventDefault();
        const brandForm = e.target;
        const logo = brandForm.logo.value;
        const brandName = brandForm.brandName.value;
        console.log(logo, brandName)
        const newBrand = { logo, brandName }
        console.log(newBrand)

        // send to server 
        fetch('https://green-diva-server.vercel.app/brands', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBrand),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Brand added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });
    }
    return (

        <div className='mx-28'>
            <div className="mb-5 text-2xl my-12 font-medium text-black" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Add Product Here</div>
            <form onSubmit={handleAddProduct} className=''>

                <div className=" grid grid-cols-1 mx-8 p-12 md:grid-cols-2 bg-opacity-50" style={{ backgroundImage: 'url(https://i.ibb.co/4KgL4J1/nailpolish7.jpg)', backgroundSize: 'cover' }}>



                    {/* input img  */}

                    <div className="form-control w-full max-w-xs my-4">
                        <span className="label-text my-4 font-dancing fon text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>What is the image url?</span>
                        <input type="text" name="img" placeholder="Image url" className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* input name  */}

                    <div className="form-control w-full max-w-xs mb-4">
                        <span className="label-text my-4 font-dancing font-semibold text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>What is the product name?</span>
                        <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* input Brand name  */}

                    <div className="form-control w-full max-w-xs mb-4">
                        <span className="label-text my-4 font-dancing font-semibold text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>What is the product brand name?</span>
                        <input type="text" name="brand" placeholder="Product Brand Name" className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* select product type  */}

                    <div className="form-control w-full max-w-xs mb-4">

                        <span className="label-text my-4 font-dancing font-semibold text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Pick the best fantasy franchise</span>
                        <select name="type" className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Face</option>
                            <option>Eyes</option>
                            <option>Lips</option>
                            <option>Cheek</option>
                            <option>Brushes & Tools</option>
                            <option>Body</option>

                        </select>
                    </div>

                    {/* product price */}

                    <div className="form-control w-full max-w-xs mb-4">
                        <span className="label-text my-4 font-dancing font-semibold text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>What is the product price?</span>
                        <input type="number" name="price" placeholder="Product price" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* product rating */}

                    <div className="form-control w-full max-w-xs mb-4">
                        <span className="label-text my-4 font-dancing font-semibold text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>What is the product rating?</span>
                        <input type="number" name="rating" placeholder="Product price" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* short description  */}

                    <div className="form-control mb-4 lg:col-span-2">
                        <span className="label-text my-4 font-dancing font-semibold text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>What is it & How to use ?</span>
                        <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <input type="submit" value="Add Product" className="btn w-full flex  mx-auto my-2 bg-gradient-to-r from-[#EAD4BB] to-[#CCA78D]" />

                </div>

            </form>

            {/* add brand form  */}

            <div className="mb-5 text-2xl my-12 font-medium text-black" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Add Product Brand Here</div>

            <form onSubmit={handleAddBrand} className=''>

                <div className=" grid grid-cols-1 mx-8 p-12 md:grid-cols-2 bg-opacity-50" style={{ backgroundImage: 'url(https://i.ibb.co/djYhYcn/lipstick1.jpg)', backgroundSize: 'cover' }}>



                    {/* input brand img  */}

                    <div className="form-control w-full max-w-xs my-4">
                        <span className="label-text my-4 font-dancing fon text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>What is the brand logo url?</span>
                        <input type="text" name="logo" placeholder="brand logo url" className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* input brand name  */}

                    <div className="form-control w-full max-w-xs mb-4">
                        <span className="label-text my-4 font-dancing font-semibold text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>What is the brand name?</span>
                        <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <input type="submit" value="Add Brand" className="btn w-full flex  mx-auto my-2 bg-gradient-to-r from-[#EAD4BB] to-[#CCA78D]" />

                </div>

            </form>

        </div>
    );
};

export default AddNewProduct;