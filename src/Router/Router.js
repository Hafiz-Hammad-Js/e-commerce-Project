import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


// files //
import Home from "../MainRunFolder/Home";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import DetailPage from "../Components/DetailPage/DetailPage";
import BuyNow from "../Components/BuyNow/BuyNow";
import PlaceOrder from "../Components/PlaceOder/PlaceOrder";
import ContactUs from "../Components/PlaceOder/ContactUs/Contact";
import About from "../Components/About/About";
import RegisterPage from "../Components/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/Detail",
                element: <DetailPage />,
            },
            {
                path: "/BuyNow",
                element: <BuyNow />,
            },
            {
                path: "/PlaceOrder",
                element: <PlaceOrder/>,
            },
            {
                path: "/contact",
                element: <ContactUs/>,
            },
            {
                path: "/About",
                element: <About/>,
            },
            {
                path: "/register",
                element: <RegisterPage/>,
            },
        ]
    },
]);

function Layout() {
    return <>

        <Navbar/>
        <Outlet />
        <Footer/>
    </>
}



function Router (){

    return <RouterProvider router={router} />
}


export default Router;