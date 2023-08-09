// import Swal from 'sweetalert2'

import { Link } from "react-router-dom";


// import { useState } from "react";

// import { BiTrash } from "react-icons/bi";
const DisplayToy = ({ Toys }) => {



    const { _id, Sname, name, subCategory, price, stock } = Toys;


    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table table-zebra">


                    <tbody className='border border-b-black'>

                        <tr className='bg-base-300 '>
                            <th>#</th>
                            <td >{Sname}</td>
                            <td >{name}</td>
                            <td>{subCategory}</td>
                            <td>{price}</td>
                            <td>{stock}</td>
                            <td>
                            <Link to={`/detail/${_id}`}>
                                <button className="btn btn-error h-[50px] " >
                                    Details

                                </button></Link> 
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
           
           

        </div>
    );
};

export default DisplayToy;