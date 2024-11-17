import { Link } from "react-router-dom";

import Navbar from "./shared/Navber";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";





const Login = () => {
    const { signIn, googleLogin, facebookLogin } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);

        // logIn

        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);

            })
    }

    // google login

    const handleGoogle = () => {
        googleLogin();
    };

    // facebook login

    const handleFacebook = () => {
        facebookLogin();
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="">
                <h2 className="text-center text-3xl mt-8 mb-5">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-4/12 mx-auto">
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
                </form>
                <div>
                    <div className="text-gray-500 text-center mt-4">
                        <p> Or Sign In with</p>
                    </div>
                    <div className="flex justify-center gap-3 my-4">
                        <button onClick={handleGoogle} className="btn relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Google</span>
                        </button>
                        <button onClick={handleFacebook} className="btn relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Facebook</span>
                        </button>
                        <button className="btn relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Twitter</span>
                        </button>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center">
                <p className="text-center mt-3 mx-2 my-2">Do not have an account </p>
                <p
                    className="relative text-lg font-medium text-blue-600 group"
                >
                    <Link
                        className="hover:text-lg group text-blue-600 font-bold"
                        to="/register">Register</Link>
                    <span
                        className="absolute text-center left-0 bottom-1 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"
                    ></span>
                </p>
            </div>
        </div>



    );
};

export default Login;