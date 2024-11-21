import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navber";
import Banner from "./Banner";
import DataCard from "./DataCard";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";




const Home = () => {

    const { loading } = useContext(AuthContext);
    const allData = useLoaderData();

    if (loading) {
        return <div className="flex items-center justify-center h-screen"><span className="loading loading-dots loading-lg"></span></div>
    }
    console.log(allData);




    return (
        <div>
            <Navbar></Navbar>
            <div className="mb-7">
                <Banner></Banner>
            </div>
            {/* container */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-4 ">
                    <div>
                        <h2 className="text-xl font-bold my-4"></h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            {
                                allData.map(data => <DataCard
                                    key={data.id}
                                    data={data}
                                ></DataCard>)
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;