import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ToysDetails from "../Layout/ToysDetails";
// import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/All Toys/AllToys";
import AddAtoy from "../pages/Add A Toy/AddAtoy";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
// import ToysDetail from "../pages/All Toys/ToysDetail";
// import ToyDetails from "../Layout/ToyDetails";
// import ToysDetail from "../pages/All Toys/ToysDetail";
// import ToyDetails from "../pages/All Toys/ToyDetails";
import ToysDetail from "../pages/All Toys/ToysDetail";
// import ToyDetails from "../Layout/ToyDetails";
// import ToyDetails from "../pages/All Toys/ToyDetails";



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
          path:'/details/:id',
          element:<PrivateRoute><ToysDetail></ToysDetail></PrivateRoute>,
          loader:({params})=>fetch(`https://h-nyama-hoard-server.vercel.app/AddAtoy/${params.id}`)
          
          

        },
        // {
        //   path:'/detail',
        //   element:<ToysDetail></ToysDetail>
          

        // },
        {
          path:'/blog',
          element:<Blog></Blog>
          

        },
        {
          path:'/Mytoys',
          element:<PrivateRoute> <MyToys></MyToys></PrivateRoute>
          
          

        },

      //   {
      //     path:'/DisplayToy/:id',
      //     element:<PrivateRoute><ToysDetail></ToysDetail> </PrivateRoute>,
         
      //     loader: ({params})=>fetch(`https://h-nyama-hoard-server.vercel.app/AddAtoy/${params.id}`),



      // },

      {
        path:'/Catagory/:id',
        element:<PrivateRoute><ToysDetails></ToysDetails> </PrivateRoute>,
       
        loader: ({params})=>fetch(`https://h-nyama-hoard-server.vercel.app/toy/${params.id}`),



    }

 
      ]
    },

  //   {
  //     path:'details',
  //     element:<ToyDetails></ToyDetails>,
  //     children:[
  //         {
  //             path:':id',
  //             element:<PrivateRoute><ToysDetail></ToysDetail> </PrivateRoute>,
         
  //             loader: ({params})=>fetch(`https://h-nyama-hoard-server.vercel.app/AddAtoy/${params.id}`),
             
  //             // loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)

  //         }
         
  //     ]
  // },
  ]);
  export default router;