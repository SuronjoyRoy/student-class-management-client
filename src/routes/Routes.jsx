import {createBrowserRouter} from "react-router-dom";
import MainLaout from "../layout/MainLaout/MainLaout";
import Home from "../pages/Home/Home/Home";
import TeachOn from "../pages/Teach on/TeachOn";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secrect from "../shared/Secrect/Secrect";
import Dashboard from "../layout/Dashboard/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AdminTeacher from "../pages/Dashboard/AdminTeacher/AdminTeacher";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import TeacherRequest from "../pages/Dashboard/TeacherRequest/TeacherRequest";
import AllClass from "../pages/Dashboard/AllClass/AllClass";
import AllClasses from "../pages/AllClasses/AllClasses";
import AddClass from "../pages/Dashboard/AddClass/AddClass";




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
          element:<AllClasses></AllClasses>
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
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'adminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'teacherRequest',
          element:<TeacherRequest></TeacherRequest>
        },
        {
          path:'adminTeacher',
          element:<AdminTeacher></AdminTeacher>
        },
        {
          path:'users',
          element:<AllUsers></AllUsers>
        },
        {
          path:'allClasses',
          element:<AllClass></AllClass>
        },
        {
          path:'addclass',
          element:<AddClass></AddClass>
        }
      ]
    }
  ]);


