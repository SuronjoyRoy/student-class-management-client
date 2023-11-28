import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ClassCard = ({ item, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, name, title, email, category, Details, photoURL, price } = item;

    const handleDelete = async () => {
        axiosSecure.delete(`/class/${_id}`)
        .then(res =>{
         console.log(res.data)
        
         if (res.data.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "Your class has been deleted.",
              "success"
            );
            refetch();
          }
        })
    };
    

    return (
        <div>
            <div >

                <div className="card">
                    <div className="card w-80 h-[520px] bg-base-100 shadow-xl">
                        <figure className="px-4 pt-4">
                            <img src={photoURL} alt="Language Cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black  font-semibold">
                                {title}
                            </h2>
                            <h2>
                                <small className="text-gray-600">{title}</small>
                            </h2>
                            <p>
                                <small className="text-gray-600">{name}</small>
                            </p>
                            <p>
                                <small className="text-gray-600">{email}</small>
                            </p>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <p>Price: ${price}</p>
                                </div>

                            </div>
                            <p>
                                <small className="text-gray-600">{Details}</small>
                            </p>
                            <div className="card-actions flex justify-center mt-2">
                                <Link to={`/dashboard/updateClass/${_id}`}
                                    className="bg-[#2f80ed]  rounded-lg p-2 text-white"
                                >
                                    Update
                                </Link>
                                <Link to='/dashboard/detailsClass/:id'
                                    className="bg-[#187927]  rounded-lg p-2 text-white"
                                >
                                    See details
                                </Link>
                                {/* Delete Button */}
                                <button onClick={handleDelete} className="bg-[#ed2f42] rounded-lg p-2 text-white">
                                    Delete
                                </button>
                                {/* <Link to='/dashboard/deleteClass/:id'
                                    className="bg-[#ed2f42]  rounded-lg p-2 text-white"
                                >
                                    Delete
                                </Link> */}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClassCard;
