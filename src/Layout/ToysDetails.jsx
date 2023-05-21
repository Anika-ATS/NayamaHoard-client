import { useLoaderData } from "react-router-dom";
import NavBar from "../pages/Shared/NavigationBar/NavBar";
// import { useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


const ToysDetails = () => {
    const toys = useLoaderData();
    const { _id, picture1, name1, SellerName1, SellerEmail1, price1, Ratings1, Stock1, Description1, picture2, name2, SellerName2, SellerEmail2, price2, Ratings2, Stock2, Description } = toys;
    // const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <NavBar></NavBar>

            {/* <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>{name1}</Tab>
                    <Tab>{name2}</Tab>
                </TabList>
                <TabPanel> <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Name:{name1}</h1>
                        <p className="py-6">Seller Name:{SellerName1}</p>
                        <p className="py-6">Seller Email:{SellerEmail}</p>
                        <p className="py-6">Price:{price1}</p>
                        <p className="py-6">Rating:{Ratings1}</p>
                        <p className="py-6">Stock:{Stock1}</p>
                        <p className="py-6">Description:{Description1}</p>

                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>               
            </div></TabPanel>
                <TabPanel><div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture2} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Name:{name2}</h1>
                        <p className="py-6">Seller Name:{SellerName2}</p>
                        <p className="py-6">Seller Email:{SellerEmail2}</p>
                        <p className="py-6">Price:{price2}</p>
                        <p className="py-6">Rating:{Ratings2}</p>
                        <p className="py-6">Stock:{Stock2}</p>
                        <p className="py-6">Description:{Description}</p>

                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div></TabPanel>
            </Tabs> */}

           <div>
            {/* 1 */}
            <div className="hero min-h-screen  bg-base-200">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <img src={picture1} className="max-w-sm rounded-lg shadow-2xl w-1/2" />
                    <div>
                        <h2 className="text-4xl font-bold">Name:{name1}</h2>
                        <p className="py-6">Seller Name:{SellerName1}</p>
                        <p className="py-6">Seller Email:{SellerEmail1}</p>
                        <p className="py-6">Price:{price1}</p>
                        <p className="py-6">Rating:{Ratings1}</p>
                        <p className="py-6">Stock:{Stock1}</p>
                        <p className="py-6">Description:{Description1}</p>

                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>               
            </div>
            {/* 2 */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture2} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Name:{name2}</h1>
                        <p className="py-6">Seller Name:{SellerName2}</p>
                        <p className="py-6">Seller Email:{SellerEmail2}</p>
                        <p className="py-6">Price:{price2}</p>
                        <p className="py-6">Rating:{Ratings2}</p>
                        <p className="py-6">Stock:{Stock2}</p>
                        <p className="py-6">Description:{Description}</p>

                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default ToysDetails;