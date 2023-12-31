// import React from 'react';
// onClick={() =>handleDelete(_id)}
const ToysRow = ({ Mytoy,handleDelete }) => {
    const {_id, Sname, name, email, url, subCategory, price, stock, rating, detail } = Mytoy;

    return (
        <div>
             <div>
                  <div className="overflow-x-auto ">
                   <table className="table table-zebra">


                    <tbody className='border border-b-black'>

            
                        <tr>                            
                            <td>
                    
                                <div className="avatar">
                                   <div className="rounded w-12 h-12">
                                      <img src={url} alt="" />
                                   </div>
                                </div>
                        
                    
                            </td>
                            <td>{name}</td>
                            <td>{Sname}</td>
                            <td>{email}</td>
                            <td>{subCategory}</td>
                            <td>{price}</td>
                            <td>{stock}</td>
                            <td>{rating}</td>
                            <td>{detail}</td>
             
                            <td>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                    <button className="btn btn-ghost btn-xs"onClick={() =>handleDelete(_id)} >Delete</button>
                            </td>
                        </tr>
                        </tbody >
                        </table>
                       


        
        
       
       
        </div>
        </div>
        </div>
    );
};

export default ToysRow;