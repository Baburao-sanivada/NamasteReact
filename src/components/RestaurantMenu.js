import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import { Shimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{
    const {resId}=useParams();

    let ind=0;
    const resdata=useRestaurantMenu(resId);
    console.log("render"+ind++);
    if(resdata.length==0) return <Shimmer/>;

    const resName=resdata.cards[0].card.card.info.name;
    const cuisines=resdata.cards[0].card.card.info.cuisines;
    const costForTwo=resdata.cards[0].card.card.info.costForTwoMessage;
    const MenuData=resdata.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    // console.log(MenuData);

    return (
        <div className="Menu">
            <h1>{resName}</h1>
            <h3>{cuisines.join(", ")}-{costForTwo}</h3>
            <h2>Menu</h2>
            <ul>
                {MenuData.map((menuitem)=> <li key={menuitem.card.info.name}>{menuitem.card.info.name}-{menuitem.card.info.price/100}Rs</li>)}
            </ul>
        
        </div>
    )
}

export default RestaurantMenu;