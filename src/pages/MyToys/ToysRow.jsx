// import React from 'react';
// onClick={() =>handleDelete(_id)}
const ToysRow = ({ Mytoy,handleDelete }) => {
    const {_id, Sname, name, email, url, subCategory, price, stock, rating, detail } = Mytoy;

    return (
        <div>
            {/* <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head }
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
                    <tbody> */}
                        {/* row 1 */}
                        <tr>                            
                            <td>
                    
                                <div className="avatar">
                                   <div className="rounded w-12 h-12">
                                      <img src={url} alt="" />
                                   </div>
                                </div>
                        
                    
                            </td>
                            <td><div>{name}</div></td>
                            <td>{Sname}</td>
                            <td>{email}</td>
                            <td>{subCategory}</td>
                            <td>{price}</td>
                            <td>{stock}</td>
                            <td>{rating}</td>
                            <td>{detail}</td>
             
                                <th>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                    <button className="btn btn-ghost btn-xs"onClick={() =>handleDelete(_id)} >Delete</button>
                                </th>
                        </tr>
                       
{/*                       
                       
                    </tbody>
                   

                </table>
            </div> */}

        </div>
    );
};

export default ToysRow;