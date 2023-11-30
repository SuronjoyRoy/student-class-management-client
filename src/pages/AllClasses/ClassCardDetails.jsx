import { Link, useParams} from "react-router-dom";
import useClassEnroll from "../../hooks/useClassEnroll";

const ClassCardDetails = () => {

    const {id} = useParams();
    const [data] = useClassEnroll(id);
    console.log(data)

    // const { _id, name, title, email, category, Details, photoURL, price } = data;
    
    return (
        <div className="max-w-xl mx-auto space-y-5">
                <div className="card my-10">
                    <div className="card w-full h-[500px] bg-base-100 shadow-xl">
                        <figure className="px-4 pt-4">
                            <img src={data.photoURL} alt="Language Cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black  font-semibold">
                                {data.title}
                            </h2>
                            <h2>
                                <small className="text-gray-600">{data.title}</small>
                            </h2>
                            <p>
                                <small className="text-gray-600">{data.name}</small>
                            </p>
                            <p>
                                <small className="text-gray-600">{data.email}</small>
                            </p>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <p>Price: ${data.price}</p>
                                </div>

                            </div>
                            <p>
                                <small className="text-gray-600">{data.Details}</small>
                            </p>
                            <div className="justify-center">
                                
                                <Link to='/dashboard/detailsClass/:id'
                                    className="bg-[#c84e26] btn btn-block text-lg btn-ghost hover:bg-purple-400  hover:text-whit  rounded-lg p-2 text-white"
                                >
                                    Pay Now
                                </Link>
                                

                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default ClassCardDetails;