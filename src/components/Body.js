import { useState,useEffect } from "react";
import obj from "../utils/data";
import Card from "./Card";
import { Shimmer } from "./Shimmer";


export const Body=()=>{
    const [resList,SetresList]=useState([]);

    useEffect(()=>{
        fetchData();
        console.log("UseEffect Rendered");
    },[]);

    const fetchData=async () => {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5071128&lng=78.35791119999999&collection=80441&tags=layout_CCS_Idli&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json=await data.json();
        console.log(json.data.cards.slice(3,));
        SetresList(json.data.cards.slice(3,));
    }
    
    //Conditional Rendering
    return resList.length===0?<Shimmer></Shimmer>: (
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
                resList.map((item)=><Card key={item.card.card.info.id} data={item}></Card>)
            }
            </div>
        </div>
    )
}

export default Body;