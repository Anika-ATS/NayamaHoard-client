import {Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ToysDetails from "../Layout/ToysDetails";
// import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/All Toys/AllToys";
import AddAtoy from "../pages/Add A Toy/AddAtoy";
import MyToys from "../pages/MyToys/MyToys";



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
          path:'/Alltoys',
          element:<AllToys></AllToys>,
          

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
          path:'/AddAtoy',
          element:<AddAtoy></AddAtoy>,
          

        },
        {
          path:'/Mytoys',
          element:<MyToys></MyToys>,
          

        },

        {
          path:'/Catagory/:id',
          element:<ToysDetails></ToysDetails> ,
         
          loader: ({params})=>fetch(`http://localhost:5000/toy/${params.id}`),



      }
 
      ]
    },
  ]);
  export default router;