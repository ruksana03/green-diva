import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaTiktok } from "react-icons/fa";

const Team = () => {
    return (
        <div className="my-28 mx-20">

            {/* Team member -1  */}
            <div className=" flex flex-col lg:flex-row lg:justify-between w-full ">
                <div className=""><img className="rounded-full" src="https://i.ibb.co/4Ps8db1/Artist1.jpg" alt="" /></div>
                <div className="font-dancing text-center text-base p-16 bg-[#FFF9F8] rounded-full">
                    <h1 className="text-2xl font-semibold my-4">Isabella Starlight</h1>
                    <h4 className="text-xl mb-8">Makeup Artist</h4>
                    <p>Isabella Starlight is a creative makeup artist known for her celestial-inspired looks. She specializes in ethereal and cosmic makeup, bringing the stars and galaxies to life on her canvas. Her magical touch and passion for the cosmos have made her a favorite among clients who want to shine like the night sky</p>
                    <div className="my-8 text-2xl grid grid-cols-3 lg:grid-cols-6 gap-4 ">
                        <button><FaFacebookF></FaFacebookF></button>
                        <button><FaTwitter></FaTwitter></button>
                        <button><FaInstagram></FaInstagram></button>
                        <button><FaYoutube></FaYoutube></button>
                        <button><FaPinterestP></FaPinterestP></button>
                        <button><FaTiktok></FaTiktok></button>
                    </div>
                </div>
            </div>

            {/* team Member -2  */}
            <div className=" flex flex-col-reverse lg:flex-row lg:justify-between w-full">
               
                <div className="font-dancing text-center text-base p-16 bg-[#FFF9F8] rounded-full">
                    <h1 className="text-2xl font-semibold my-4">Felix Glamour</h1>
                    <h4 className="text-xl mb-8">Makeup Artist</h4>
                    <p>Felix Glamour is a makeup maestro with a flair for drama. His bold and avant-garde creations push the boundaries of conventional beauty. With a passion for theatrical makeup, Felix has transformed countless faces into captivating works of art. His motto: Life is your stage; makeup is your costume</p>
                    <div className="my-8 text-2xl grid grid-cols-3 lg:grid-cols-6 gap-4 ">
                        <button><FaFacebookF></FaFacebookF></button>
                        <button><FaTwitter></FaTwitter></button>
                        <button><FaInstagram></FaInstagram></button>
                        <button><FaYoutube></FaYoutube></button>
                        <button><FaPinterestP></FaPinterestP></button>
                        <button><FaTiktok></FaTiktok></button>
                    </div>
                </div>
                <div className=""><img className="rounded-full" src="https://i.ibb.co/D49phsd/Artist2.jpg" alt="" /></div>
            </div>

            {/* team member -3  */}
            <div className=" flex flex-col lg:flex-row lg:justify-between w-full">
                <div className=""><img className="rounded-full" src="https://i.ibb.co/z8G0G59/Artist3.jpg" alt="" /></div>
                <div className="font-dancing text-center text-base p-16 bg-[#FFF9F8] rounded-full">
                    <h1 className="text-2xl font-semibold my-4"> Luna Seraphina</h1>
                    <h4 className="text-xl mb-8">Makeup Artist</h4>
                    <p>Luna Seraphina is a makeup mystic who specializes in mystical and fantasy-inspired looks. Her artistry transports clients to enchanted realms, from fairytale forests to mythical kingdoms. Lunas dedication to storytelling through makeup has earned her a reputation as a magician of beauty. Experience the magic of makeup with Luna.</p>
                    <div className="my-8 text-2xl grid grid-cols-3 lg:grid-cols-6 gap-4 ">
                        <button><FaFacebookF></FaFacebookF></button>
                        <button><FaTwitter></FaTwitter></button>
                        <button><FaInstagram></FaInstagram></button>
                        <button><FaYoutube></FaYoutube></button>
                        <button><FaPinterestP></FaPinterestP></button>
                        <button><FaTiktok></FaTiktok></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;