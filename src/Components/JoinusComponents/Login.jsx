import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";


const Login = () => {

    const navigate = useNavigate();

    const {signIn} = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        // creating a new user 
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'User log in successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Error!',
                    text: 'something is wrong!',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            })
    }
    return (
        <div>
            <div className=" bg-[#FFF9F8] mx-28 my-16">

                <div className="  flex flex-col justify-center items-center text-center">

                    <div className="text-center font-dancing my-8">
                        <h1 className="text-5xl ">Login now!</h1>
                    </div>

                    <div className=" w-1/2  shadow-2xl bg-[#FFF9F8] font-dancing text-lg p-8">
                        <form onSubmit={handleSignIn}>
                            <div className="">
                                <label className="label">
                                    <span className="label-text px-8">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text px-8">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className=" mt-6">
                                <button  className=" text-lg text-white font-dancing w-full py-2" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;