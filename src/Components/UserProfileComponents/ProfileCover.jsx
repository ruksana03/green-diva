import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ProfileCover = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="w-full h-80" style={{
            backgroundImage: 'url(https://i.ibb.co/b5HdF5C/pexels-pixabay-235985.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="flex flex-col justify-center items-center">
                <h1 className="pt-12 font-dancing items-center text-4xl font-extrabold" style={{
                    background: '-webkit-linear-gradient(left,#F38590,#F38590, #FEEAE7,#F38590,#F38590)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: '#F38590',
                    textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)'
                }}>Feel Special with Us</h1>
                <p className="text-base text-center p-10 font-dancing"
                    style={{
                        color: 'black',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>
                    {user ? "Thanks for being our beloved member" : "Welcome to our community"}
                </p>
                {user ? (
                    <img className="w-40 rounded-full border-2 border-[#F38590]" src={user.photoURL || ""} alt="" />
                ) : (
                    <img src="" alt="" />
                )}
            </div>
        </div>
    );
};

export default ProfileCover;
