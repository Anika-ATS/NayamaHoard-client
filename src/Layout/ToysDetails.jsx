import { useLoaderData } from "react-router-dom";
import NavBar from "../pages/Shared/NavigationBar/NavBar";
// import { useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


const ToysDetails = () => {
    const toy = useLoaderData();
    
    const {_id,picture, name, SellerName, SellerEmail, price, Ratings, Stock, Description} = toy;
    
    return (
        <div>
            <NavBar></NavBar>

           

           <div>
         
            <div className="hero min-h-screen  bg-base-200">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl w-1/2" />
                    <div>
                        <h2 className="text-4xl font-bold">Name:{name}</h2>
                        <p className="py-6">Seller Name:{SellerName}</p>
                        <p className="py-6">Seller Email:{SellerEmail}</p>
                        <p className="py-6">Price:{price}</p>
                        <p className="py-6">Rating:{Ratings}</p>
                        <p className="py-6">Stock:{Stock}</p>
                        <p className="py-6">Description:{Description}</p>

                    
                    </div>
                </div>               
            </div>
          
            </div>

        </div>
    );
};

export default ToysDetails;