import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useToy = () => {
    
    const [ToyData, setToyData]=useState([]);
    const [loading, setLoading] = useState(true);
    const url=`https://h-nyama-hoard-server.vercel.app/toy`;
    useEffect(()=>{
        fetch(url)
      
        .then(res => res.json())
        .then(data =>{ setToyData(data)
        ,   setLoading(false)})

        .catch(error => console.log(error))

}, [url]);
        // const { user } = useContext(AuthContext);
        // const [ToysData, setToysData] = useState([]);
        // const [loading, setLoading] = useState(true);
        
        // const url = `https://h-nyama-hoard-server.vercel.app/AddAtoy`;
    
        // useEffect(() => {
        //     fetch(url)
    
        //         .then(res => res.json())
        //         .then(data =>{ setToysData(data)
        //         ,   setLoading(false)})
    
        //         .catch(error => console.log(error))
    
        // }, [url]);
       
        
            
         
               
         return [ToyData,loading]
            
      
    
};

export default useToy;