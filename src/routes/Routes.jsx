import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
import Dashboard from "../pages/dashboard/Dashboard";
import SelectedClasses from "../pages/dashboard/selected classes/SelectedClasses";
import PrivateRoutes from "./PrivateRoutes";
import EnrolledClasses from "../pages/dashboard/enrolled classes/EnrolledClasses";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/payment history/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      }



    ]
  },
  {

    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'selectedclasses',
        element: <PrivateRoutes><SelectedClasses></SelectedClasses></PrivateRoutes>
      },
      {
        path: 'enrolledclasses',
        element: <EnrolledClasses></EnrolledClasses>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymenthistory',
        element: <PaymentHistory></PaymentHistory>
      }
      
    ]
  }
]);

export default router;