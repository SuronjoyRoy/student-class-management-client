import {createBrowserRouter} from "react-router-dom";
import MainLaout from "../layout/MainLaout/MainLaout";
import Home from "../pages/Home/Home/Home";
import AllClassess from "../pages/All Classes/AllClassess";
import TeachOn from "../pages/Teach on/TeachOn";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secrect from "../shared/Secrect/Secrect";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLaout></MainLaout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'allclassess',
          element:<AllClassess></AllClassess>
        },
        {
          path:'teachon',
          element:<TeachOn></TeachOn>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secrect',
          element:<PrivateRoute><Secrect></Secrect></PrivateRoute>
        }
      ]
    },
  ]);


