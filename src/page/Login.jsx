import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "./shared/Navber";




const Login = () => {
    const { signIn } = useContext(AuthContext);
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

    return (
        <div>
            <Navbar></Navbar>

            <div className="">
                <h2 className="text-center text-3xl my-10">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
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
            </div>

            <p className=" text-center mt-3 mx-6 my-2">Do not have an account <Link
                className="text-blue-600 font-bold" to="/register">Register</Link>
            </p>
        </div>

    );
};

export default Login;