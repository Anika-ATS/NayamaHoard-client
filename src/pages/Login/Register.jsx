import { Link } from 'react-router-dom';
import register from '../../assets/img/register.jpg';
import NavBar from '../Shared/NavigationBar/NavBar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    //getting form value
    const handleSignUp= event =>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const photo=form.photo.value;
    const password=form.password.value;

   console.log(name,password,email);

    //create user
     createUser(email,password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser);
        })
        .catch(error=>{
            console.log(error);
        })
   }
    return (
        <div >
            <NavBar></NavBar>
            
            <div className="hero min-h-screen bg-base-200 ps-28 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <figure className="px-5 pt-5 w-1/2 h-1/2">
                        <img  src={register} alt="" className="rounded-xl" /></figure>
                        <h1 className="ps-5 text-xl font-bold">Have an account?<br/>You just click <Link className='link link:hover text-purple-800' to='/login'>Login</Link> for Sign-in!</h1>
                        
                    </div>
                    {/* onSubmit={handleOnSignUp()} */}
                    <form onSubmit={handleSignUp}>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="photo" name='photo' className="input input-bordered" />
                            </div>
                            
                            <div className="form-control mt-6">
                            <input  className="btn btn-primary"  type='submit'  value='Sign In' />
                                {/* <button className="btn btn-primary">Sign In</button> */}
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            
            
        </div>
    );
};

export default Register;