import logo from '../../../assets/img/logo.webp'

const NavBar = () => {
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                                    <li><a>All Toys</a></li>
                                    <li><a>My Toys</a></li>
                                    <li><a>Add A Toy</a></li>
                                    <li><a>Blogs</a></li>
                                    <li><a>Profile</a></li>
                                    <li><a>LogIn</a></li>
                                    <li><a>LogOut</a></li>
                    </ul>
                </div>
                <div className='flex justify-between '>
                               <img className='w-14 h-14 p-2 space-x-3 rounded-full  '
                                src={logo} alt="" />
                               
                                <a className="btn btn-ghost py-2 normal-case text-purple-800">
                                    <span className='text-lg '>Nyama Hoard</span>
                                </a>
                            </div>

                {/* <a className="btn btn-ghost normal-case text-xl">Nyama Hoard</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                                    <li><a>All Toys</a></li>
                                    <li><a>My Toys</a></li>
                                    <li><a>Add A Toy</a></li>
                                    <li><a>Blogs</a></li>
                                    <li><a>Profile</a></li>
                                    
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
      
    );
};

export default NavBar;