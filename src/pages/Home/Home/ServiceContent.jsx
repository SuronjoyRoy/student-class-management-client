import React from 'react';

const ServiceContent = () => {
    return (
        <div>
            <div className='mx-auto my-6 text-center px-6 py-3 capitalize flex justify-start items-center flex-col gap-1'>
                <h1 className="text-3xl font-bold uppercase"> Our service </h1>
            </div>
            <div className='max-w-7xl mx-auto px-3 sm:px-8'>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                    <div className="card p-5 w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/pfLtQnB/Rectangle-2-2.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Introduction to C Programming</h2>
                            <p>C is a general-purpose high level language that was originally developed by Dennis</p>
                            
                        </div>
                    </div>
                    <div className="card p-5 w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/LQhbwTG/Rectangle-2-3.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Introduction to Algorithms</h2>
                            <p>A comprehensive update of the leading algorithms text, with new material on matchings in bipartite graphs.</p>
                            
                        </div>
                    </div>
                    <div className="card p-5 w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/34g0Bgk/Rectangle-2-4.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Introduction to C++ for DSA</h2>
                            <p>Anyone who wants to have a command over DSA with C++ can opt for this course and .</p>
                            
                        </div>
                    </div>
                    <div className="card p-5 w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/tHPMbQK/Rectangle-3.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Basic Data Structures</h2>
                            <p>Arrays, linked lists, stacks, queues, hash tables, trees, heaps, and graphs</p>
                            
                        </div>
                    </div>
                    <div className="card p-5 w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/qD4sMHn/Rectangle-2.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Introduction to OOP Python</h2>
                            <p>a programming paradigm that uses objects and classes in programming.</p>
                            
                        </div>
                    </div>
                    <div className="card p-5 w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/WPMLrTZ/Rectangle-2-5.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Software Engineering</h2>
                            <p>computer science, computer engineering, and software engineering.</p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceContent;