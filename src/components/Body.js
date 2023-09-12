import { useState } from "react";
import obj from "../utils/data";
import Card from "./Card";
export const Body=()=>{
    const [resList,SetresList]=useState(obj);
    return (
        <div className="res-container">
            <div className="Filter">
                <button className="filterButton" onClick={()=>{
                    const updatedList=obj.filter((item)=> item.rating>4);
                    SetresList(updatedList);
                }}>Top Rated Restaurants</button>
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