
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
                    // Swal.fire({
                    //     title: 'Error!',
                    //     text: 'Social login error!',
                    //     icon: 'error',
                    //     confirmButtonText: 'OK'
                    // });
                });
        }
        
    return (
        <div>
            <div className="divider">continue with</div>
            <div className="">
                <button
                    onClick={() => handleGoogleLogin(googleLogin)}
                    className=" text-lg text-white font-dancing w-full py-2" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;