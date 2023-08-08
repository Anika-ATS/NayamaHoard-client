import React from 'react';
// import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { AuthContext } from "../Providers/AuthProviders";

const useToyData = () => {

    // const { user } = useContext(AuthContext);
    const [ToysData, setToysData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const url = `https://h-nyama-hoard-server.vercel.app/AddAtoy`;

    useEffect(() => {
        fetch(url)

            .then(res => res.json())
            .then(data =>{ setToysData(data)
            ,   setLoading(false)})

            .catch(error => console.log(error))

    }, [url]);
   
    
        
     
           
     return [ToysData,loading]
        
        
 
            
       
 
};

export default useToyData;