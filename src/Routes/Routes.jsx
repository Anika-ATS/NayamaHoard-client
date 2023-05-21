import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ToysDetails from "../Layout/ToysDetails";
// import PrivateRoute from "./PrivateRoute";
// import PrivateRoutes from '../Routes/PrivateRoutes';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'login',
            element:<Login></Login>

        },
        {
            path:'register',
            element:<Register></Register>

        },
        {
          path:'/Catagory/:id',
          element:<ToysDetails></ToysDetails>,
         
          loader: ({params})=>fetch(`http://localhost:5000/toys/${params.id}`),



      }
 
      ]
    },
  ]);
  export default router;