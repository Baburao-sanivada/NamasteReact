import React  from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Error from "./components/Error";
import Contact from "./components/Contact";



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
                element:<Aboutus/>
            },
            {
                path:"/Contact",
                element:<Contact/>
            }
        ],
        errorElement:<Error></Error>
    },
    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
