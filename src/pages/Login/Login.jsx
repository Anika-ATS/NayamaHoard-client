import login from '../../assets/img/login.jpg';
import NavBar from '../Shared/NavigationBar/NavBar';

import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <figure className="px-5 pt-5 w-1/2 h-1/2">
                        <img  src={login} alt="" className="rounded-xl" /></figure>
                        <h1 className="ps-5 text-xl font-bold">Haven't Any account?<br/>You just click <Link className='link link:hover text-purple-800' to='/register'>Register</Link> to create one!</h1>
                        <p className="py-6">
                          
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div><button className="btn btn-outline btn-primary">Google Sign-in</button></div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;