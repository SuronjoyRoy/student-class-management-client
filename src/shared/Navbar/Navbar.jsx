
import { Link } from "react-router-dom";
import logo from '../../assets/logo/logo (1).png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allclassess">All Classes</Link></li>
        <li><Link to="/teachon">Teach on Coursector</Link></li>
    </>
    return (
        <>
            <div className="navbar py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div>
                        <img className="hidden lg:flex mb-4 ml-7" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end mr-5">
                  
                    {
                        user?.email ? <>
                            <div className="dropdown dropdown-end md:mr-5 z-[10]">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu menu-sm p-2 shadow bg-[#120a2e] text-white rounded-box w-52 text-center">
                                <span className="py-1">{user?.displayName}</span>
                                <span><Link to='/dashboard'>Dashboard</Link></span>
                                <span><button onClick={handleLogOut} className="btn btn-ghost">Log Out</button></span>
                                </ul>
                            </div>

                        </> : <>
                            <Link to="/login">Login</Link>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;