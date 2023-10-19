
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useContext } from "react";



const SocialLogin = () => {
 const navigate = useNavigate()
        const { googleLogin } = useContext(AuthContext);

        const handleGoogleLogin = (media) => {
            media()
                .then(res => {
                    console.log(res);
                    Swal.fire({
                        title: 'Success!',
                        text: 'User logged in successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    navigate('/');
                })
                .catch(error => {
                    console.error(error); 
                    Swal.fire({
                        title: 'Error!',
                        text: 'Social login error!',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                });
        }
        
    return (
        <div>
            <div className="divider">continue with</div>
            <div className="">
                <button
                    onClick={() => handleGoogleLogin(googleLogin)}
                    className=" px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% w-full text-white">Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;