
// import { BiTrash } from "react-icons/bi";
const DisplayToy = ({ Toys }) => {


    const { _id, Sname, name, subCategory, price, stock } = Toys;
    return (
        <div>
             <div className="overflow-x-auto ">
                <table className="table table-zebra"> 
                  
                    
                    <tbody   className='border border-b-black'>
                        {/* row 1 */}
                        <tr className='bg-base-300'>
                            <th>#</th>
                            <td>{Sname}</td>
                            <td>{name}</td>
                            <td>{subCategory}</td>
                            <td>{price}</td>
                            <td>{stock}</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default DisplayToy;