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
        <li><Link to="/teachon">Teach on</Link></li>
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
                        <img className="hidden lg:flex mb-4" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="flex items-center gap-3">
                                <span className="mr-2">{user.displayName}</span>
                                <img className="rounded-full w-[40px]" src={user.photoURL} alt="" />
                            </div>
                            <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
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