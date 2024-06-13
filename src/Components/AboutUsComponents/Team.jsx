// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaTiktok } from "react-icons/fa";

const Team = () => {
    const teamData = [
        {
            id: 1,
            name: "Isabella Starlight",
            role: "Makeup Artist",
            image: "https://i.ibb.co/4Ps8db1/Artist1.jpg",
            description: "Isabella Starlight is a creative makeup artist known for her celestial-inspired looks. She specializes in ethereal and cosmic makeup, bringing the stars and galaxies to life on her canvas. Her magical touch and passion for the cosmos have made her a favorite among clients who want to shine like the night sky."
        },
        {
            id: 2,
            name: "Felix Glamour",
            role: "Makeup Artist",
            image: "https://i.ibb.co/D49phsd/Artist2.jpg",
            description: "Felix Glamour is a makeup maestro with a flair for drama. His bold and avant-garde creations push the boundaries of conventional beauty. With a passion for theatrical makeup, Felix has transformed countless faces into captivating works of art. His motto: Life is your stage; makeup is your costume."
        },
        {
            id: 3,
            name: "Luna Seraphina",
            role: "Makeup Artist",
            image: "https://i.ibb.co/z8G0G59/Artist3.jpg",
            description: "Luna Seraphina is a makeup mystic who specializes in mystical and fantasy-inspired looks. Her artistry transports clients to enchanted realms, from fairytale forests to mythical kingdoms. Lunas dedication to storytelling through makeup has earned her a reputation as a magician of beauty. Experience the magic of makeup with Luna."
        }
    ];

    return (
        <div className="my-28 w-10/12 mx-auto flex flex-wrap justify-center gap-8">
            {teamData.map((member) => (
                <div key={member.id} className="relative group">
                    <img className="rounded-full w-48 h-48 object-cover" src={member.image} alt={member.name} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 rounded-full text-white text-center p-4 opacity-0 group-hover:opacity-100">
                        <h1 className="text-xl font-semibold">{member.name}</h1>
                        <h4 className="text-lg mb-2">{member.role}</h4>
                        <button className="btn-style">details</button>
                        {/* <p className="text-sm">{member.description}</p> */}
                        {/* <div className="mt-4 flex space-x-4">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaYoutube />
                            <FaPinterestP />
                            <FaTiktok />
                        </div> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Team;
