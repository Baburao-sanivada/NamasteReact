import {useEffect, useState} from "react";

const UserCard=(props)=>{
    const [count]=useState(0);
    const [count2]=useState(1);
    useEffect(()=>{
        console.log("UseEffect");
        const timer=setInterval(()=>{
            console.log("hello");
        },1000);
        return ()=>{
            clearInterval(timer);
            console.log("Component Did Unmount");
        }
    },[count])
    return (
        <div className="user-card">
            <p>Name : {props.name}</p>
            <p>Location : {props.location}</p>
            <p>Role : Software Developer</p>
        </div>
    )
}
export default UserCard;