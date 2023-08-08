import { useContext, useEffect, useState } from 'react';
// import swal from 'sweetalert'
import NavBar from '../Shared/NavigationBar/NavBar';
import { AuthContext } from '../../Providers/AuthProviders';
import ToysRow from './ToysRow';
const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [MyToy, setMyToy] = useState([]);
    const url = `https://h-nyama-hoard-server.vercel.app/AddAtoy?email=${user.email}`;

    useEffect(() => {
        fetch(url)

            .then(res => res.json())
            .then(data => setMyToy(data))

            .catch(error => console.log(error))

    }, [url]);
    const  handleDelete =id=>{
        const proceed=confirm('Are you sure to delete toy? ');
        if(proceed)
        {
            fetch(`https://h-nyama-hoard-server.vercel.app/AddAtoy/${id}`,{method:'DELETE'})
      
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deleteCount >0)
                {
                    // swal("Toy deleted") ;
                    const UndeletedToy=MyToy.filter(MyToy =>Mytoy._id !==id);
                    setMyToy(UndeletedToy);
                }
            })
            
            
            .catch(error=>console.log(error))
        }



    }


    return (
        <div>
            <NavBar></NavBar>
            <div className="overflow-x-auto w-full mb-24">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Toy Img</th>
                            <th>Toy Name</th>
                            
                            <th>Seller Name</th>
                            <th>Email</th>
                            <th>Sub-Catagory</th>
                            <th>Price</th>
                            <th>Available quantity</th>
                            <th>Rating</th>
                            <th>Detail description</th>                         
                            <th></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    {
                    MyToy.map(Mytoy=><ToysRow
                    key={Mytoy._id}
                    Mytoy={Mytoy}
                    handleDelete={handleDelete}
                    >
                        
                    </ToysRow>
                
                    
                )
                }
                    </tbody>
                    </table>
                 

               

        </div>
        </div>
    );
};

export default MyToys;