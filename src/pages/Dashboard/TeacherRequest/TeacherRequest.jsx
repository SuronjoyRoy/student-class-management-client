
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const TeacherRequest = () => {

    const axiosSecure = useAxiosSecure();
    const { data: teacher = [], refetch } = useQuery({
        queryKey: ['teacher'],
        queryFn: async () => {
            const res = await axiosSecure.get('/teacher');
            return res.data;
        }
    })

    const handleDeleteTeacher = teacher => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/teacher/${teacher._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    const handleApporveTeacher = async (apporve) => {

        console.log(apporve)

        const teacherApprove = await fetch(`https://student-class-management-server-ten.vercel.app/apporove-single/${apporve.email}`, {

            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        console.log(teacherApprove)
    }



    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Teacher</h2>
                <h2 className="text-3xl">Total Teachers: {teacher.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Number</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Exparience(category)</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            teacher.map((teacher, index) => <tr key={teacher._id}>
                                <th>{index + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={teacher.photoURL} alt="" />
                                        </div>
                                    </div>
                                </th>
                                <td>{teacher.name}</td>
                                <td>{teacher.category}</td>
                                <td className="flex flex-col gap-1">
                                    <button
                                        onClick={() => handleApporveTeacher(teacher)}
                                        className="btn btn-ghost btn-sm">
                                        Approve
                                    </button>
                                    <button
                                        // onClick={() => handleRjectTeacher(teacher)}
                                        className="btn btn-ghost btn-sm">
                                        Reject
                                    </button>
                                    <button
                                        onClick={() => handleDeleteTeacher(teacher)}
                                        className="btn btn-error text-white btn-sm">
                                        Delete
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

export default TeacherRequest;