import React  from "react";
import {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Shimmer } from "./components/Shimmer";


const Grocery=lazy(()=>import("./components/Grocery"))

const Aboutus=lazy(()=>import("./components/Aboutus"));

const AppLayout=()=>{
    return (
        <div className="AppLayout">
            <Header></Header>
            <Outlet/>
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout></AppLayout>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/aboutus",
                element:<Suspense fallback={<Shimmer></Shimmer>}><Aboutus/></Suspense>

            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu></RestaurantMenu>

            },
            {
                path:"/Grocery",
                element:<Suspense fallback={<Shimmer></Shimmer>}><Grocery/></Suspense>

            }
        ],
        errorElement:<Error></Error>
    },
    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
