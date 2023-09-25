import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import {UserContext} from "../utils/UserContext";

const Header=()=>{
    const [btnName,setbtnName]=useState("Login");
    const onlinestatus=useOnlineStatus();
    const {user}=useContext(UserContext);
    return (
        <div className="flex justify-between mb-4 bg-green-100 shadow-lg">
            <div className="logo w-56"><img src={LOGO_URL}/></div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-2">OnlineStatus : {onlinestatus==true?"🟢":"🔴"}</li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/aboutus">About Us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2">Cart</li>
                    <li className="px-2"><Link to="/Grocery">Grocery</Link></li>
                    <button className="Login px-3" onClick={()=>{
                        btnName=="Login"?setbtnName("Logout"):setbtnName("Login");
                    }}>{btnName}</button>
                    <li className="px-2 font-bold">{user}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;