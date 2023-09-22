import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName,setbtnName]=useState("Login");
    const onlinestatus=useOnlineStatus();
    return (
        <div className="header">
            <div className="logo"><img src={LOGO_URL}/></div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li>OnlineStatus : {onlinestatus==true?"🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><Link to="/Grocery">Grocery</Link></li>
                    <button className="Login" onClick={()=>{
                        btnName=="Login"?setbtnName("Logout"):setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;