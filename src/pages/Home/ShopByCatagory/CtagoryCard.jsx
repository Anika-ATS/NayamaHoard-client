// import swal from 'sweetalert';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import useToy from '../../../Hook/useToy';

const CtagoryCard = ({toy}) => {
    // const[ToyData]=useToy();

    const { _id, picture, name, price,  Ratings ,SubCatagory} = toy;

    // const Dog=ToyData.filter(toy=>toy.SubCatagory==='DOG');
    // const Horse=ToyData.filter(toy=>toy.SubCatagory==='HORSE');
    // const TEDDYBEAR=ToyData.filter(toy=>toy.SubCatagory==='TEDDY BEAR');
  
    // const {TempCatagoryData}=ShopCatagory();
    // console.log(TempCatagoryData);
    // const {  Catagory } = toy;
    const [tabIndex, setTabIndex] = useState(0);
    // const catagory=['h1','h2','h3'];
    // const tatagory=['1','2','3'];


    // const categoryy = ["cat", "dog", "horse"];
    // const toy = [
    //     ["cat1", "cat2", "cat3"],
    //     ["dog1", "dog2", "dog3"],
    //     ["horse1", "horse2", "horse3"]

    // ];

    // let uniqueCatagory=[];
    // for (let toy of Catagory){

    //     if(!uniqueCatagory.includes(toy.Catagory)){
    //         uniqueCatagory.push(toy.Catagory)}
    // }

    return (

        <div >


            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SubCatagory:{SubCatagory}</Tab>
                    {/* <Tab>{Horse} </Tab>
                    <Tab>{TEDDYBEAR}</Tab> */}
                </TabList>
                <TabPanel>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={picture} alt="Shoes" className="w-1/2 h-50 hover:scale-75 hover:rotate-45" />

                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Name:{name}</h2>


                            <p>Price:{price}</p>

                            <p>Rating:{Ratings}</p>

                            <div className="card-actions">
                      
                                    
                                <Link to={`/Catagory/${_id}`}>
                                    

                                    <button className="btn btn-primary" >View Details</button>
                                </Link>


                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default CtagoryCard;