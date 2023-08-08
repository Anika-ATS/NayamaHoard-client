import swal from 'sweetalert';
import NavBar from "../Shared/NavigationBar/NavBar";

const AddAtoy = () => {

    const handleOnSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        
        const name=form.name.value;
        const url=form.url.value;
        const Sname=form.Sname.value;
        const email=form.email.value;
        const subCategory=form.subCategory.value;
        const price=form.price.value;
        const rating=form.rating.value;      
        const stock=form.stock.value;
        const detail=form.detail.value;
        const add={
            Sname,
            name,
            email,
            url,
            subCategory,
            price,
            stock,rating,detail

        }
        // console.log(Sname,name,email, url,subCategory,price,stock,rating);
    
       console.log(add);
       fetch('https://nyama-hoard-server.vercel.app/AddAtoy',{
           method:'POST',
           headers:{
              'content-type':'application/json'
           },
           body:JSON.stringify(add)
       })
       .then(res=>res.json())
            .then(data=> {
                console.log(data);
                if(data.insertedId)
                {
                    swal("Good job!", "You Added a data successfully!", "success", {
                        button: "Aww yiss!",
                      });
                    // alert('data added');
                }

            })
            
   
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="bg-base-300 h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <h1 className='mt-5 pt-3  text-center text-base-300 text-bold text-4xl hover:opacity-75 hover:bg-base-800 mb-5'>Add A Toy </h1></div>
             
            <form onSubmit={handleOnSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  " >
            
                
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" placeholder="toy name" name='name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Photo URL</span>
                    </label>
                    <input type="file"  placeholder="Photo" name='url' className="input input-bordered pt-2" />
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