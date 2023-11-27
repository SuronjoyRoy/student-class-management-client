
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublice';
import Swal from 'sweetalert2';

const TeachOn = () => {
const axiosPublic = useAxiosPublic();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    axiosPublic.post('/teacher', data)
    .then((res) => {
      if (res.data.insertedId) {
        console.log('created');
        reset(); 
        Swal.fire({
          title: "Teacher created",
          text: "Teacher created successfully!",
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

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        {/* <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div> */}
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
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
                <span className="label-text">Images</span>
              </label>
              <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
              {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Exprience</span>
              </label>
              <select className='border py-3 rounded-lg' {...register("expeience", { required: true })}>
                <option value="beginner">Beginner</option>
                <option value="experienced">experienced</option>
                <option value="proexpert">Pro expert</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input type="text" {...register("title", { required: true })} placeholder="title" className="input input-bordered" />
              {errors.title && <span className="text-red-600">title is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select className='border py-3 rounded-lg' {...register("category", { required: true })}>
                <option value="web development">web development,</option>
                <option value="graphic design">graphic design</option>
                <option value="digital marketing">digital marketing</option>
                <option value="c programming">c programming </option>
                <option value="software engineering">Software Engineering</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>


  );
};

export default TeachOn;