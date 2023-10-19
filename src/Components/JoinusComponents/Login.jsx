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
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
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