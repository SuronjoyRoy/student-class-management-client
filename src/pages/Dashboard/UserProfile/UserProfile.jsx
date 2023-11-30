import React from 'react';
import useProfile from '../../../hooks/useProfile';

const UserProfile = () => {
    const [profile] = useProfile();
    console.log(profile)
    return (
        <div>
            <div className="card w-96 bg-base-100 items-center shadow-xl">
                <div className='w-24 rounded-full'>
                <figure><img className='w-24 h-24 rounded-full' src={profile?.photoURL} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{profile?.role}</h2>
                    <p className="">{profile?.name}</p>
                    <p className="">{profile?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;