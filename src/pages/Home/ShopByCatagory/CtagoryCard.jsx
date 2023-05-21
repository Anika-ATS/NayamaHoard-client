
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const CtagoryCard = ({toys}) => {
    const {_id,picture1,picture2,name1,name2,price1,price2,Ratings1,Ratings2}=toys;
    const [tabIndex, setTabIndex] = useState(0);
    return (
         
        <div >
        <Tabs   selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>{name1}</Tab>
          <Tab>{name2}</Tab>
        </TabList>
        <TabPanel><div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture1} alt="Shoes" className="w-1/2 h-50 hover:scale-75 hover:rotate-45"   />
                
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name:{name1}</h2>
                

                <p>Price:{price1}</p>
                
                <p>Rating:{Ratings1}</p>
                
                <div className="card-actions">
                    <Link to={`/Catagory/${_id}`}>
                      <button className="btn btn-primary">View Details</button>
                    </Link>
                    
                   
                </div>
            </div>
        </div>
        </TabPanel>
        {/* 2nd */}
        <TabPanel><div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture2} alt="Shoes" className="w-1/2 h-50 hover:scale-75 hover:rotate-45"  />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name:{name2}</h2>
                <p>Price:{price2}</p>
                <p>Rating:{Ratings2}</p>
                <div className="card-actions">
                    <Link to={`/Catagory/${_id}`}>
                      <button className="btn btn-primary">View Details</button>
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