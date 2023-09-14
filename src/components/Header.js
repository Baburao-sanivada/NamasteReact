import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";

const Header=()=>{
    const [btnName,setbtnName]=useState("Login");

    return (
        <div className="header">
            <div className="logo"><img src={LOGO_URL}/></div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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