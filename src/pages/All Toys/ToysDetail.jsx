// import React, { useState } from 'react';
// import useToyData from "../../Hook/useToyData";
import ToyDetails from "./ToyDetails";

import NavBar from '../Shared/NavigationBar/NavBar';


const ToysDetail = () => {
    
    // const [ToysData]=useToyData();
   

    return (
        <div>
            <NavBar></NavBar>
{/* 
            <div>
            
            
            <div>
          
          <div className="hero min-h-screen  bg-base-200">
              <div className="hero-content  flex-col lg:flex-row-reverse">
                  <img src={url} className="max-w-sm rounded-lg shadow-2xl w-1/2" />
                  <div>
                      <h2 className="text-4xl font-bold">{name}</h2>
                      <p className="py-6">{Sname}</p>
                      <p className="py-6">{email}</p>
                      <p className="py-6">{subCategory}</p>
                      <p className="py-6">{price}</p>
                      <p className="py-6">{rating}</p>
                      <p className="py-6">{stock}</p>
                      <p className="py-6">{detail}</p>
 
                  
                  </div>
              </div>               
          </div>
        
          </div>
 
             
             
         </div> */}




            <ToyDetails></ToyDetails>

            {/* <DisplayToy></DisplayToy> */}
            {/* {ToysData.map(Toy=><ToyDetails

                    key={Toy._id}
                    Toy={Toy}                   

                    ></ToyDetails>)
                    } */}

            {/* {/* <ToysDetails></ToysDetails> */}
       
            
            
        </div>
    );
};

    

export default ToysDetail;