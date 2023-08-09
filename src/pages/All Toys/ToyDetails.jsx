import  { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const details = useLoaderData();

const {_id, Sname, name, email, url, subCategory, price, stock, rating,detail } = details;
// console.log(_id, Sname, name, email, url, subCategory, price, stock, rating,detail )

    const [isModalOpen, setIsModalOpen] = useState(false);

//     // const openModal = () => {
//     //     setIsModalOpen(true);
//     // };

//     // const closeModal = () => {
//     //     setIsModalOpen(false);
//     // };
//     const Toys = useLoaderData();

//     const {_id, Sname, name, email, url, subCategory, price, stock, rating,detail } = Toys;

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // const openModal = () => {
//     //     setIsModalOpen(true);
//     // };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            

        { isModalOpen && (
                <div className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">Toy Details</h3>
                        <img src={url} alt="" />

                        <p className="">{Sname}</p>
                        <p className="">{name}</p>
                        <p className="">{email}</p>
                        <p className="">{ subCategory}</p>
                        <p className="">{stock}</p>
                        <p className="">{rating}</p>
                        <p className=""> {price}</p>
                        <p className="">{detail}</p>
                     
                        <div className="modal-action">
                            <button className="btn" onClick={closeModal}>Close</button>
                        </div>
                    </form>
                </div>
             )} 

            
            
        </div>
    );
};
export default ToyDetails;