import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaTiktok } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="mt-28">
            {/* <footer className="footer p-10 bg-gradient-to-r from-[#be9d77] to-[#8A9D65]  px-28"> */}
            <footer className="footer p-10 bg-black  px-28">
                <div className=" text-white text-lg font-dancing font-thin">
                   <h1  className="text-2xl font-bold" style={{textShadow: '4px 4px 4px rgba(0, 0, 0, 4)'} }>CONTACT</h1>
                    <Link className="link link-hover ">Address: Dhaka, Bangladesh</Link>
                    <Link className="link link-hover "> E-mail: greendiva01@gmail.com</Link>
                    <Link className="link link-hover ">Phone : + 088 411 725 39 12</Link>
                </div >
                <div className=" text-white text-lg font-dancing font-thin text-center">
                    <Link to='/'>
                        <h2
                            className="font-dancing items-center text-4xl font-extrabold" style={{
                                background: '-webkit-linear-gradient(left, #537451, #74B47D, #A0D7AC)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: '#A0D7AC',
                                textShadow: '4px 4px 4px rgba(0, 0, 0, 4)'
                            }}>
                            Green Diva Beauty
                        </h2>
                    </Link>
                    <p className="font-dancing">An oasis of online beauty built <br />specifically  so your new cosmetics site <br /> can take everyone’s breaths away.</p>
                </div >
                <div className=" text-white text-lg font-dancing font-thin">
                    <h1 className="text-2xl font-bold" style={{textShadow: '4px 4px 4px rgba(0, 0, 0, 4)'} }>COLLECTIONS</h1>
                    <Link className="link link-hover ">Glowing skin is a result</Link>
                    <Link className="link link-hover ">Green Beauty Forever Young</Link>
                    <Link className="link link-hover ">Pure Skin Solutions</Link>
                </div >
            </footer>

            {/* end footer for social account link and copy right  */}
            {/* <footer className="footer px-10 py-4 border-t bg-[#677960] text-base-content border-base-300"> */}
            <footer className="footer px-10 py-4 border-t bg-black text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <Link to='/'><h2 className="font-dancing items-center text-4xl font-extrabold ]" style={{
                        background: '-webkit-linear-gradient(left, #DBDBD8,#F7F8F6, #CCA78D )',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: '#F7F8F6',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'
                    }}>
                        Green Diva
                    </h2></Link>
                    <p className="text-white font-dancing">© 2023 Green Diva, All Rights Reserved <br />Providing reliable beauty product since 2022</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="border-2 rounded-full p-2">
                            <FaFacebookF className="text-xl text-white "></FaFacebookF>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="border-2 rounded-full p-2">
                            <FaTwitter className="text-xl text-white"></FaTwitter>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="border-2 rounded-full p-2">
                            <FaInstagram className="text-xl text-white"></FaInstagram>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="border-2 rounded-full p-2">
                            <FaYoutube className="text-xl text-white "></FaYoutube>
                        </a>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" className="border-2 rounded-full p-2">
                            <FaPinterestP className="text-xl text-white"></FaPinterestP>
                        </a>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="border-2 rounded-full p-2"> 
                            <FaTiktok className="text-xl text-white "></FaTiktok>
                        </a>


                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;