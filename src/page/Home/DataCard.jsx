import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const DataCard = ({ data }) => {

    const {

        id,
        estate_title,
        price,
        area,
        location,
        status,
        image,
        button_text
    } = data;

    // console.log(data);
    return (

        <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={estate_title}
                    className="rounded-xl w-full h-64 object-cover" />
            </figure>
            <div className="card-body items-center text-center">

                <h2 className="card-title font-bold text-2xl text-gray-400">{estate_title}</h2>

                <div className="flex ">

                    <p className="text-gray-500 "><span className="font-semibold">Area :</span> <span className="text-sm">{area}</span></p>
                </div>
                <p className="text-gray-500 font-normal  "><span className="font-semibold">Location :</span> <span className="text-sm">{location}</span></p>
                <p className="text-blue-500 font-normal  "><span className="font-semibold">Status :</span> <span className="text-sm">{status}</span></p>
                {/* <ul className="text-gray-300">
                    {facilities.map((facility, index) => (
                        <li key={index}>{facility}</li>
                    ))}
                </ul> */}

                <div className="flex w-full justify-around items-center gap-12 mt-3">
                    <div>
                        <Link to={`/details/${id}`} className=" hover:bg-blue-800 bg-gray-800 font-normal text-white px-4 py-2 rounded">
                            {button_text}
                        </Link>
                    </div>
                    <div>
                        <p className="text-blue-500 font-semibold ">{price}</p>
                    </div>
                </div>
            </div>
        </div >



    );
};

DataCard.propTypes = {
    data: PropTypes.object.isRequired,
}


export default DataCard;