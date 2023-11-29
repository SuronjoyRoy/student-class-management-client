import { Link } from 'react-router-dom';

const AllClassesCard = ({item, refetch}) => {
    
    const { _id, name, title, email, category, Details, photoURL, price } = item;
    return (
        <div className="card">
                    <div className="card w-full h-[520px] bg-base-100 shadow-xl">
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
                            <div className="w-full justify-center mt-2">
                                
                                <Link to='/dashboard/detailsClass/:id'
                                    className="bg-[#187927]  rounded-lg p-2 text-white"
                                >
                                    See details
                                </Link>
                               

                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default AllClassesCard;