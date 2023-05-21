import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.webp';

const SideBar = () => {
    const ItemsSideBar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to=''>All Toys</Link></li>
        <li><Link to=''>My Toys</Link></li>
        <li><Link to=''>Add A Toy</Link></li>
        <li><Link to=''>Blogs</Link></li>
        <li><Link to=''>Profile</Link></li>
        </>
    return (
        <div className="flex">
            <div className="flex flex-col h-full p-3 bg-base-300 shadow w-60">

                <div className="space-y-3">
                    <div className="flex items-center">
                        <div className="navbar-start">
                            {/* hide Menu */}
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                   
                                    
                                    {ItemsSideBar}
                                    <li><a>LogIn</a></li>
                                    
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
                        {/* <h2 className="text-xl font-bold text-black">Dashboard</h2> */}
                    </div>
                    {/* seaarch bar */}
                    {/* <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                        />
                    </div> */}
                    <div className="flex-1 ">
                        <ul className="pt-8 pb-5 space-y-1 text-sm">
                            <li className="rounded-sm bg-base-100">
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
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md bg-black mb-5"
                                >

                                    <span className="text-purple-300">My Toys</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md bg-black mb-5"
                                >

                                    <span className="text-purple-300">Add A Toy</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md bg-black mb-5"
                                >

                                    <span className="text-purple-300">Blogs</span>

                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a className="flex items-center p-2 space-x-3 rounded-md bg-black  mb-5 ">
                                    
                                    <span className="text-purple-300">Profile</span>
                                </a>
                            </li>
                            

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
                                    <span className="text-purple-300"><Link to='/login'>LogIn</Link> </span>
                                </a>
                            </li>
                            {/* <li className="rounded-sm bg-base-300">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md bg-black"
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
                                    <span className="text-purple-300">Logout</span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="container mx-auto mt-12">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total users
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            12,00
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Profit
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            $ 450k
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Orders
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            20k
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default SideBar;