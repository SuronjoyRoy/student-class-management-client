import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        axiosSecure.post('/class', data)
            .then((res) => {
                if (res.data.insertedId) {
                    console.log('created');
                    reset();
                    Swal.fire({
                        title: "Class added",
                        text: "Class created successfully!",
                        icon: "success",
                    });
                }
            })
            .catch((error) => {
                console.error('Error submitting application:', error);
                alert('An error occurred. Please try again later.');
            });

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body px-10">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Images</span>
                    </label>
                    <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Title</span>
                    </label>
                    <input type="text" {...register("title", { required: true })} placeholder="title" className="input input-bordered" />
                    {errors.title && <span className="text-red-600">title is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select className='border py-3 rounded-lg' {...register("category", { required: true })}>
                        <option value="choose">Choose one class</option>
                        <option value="web development">web development</option>
                        <option value="Introduction to Algorithms">Introduction to Algorithms</option>
                        <option value="Introduction to C++ for DSA">Introduction to C++ for DSA</option>
                        <option value="Basic Data Structures">Basic Data Structures</option>
                        <option value="graphic design">graphic design</option>
                        <option value="digital marketing">digital marketing</option>
                        <option value="c programming">c programming </option>
                        <option value="software engineering">Software Engineering</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Price</span>
                    </label>
                    <input type="text" {...register("price", { required: true })} placeholder="price" className="input input-bordered" />
                    {errors.price && <span className="text-red-600">price is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    {handleSubmit(onSubmit)}
                    <textarea rows={6} className="border" {...register("Details", { required: true })} />
                    {errors.textarea && <span className="text-red-600">details is required</span>}
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;