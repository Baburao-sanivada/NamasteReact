import { CARD_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { AddItems } from "../utils/Store/CardSlice";

const ItemList=({items})=>{
    if(!items) return (<div>No Data</div>)

    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        dispatch(AddItems(item));
    }
    return (<div>
        {
            items.map((item)=>(
                <div data-testid="fooditems" 
                key={item.card.info.id} className="p-2 m-2 text-left border-gray-200 border-b-2 flex justify-between">
                    <div>
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price/100}</span>
                    </div>
                    <p className="text-xs">Paneer Tikka (4 Pcs),Tandoori Chicken (4 Pcs),Tangdi Kabab (2 Pcs),Murgh malai kabab (4 Pcs),Sheek Kabab Mutton (4 Pcs),Ajwaini Fish Tikka (4 Pcs),Tandoori Prawns (4 Pcs)</p>
                    </div>
                    <div>
                    <button className="font-bold absolute bg-white ml-10" onClick={()=>handleAddItem(item)}>- Add +</button>
                    <img src={CARD_URL+item.card.info.imageId} className="w-[200px] ml-4"/>
                    
                    </div>
                    
                </div>
            )
            )
        }   
    </div>)
}
export default ItemList;