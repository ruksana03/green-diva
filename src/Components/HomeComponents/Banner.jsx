import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Banner = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/VgMtnt7/7957540b-7f8c-4085-b67d-add5c0729952.jpg)' }}>
            <div className="hero-overlay bg-white bg-opacity-10"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="items-center text-6xl text-[#184d24] font-dancing font-light"
                        style={{
                            textShadow: '6px 6px 6px rgba(0, 0, 0, 4)' 
                        }}
                    >
                        HELLO DIVA’S
                    </h1>
                   
                    <p className="mb-5 text-xl font-medium text-black font-dancing" style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 1)' }}>
                        Elevate Your Beauty, Naturally with Green Diva
                    </p>{
                        user?.email? <Link to='/aboutUs'><button className="btn text-lg text-white font-dancing" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                        Get Started
                    </button></Link>  :<Link to='/joinUs'><button className="btn text-lg text-white font-dancing" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                        Get Started
                    </button></Link>
                    }
                    

                </div>
            </div>
        </div>
    );
};

export default Banner;