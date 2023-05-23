// import { Link } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";
import NavBar from "../Shared/NavigationBar/NavBar";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProviders";


const AddAtoy = () => {
    // const toy = useLoaderData();
    // const{_id}=toy;

    // const {user}=useContext(AuthContext);




    const handleOnSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        
        const name=form.name.value;
        const photo=form.url.value;
        const Sname=form.Sname.value;
        const email=form.email.value;
        
        
        const subCategory=form.subCategory.value;
        const price=form.price.value;
        const rating=form.rating.value;      
        const stock=form.stock.value;
        const add={
            CustomerName:Sname,
            name,
            subCategory,
            price,
            stock
            // toy:_id
            

        }
    
       console.log(add);}
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='mt-5  text-center text-purple-800 text-bold text-4xl hover:opacity-75 hover:bg-base-800 '>Add A Toy </h1>
             
            <form onSubmit={handleOnSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 " >
            
                
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" placeholder="toy name" name='name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo" name='photo' className="input input-bordered" />
                </div>
                
                

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" placeholder="Name" name='Sname' className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="text" placeholder="Email" name='email'  className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text">Sub-category</span>
                        
                    </label>
                    <input type="text" placeholder="Sub-category" name='subCategory' className="input input-bordered" />
                    
                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Price" name='price' className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" placeholder="Rating" name='rating' className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <input type="text" placeholder="Stock" name='stock' className="input input-bordered" />

                </div>
                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" placeholder="detail" name='detail' className="input input-bordered" />

                </div>

                <div className="form-control mt-8 w-36">

                    <input className="btn btn-primary btn-block"  type='submit' value='Add a Toy' />
                </div>
            </div>
           
            </form>
        </div>

    );
};

export default AddAtoy;