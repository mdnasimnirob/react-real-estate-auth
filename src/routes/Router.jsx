import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home/Home";
import About from "../page/About";
import Career from "../page/Career";
import Login from "../page/Login";
import Register from "../page/Register";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data.json'),
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/career",
                element: <Career></Career>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    }

]);

export default Router;