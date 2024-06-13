import { Link } from "react-router-dom";


const ContactBanner = () => {
    return (
        <div className="w-full h-96 pt-24" style={{
            backgroundImage: 'url(https://i.ibb.co/8s6X6LX/contact-Banner.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="flex flex-col justify-center items-center ">
                <h1  className="pt-12 font-dancing items-center text-4xl font-extrabold hover:from-[#537451]  hover:to-[#A0D7AC]" style={{
                                background: '-webkit-linear-gradient(left,#F38590,#F38590, #F38590, #F38590, #F38590,#F38590,#F38590)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: '#F38590',
                                textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)'
                            }}>Your Beauty, Our Priority: Get in Touch</h1>
                <p className="text-base text-center p-10 font-dancing"
                    style={{

                        color: 'black',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>Connecting Beauty, One Click at a Time</p>

                <Link to='/joinUs'>
                    <button className="btn text-lg text-black font-dancing my-4 mx-auto" style={{ background: 'linear-gradient(to right,#F38590, #FEEAE7,#F38590)', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                        Join Us
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ContactBanner;