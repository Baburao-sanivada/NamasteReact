import { useState,useEffect } from "react";
import obj from "../utils/data";
import Card from "./Card";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";


export const Body=()=>{
    const [ResList,SetResList]=useState([]);
    const [resList,SetresList]=useState([]);

    const [InputVal,setInputValue]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async () => {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5047744&lng=78.3799564&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json=await data.json();
        // console.log(json);
        SetresList(json.data.cards.slice(3,));
        SetResList(json.data.cards.slice(3,));
    }
  
    //Conditional Rendering
    return resList.length===0?<Shimmer></Shimmer>: (
        <div className="res-container">
            <div className="Search">
                <input type="text" id="inputtext" placeholder="Select Restaurant" value={InputVal} onChange={(e)=>{
                    setInputValue(e.target.value);
                }}></input>
                <button className="filterButton" onClick={()=>{
                    console.log(ResList);
                    const updatedList=ResList.filter((item)=>{
                        return item.card.card.info.name.toLowerCase().includes(InputVal.toLowerCase());
                    })
                    SetresList(updatedList);
                }}>Search</button>
            </div>
            <div className="card-container">
            {
                resList.map((item)=>
                <Link key={item.card.card.info.id} to={"/restaurant/"+item.card.card.info.id} ><Card data={item}></Card></Link>
                )
            }
            </div>
        </div>
    )
}

export default Body;