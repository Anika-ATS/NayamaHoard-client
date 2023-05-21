// import { useLoaderData } from "react-router-dom";
import NavBar from '../Shared/NavigationBar/NavBar';
const AllToys = () => {
    // const toys = useLoaderData();
    // const { _id,name1,SellerName1,price1, Stock1, name2,SellerName2,price2,Stock2} = toys;
    
    return (
        <div><NavBar></NavBar>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub Catagory</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td></td>
                        <td></td>
                        <td>Horse</td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default AllToys;