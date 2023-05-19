// import React from 'react';

import SideBar from "../../SideNavBar/SideBar";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            {/* <h2 className="">Hello home</h2> */}
            <div className="flex w-full">
                <SideBar></SideBar>
                
                <div className="grid  flex-grow ">
                    <Banner></Banner>
                </div>
            </div>
        </div>
    );
};

export default Home;