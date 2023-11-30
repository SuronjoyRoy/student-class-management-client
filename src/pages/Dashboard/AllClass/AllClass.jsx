import useAllClasssShow from "../../../hooks/useAllClasssShow";


const AllClass = () => {

    const [allclassShow] = useAllClasssShow();
    console.log(allclassShow)
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Classes</h2>
                <h2 className="text-3xl">Total Classes:</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Number</th>
                            <th>Image</th>
                            <th>Teacher Name</th>
                            <th>Course Name</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allclassShow.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <th>
                                    <div className="">
                                        <img className="w-[300px]" src={item.photoURL} alt="" />
                                    </div>
                                </th>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td className="flex flex-col gap-1">
                                    <button
                                        // onClick={() => handleApporveTeacher(teacher)}
                                        className="btn btn-ghost btn-sm">
                                        Approve
                                    </button>
                                    <button
                                        // onClick={() => handleRjectTeacher(teacher)}
                                        className="btn btn-ghost btn-sm">
                                        Reject
                                    </button>
                                    <button
                                        // onClick={() => handleDeleteTeacher(teacher)}
                                        className="btn btn-error text-white btn-sm">
                                        Delete
                                    </button>
                                    <button
                                        // onClick={() => handleDeleteTeacher(teacher)}
                                        className="btn btn-error text-white btn-sm">
                                        See Progress
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllClass;