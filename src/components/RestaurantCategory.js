import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems})=>{
   
    const itemlength=data.itemCards?data.itemCards.length:null;

    const handleClick=()=>{
        // setShowItems(!showItems);
    }
    return <div>
        {/* Header */}
        <div className="w-6/12 mx-auto my-2 shadow-lg bg-gray-50 m-4 p-4">
            <div className="flex justify-between" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({itemlength})</span>
            <span>⬇️</span>
            </div>
            {  
                showItems && <ItemList items={data.itemCards}></ItemList>
            }
        </div>
        {/* Accordion */}
    </div>
}
export default RestaurantCategory;