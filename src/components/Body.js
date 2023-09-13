import { useState } from "react";
import obj from "../utils/data";
import Card from "./Card";
export const Body=()=>{
    const [resList,SetresList]=useState(obj);
    return (
        <div className="res-container">
            <div className="Search">
                <input type="text" id="inputtext" placeholder="Select Restaurant"></input>
                <button className="filterButton" onClick={()=>{
                    console.log(document.getElementById("inputtext").value);
                    const updatedList=obj.filter((item)=> item.name==document.getElementById("inputtext").value);
                    SetresList(updatedList);
                }}>Search</button>
            </div>
            <div className="card-container">
            {
                resList.map((item)=><Card key={item.id} data={item}></Card>)
            }
            </div>
        </div>
    )
}

export default Body;