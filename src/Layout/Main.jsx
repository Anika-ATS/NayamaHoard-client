import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
// import NavBar from "../pages/Shared/NavigationBar/NavBar";
// import SideBar from "../pages/SideNavBar/SideBar";


const Main = () => {
    return (
        <div>
            {/* <NavBar></NavBar> */}

            {/* <SideBar></SideBar> */}
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;