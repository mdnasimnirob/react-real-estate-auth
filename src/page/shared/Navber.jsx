import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => console.log("Logged out"))
            .catch(err => console.error(err));
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/career" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>
                    Career
                </NavLink>
            </li>
            {!user && (
                <li>
                    <NavLink to="/login" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>
                        Login
                    </NavLink>
                </li>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
            {/* Navbar Start: Logo */}
            <div className="navbar-start">
                <Link to="/" className="flex items-center gap-2">
                    <img
                        className="w-12 md:w-16"
                        src="https://i.ibb.co/JdZzxD5/logo-removebg-preview.png"
                        alt="Unique Estate Logo"
                    />
                    <span className="font-bold text-lg md:text-2xl text-primary hidden sm:block">
                        Unique Estate
                    </span>
                </Link>
            </div>

            {/* Navbar Center: Desktop Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
            </div>

            {/* Navbar for Mobile */}
            <div className="navbar-end  lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className=" menu menu-sm dropdown-content  z-10 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>
                <div className="dropdown hidden dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user?.photoURL ? (
                                <img src={user.photoURL} alt="User Profile" className="rounded-full" />
                            ) : (
                                <img src={userDefaultPic} alt="Default Profile" className="rounded-full" />
                            )}
                        </div>
                    </label>

                    {user ? (
                        <ul
                            tabIndex={0}
                            className="z-10 menu menu-sm dropdown-content flex flex-col-reverse p-2 shadow bg-base-100 rounded-box w-48"
                        >
                            <li>
                                <button onClick={handleSignOut} className="hover:bg-gray-100">
                                    Sign Out
                                </button>
                            </li>
                            <li>
                                <Link to="/profile" className="hover:bg-gray-100">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        <ul
                            tabIndex={0}
                            className="z-10 menu menu-sm dropdown-content flex flex-col-reverse p-2 shadow bg-base-100 rounded-box w-48"
                        >
                            <li>
                                <button onClick={handleSignOut} className="hover:bg-gray-100">
                                    Login
                                </button>
                            </li>
                            <li>
                                <Link to="/profile" className="hover:bg-gray-100">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            {/* Navbar End: Profile & Button */}
            <div className=" lg:navbar-end items-center gap-4">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user?.photoURL ? (
                                // Display user profile picture
                                <img src={user.photoURL} alt="User Profile" className="rounded-full" />
                            ) : (
                                // Display default profile picture and "Sign In" link

                                <img src={userDefaultPic} alt="Default Profile" className="rounded-full" />
                            )}


                        </div>



                    </label>

                    {user ? (
                        <ul
                            tabIndex={0}
                            className="z-10 menu menu-sm dropdown-content flex flex-col-reverse p-2 shadow bg-base-100 rounded-box w-48"
                        >
                            <li>
                                <button onClick={handleSignOut} className="hover:bg-gray-100">
                                    Sign Out
                                </button>
                            </li>
                            <li>
                                <Link to="/profile" className="hover:bg-gray-100">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        <ul
                            tabIndex={0}
                            className="z-10 menu menu-sm dropdown-content flex flex-col-reverse p-2 shadow bg-base-100 rounded-box w-48"
                        >
                            <li>
                                <NavLink to='/login' className="hover:bg-gray-100">
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <Link to="/register" className="hover:bg-gray-100">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    )}


                </div>
            </div>
        </div >

    );
};

export default Navbar;
