import { useState,useEffect } from "react";
import obj from "../utils/data";
import Card from "./Card";
export const Body=()=>{
    const [resList,SetresList]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async () => {
        const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.5071128&lng=78.35791119999999");
        const json=await data.json();
        console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
        SetresList(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
    }
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
                resList.map((item)=><Card key={item.info.id} data={item}></Card>)
            }
            </div>
        </div>
    )
}

export default Body;