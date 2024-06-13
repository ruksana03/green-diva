

const NewsLetter = () => {
    return (
        <div className="relative h-[500px] bg-fixed bg-center bg-cover bg-[url('https://i.ibb.co/Jjjzrsf/newsletter2.png')]">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
                <p className="text-white">Stay in touch</p>
                <h1 className="text-4xl font-bold text-white mb-4">Subscribe to our Newsletter</h1>
                <p className="baseText text-white">Stay updated with the latest news and exclusive offers</p>
                <div className="mt-6">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="bg-transparent border-b border-black placeholder-black p-2  outline-none focus:ring-2 focus:ring-black"
                    />

                    <button className="px-6 py-2 bg-red-500 text-white text-lg hover:bg-red-700 transition duration-300 ml-6">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
