import { Link } from "react-router-dom";


const AboutUsBanner = () => {
    return (
        <div className="w-full h-96 pt-24" style={{
            backgroundImage: 'url(https://i.ibb.co/Y8yHTnQ/pexels-karolina-grabowska-4938507.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="flex flex-col justify-center items-center ">
                <h1  className="pt-12 font-dancing items-center text-4xl font-extrabold hover:from-[#537451]  hover:to-[#A0D7AC]" style={{
                                background: '-webkit-linear-gradient(left,#F38590,#F38590, #FEEAE7,#F38590,#F38590)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: '#F38590',
                                textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)'
                            }}>DEAR LOVELY DIVA S</h1>
                <p className="text-base text-center p-10 font-dancing"
                    style={{

                        color: 'black',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>Introducing You Our Team</p>

                <Link to='/joinUs'>
                    <button className="btn text-lg text-black font-dancing my-4 mx-auto" style={{ background: 'linear-gradient(to right,#F38590, #FEEAE7,#F38590)', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                        Be Our Beloved Member
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AboutUsBanner;