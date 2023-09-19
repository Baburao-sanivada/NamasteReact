import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const Header=()=>{
    const [btnName,setbtnName]=useState("Login");

    return (
        <div className="header">
            <div className="logo"><img src={LOGO_URL}/></div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="Login" onClick={()=>{
                        btnName=="Login"?setbtnName("Logout"):setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;