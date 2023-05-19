// import React from 'react';

import SideBar from "../../SideNavBar/SideBar";

const Home = () => {
    return (
        <div>
            {/* <h2 className="">Hello home</h2> */}
            <div className="flex w-full">
                <SideBar></SideBar>
                {/* <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"></div> */}
                {/* <div className="divider divider-horizontal">OR</div> */}
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
            </div>
        </div>
    );
};

export default Home;