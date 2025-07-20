import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    console.log(user)
    const navOptions = <>
        <li className="uppercase"><Link to={'/'}>Home</Link></li>
        <li className="uppercase"><Link to={'/menu'}>Our Menu</Link></li>
        <li className="uppercase"><Link to={'/order/salad'}>Order Food</Link></li>
        <li className="uppercase"><Link to={'secret'}>Secret</Link></li>
        {
            user ?
                <>
                <span>{user?.displayName}</span>
                    <li onClick={handleLogOut} className="uppercase"><button>Sign Out</button></li>
                </>
                :
                <>
                    <li className="uppercase"><Link to={'/login'}>Log In</Link></li>
                </>

        }
    </>
    return (
        <>
            <div className="navbar bg-base-100 fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;