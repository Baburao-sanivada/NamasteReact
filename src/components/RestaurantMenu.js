import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import { Shimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    const {resId}=useParams();

    let ind=0;
    const resdata=useRestaurantMenu(resId);
    if(resdata.length==0) return <Shimmer/>;

    const resName=resdata.cards[0].card.card.info.name;
    const cuisines=resdata.cards[0].card.card.info.cuisines;
    const costForTwo=resdata.cards[0].card.card.info.costForTwoMessage;
    const MenuData=resdata.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    // console.log(resdata);
    const filteredData=resdata.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        return c?.card?.card?.["@type"].includes("ItemCategory")
        
    });
    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-6">{resName}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}-{costForTwo}</p>

            {/* Building Accordion */}
            {
                filteredData.map((category)=><RestaurantCategory data={category.card.card}/>)
            }

        </div>
    )
}

export default RestaurantMenu;