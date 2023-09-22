import { useEffect,useState } from "react";
import { MENU_URL } from "./constants";


const useRestaurantMenu=(resId)=>{
    const [resInfo,setresInfo]=useState([]);

    //Api Call
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async ()=>{
        const data=await fetch(MENU_URL+resId);
        const json=await data.json();
        setresInfo(json.data);
    }
    return resInfo;
}
export default useRestaurantMenu;