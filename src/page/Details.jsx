import { useLoaderData, useParams } from "react-router-dom";

import { FaChartArea } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "./shared/Navber";




const Details = () => {
    const alldata = useLoaderData();
    const { id } = useParams();
    const data = alldata.find((data) => data.id == id);
    console.log(data);

    const {

        image,
        estate_title,
        description,
        price,
        location,
        area,
        status
    } = data;

    return (


        <section>

            <div className=" ">
                <Navbar></Navbar>
                <div className="flex items-center w-full justify-center lg:justify-center  dark:text-gray-800 p-6  lg:rounded-3xl  ">
                    <img src={image} alt="" className="object-contain lg:w-screen rounded-lg " />
                </div>
                <div className="flex flex-col gap-3 justify-center p-6 text-center lg:text-start">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-2xl text-start lg:text-4xl text-blue-700 font-semibold mb-2">{estate_title}</h1>
                            <div className="flex items-center gap-3 mt-3">

                                <div className="flex flex-row items-center gap-9">
                                    <p className=" "><span className="text-gray-500 text-sm flex flex-row gap-2 items-center">
                                        <FaChartArea className="text-blue-500 text-lg" /> {area}</span></p>
                                    <span className="flex flex-row items-center gap-1 text-gray-500"> <FaLocationDot className="text-blue-500" />{location}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center  gap-3">
                            <span className="text- font-semibold lg:text-4xl text-blue-600">{price}</span>
                        </div>
                    </div>
                    <div className="">
                        <p className="font-semibold text-2xl mt-6 text-gray-500">Description</p>
                        <hr className="my-6" />

                        <p className="text-gray-500 "><span className="font-semibold"></span> <span className="text-sm">{description}</span></p>

                    </div>



                    <div className="flex dropdown-hover  flex-col space-y-4 items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
                        <button className="btn btn-primary hover:bg-blue-800 px-8 text-lg font-semibold border rounded dark:border-gray-800">{status}</button>

                    </div>
                </div>
            </div>
        </section>



    );
};

export default Details;