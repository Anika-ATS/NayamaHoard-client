import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.webp';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const SideBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const ItemsSideBar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Alltoys'>All Toys</Link></li>
        
        <li><Link to='/blog'>Blogs</Link></li>

        {user?.email ? <>
            
    
            <li><Link to='/AddAtoy'>Add A Toy</Link></li>
            <li><Link to='/Mytoys'>My Toys</Link></li>
            <li><button onClick={handleLogOut}>Log Out</button></li>

        </>

            : <li><Link to='/login'>LogIn</Link></li>}
    </>
    return (
        <div className="flex">
            <div className="flex flex-col h-full p-3 bg-base-300 shadow w-60">

                <div className="space-y-1">
                    <div className="flex items-center">
                        <div className="navbar-start">
                            {/* hide Menu */}
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                                    {ItemsSideBar}


                                </ul>
                            </div>
                            <div className='flex justify-between '>
                                <img className='w-14 h-14 p-2 space-x-3 rounded-full  '
                                    src={logo} alt="" />

                                <a className="btn btn-ghost py-2 normal-case text-purple-800">
                                    <span className='text-lg '>Nyama Hoard</span>
                                </a>
                            </div>

                        </div>

                    </div>

                    <div className="ps-10 navbar-center hidden lg:flex items-center ">
                        <ul className="pt-8 pb-5 space-y-1 text-sm">
                            <li className="rounded-sm bg-base-100 ">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md bg-black mb-5"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    <span className="text-purple-300"><Link to='/'>Home</Link></span>
                                </a>
                            </li>
                            <li className="rounded-sm ">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md bg-black mb-5"
                                >

                                    <span className="text-purple-300"><Link to='/Alltoys'>All Toys</Link></span>
                                </a>
                            </li>
                            {user?.email && <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md bg-black mb-5"
                                >

                                    <span className="text-purple-300"><Link to='/Mytoys'>My Toys</Link></span>
                                </a>
                            </li>}
                            {user?.email &&<li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md bg-black mb-5"
                                >

                                    <span className="text-purple-300">
                                     <Link to='/AddAtoy'>Add A Toy</Link> 
                                    </span>
                                </a>
                            </li>}
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md bg-black mb-5 w-40"
                                >

                                    <span className="text-purple-300"><Link to='/blog'>Blogs</Link> </span>

                                </a>
                            </li>
                            {/* <li className="rounded-sm">
                                <a className="flex items-center p-2 space-x-3 rounded-md bg-black  mb-5 "> */}
                            <div className="flex items-center p-2 space-x-3 rounded-md bg-base mb-5">
                            {user?.email && <Link>  <div className="avatar w-1/2 mt-2 pe-3">
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={''} />
                                    </div>
                                </div></Link>}
                            </div>
                            {/* </a>
                            </li> */}


                            <li className="rounded-sm bg-base-300">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md bg-black mb-5"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    <span className="text-purple-300">
                                        {/* <Link to='/login'>LogIn</Link>  */}
                                        {user?.email ? <li><button onClick={handleLogOut}>Log Out</button></li> : <li><Link to='/login'>LogIn</Link></li>}
                                    </span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SideBar;