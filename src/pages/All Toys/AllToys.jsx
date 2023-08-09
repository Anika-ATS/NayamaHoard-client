
import { useState } from 'react';
import useToyData from '../../Hook/useToyData';
import NavBar from '../Shared/NavigationBar/NavBar';
import DisplayToy from './DisplayToy';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const AllToys = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const [ToysData]=useToyData(); 
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <div>
            <NavBar></NavBar>
            <div className="mx-64 mb-5">
                <input
                    type="text"
                    placeholder="Search by Toy Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-80"
                />
            </div>

                    <div className="mt-10 mx-64 mb-28">
       
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
                                    <th>Details</th>
                            
                                </tr>
                            </thead>
                            </table>
                        </div>
       

                        {ToysData.filter((toy) => toy.name.toLowerCase().includes(searchTerm.toLowerCase())).map(Toys=><DisplayToy

                            key={Toys._id}
                            Toys={Toys}   
                            data-aos="fade-up" 
                            data-aos-duration="1000"                
                        
                        ></DisplayToy>)
                        }

                   </div>
      </div> 
    );
};

export default AllToys;