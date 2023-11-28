import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

import { useParams } from 'react-router-dom';
import useUpdateClass from "../../../hooks/useUpdateClass";

const Update = () => {
    
    const {id} = useParams();
    const [updateClass] = useUpdateClass(id);

    // console.log(id);
    // console.log(updateClass)

    const { name, title, email, category, Details, photoURL, price } = updateClass;

    // console.log(item);

    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleDeleteClass = event =>{
        const name = event.name;
        const email = event.email;
        const title = event.title;
        const category = event.category;
        const Details = event.Details;
        const photoURL = event.photoURL;
        const price = event.price;
        
        const updateClassInfo = {name,email,title,category,Details,photoURL,price}; 
        console.log(updateClassInfo);

        axiosSecure.delete(`/class/${id}`, updateClassInfo)
        .then(res => {
            console.log(res.data)
            if (res.data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your has been successfully deleted.',
                  'success'
                )
              }

        })
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit(handleDeleteClass)} className="card-body px-10">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input defaultValue={name} type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input 
                        defaultValue={email}
                        type="email" {...register("email",
                            { required: true })}
                        name="email"
                        placeholder="email"
                        className="input input-bordered" />

                    {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Images</span>
                    </label>
                    <input defaultValue={photoURL} type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Title</span>
                    </label>
                    <input defaultValue={title} type="text" {...register("title", { required: true })} placeholder="title" className="input input-bordered" />
                    {errors.title && <span className="text-red-600">title is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select defaultValue={category} className='border py-3 rounded-lg' {...register("category", { required: true })}>
                        <option value="Choose one class">Choose one class</option>
                        <option value="web development">web development</option>
                        <option value="Introduction to Algorithms">Algorithms</option>
                        <option value="Introduction to C++ for DSA">C++ for DSA</option>
                        <option value="Basic Data Structures">Data Structures</option>
                        <option value="OOP Python">OOP Python</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="graphic design">graphic design</option>
                        <option value="Problem-Solving">Problem-Solving</option>
                        <option value="digital marketing">digital marketing</option>
                        <option value="c programming">c programming </option>
                        <option value="software engineering">Software Engineering</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Price</span>
                    </label>
                    <input defaultValue={price} type="text" {...register("price", { required: true })} placeholder="price" className="input input-bordered" />
                    {errors.price && <span className="text-red-600">price is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    
                    <textarea defaultValue={Details} rows={6} className="border" {...register("Details", { required: true })} />
                    {errors.textarea && <span className="text-red-600">details is required</span>}
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Update Class" />
                </div>
            </form>
        </div>
    );
};

export default Update;