
import useToyData from '../../Hook/useToyData';
import NavBar from '../Shared/NavigationBar/NavBar';
import DisplayToy from './DisplayToy';

const AllToys = () => {

    const [ToysData]=useToyData();
    
    return (
        <div>
            <NavBar></NavBar>

                 <div className="mt-10 mx-60 mb-28">
       
                       <div className="overflow-x-auto ">
                        <table className="table table-zebra">
                        <thead  className='bg-base-300'>
                            <tr className='text-blue-950 '>
                                <th>No</th>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub Catagory</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                        
                            </tr>
                        </thead>
                        </table>
                    </div>
                        {ToysData.map(Toys=><DisplayToy

                            key={Toys._id}
                            Toys={Toys}
                        
                        
                        
                        
                        ></DisplayToy>)





                        }
        

                        
        
        



        </div>
      </div> 
    );
};

export default AllToys;