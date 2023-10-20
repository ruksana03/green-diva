import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/VgMtnt7/7957540b-7f8c-4085-b67d-add5c0729952.jpg)' }}>
            <div className="hero-overlay bg-white bg-opacity-10"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="items-center text-6xl text-black hover:from-[#537451] hover:to-[#184d24]"
                        style={{
                        
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' 
                        }}
                    >
                        HELLO DIVA’S
                    </h1>
                   
                    <p className="mb-5 text-xl font-medium text-black" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                        Elevate Your Beauty, Naturally with Green Diva
                    </p>
                    <Link to='/joinUs'><button className="btn text-lg text-black" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        Get Started
                    </button></Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;