

const UserQna = () => {
    return (
        <div>
            <div className="font-dancing mx-auto my-20 text-center px-20">
                <h1 className="font-bold text-2xl">ASK US ANYTHING</h1>
                <p>At Green Diva, we are dedicated to providing you with the best beauty solutions and information. Whether you have questions about our products, beauty tips, or need guidance on your skincare or makeup routine, our experts are here to help. Your beauty journey is our top priority, and we are just a message away from making it extraordinary. Do not hesitate to reach out  we are eager to assist you in looking and feeling your best.</p>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto font-dancing">
                <input className="border-2 border-black w-1/3 my-4 p-2" type="text" name="" id=""placeholder="Email" required/>
                <textarea className=" border-2 border-black w-1/3 p-2" placeholder="Your Comment"></textarea>
                <input className="border-2 my-4 px-6 py-2 bg-black text-white" type="submit" value="SUBMIT" />
            </div>
        </div>
    );
};

export default UserQna;