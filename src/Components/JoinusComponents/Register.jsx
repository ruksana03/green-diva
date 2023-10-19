import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";


const Register = () => {

    const navigate = useNavigate();

    const { createUser,handleProfile } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
    
        const name = form.name.value;
        const email = form.email.value;
        const img = form.img.value;
        const password = form.password.value;
    
        console.log(name, email, img, password);
    
        // Validation
        if (password.length < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must be at least 6 characters and contain at least one capital letter and one special character!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        // Create a new user
        createUser(email, password)
            .then((res) => {
                handleProfile(name, img)
                    .then(() => {
                        console.log(res.user);
                        const createdTime = res.user.metadata.creationTime;
                        const user = { name, email, img, password, createdTime };
    
                        // Add user data to your server
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(user),
                        })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            if (data.insertedId) {
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'User added successfully!',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                                });
                                navigate('/');
                            } else {
                                Swal.fire({
                                    title: 'Error!',
                                    text: 'Error adding user to the server!',
                                    icon: 'error',
                                    confirmButtonText: 'OK'
                                });
                            }
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        Swal.fire({
                            title: 'Error!',
                            text: 'Something is wrong!',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    });
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    title: 'Error!',
                    text: 'Something is wrong!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    };
    

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">

                            {/* input user name  */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>

                            {/* input user image  */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="img" placeholder="Your image" className="input input-bordered" required />
                            </div>

                            {/* input user email  */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            {/* input user password  */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;