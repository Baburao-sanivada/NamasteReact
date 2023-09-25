import { CARD_URL } from "../utils/constants";
const ItemList=({items})=>{
    if(!items) return (<div>No Data</div>)
    // console.log(items);
    return (<div>
        {
            items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 text-left border-gray-200 border-b-2 flex">
                    <div>
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price/100}</span>
                    </div>
                    <p className="text-xs">Paneer Tikka (4 Pcs),Tandoori Chicken (4 Pcs),Tangdi Kabab (2 Pcs),Murgh malai kabab (4 Pcs),Sheek Kabab Mutton (4 Pcs),Ajwaini Fish Tikka (4 Pcs),Tandoori Prawns (4 Pcs)</p>
                    </div>
                    <img src={CARD_URL+item.card.info.imageId} className="w-24 ml-4"/>
                </div>
            )
            )
        }   
    </div>)
}
export default ItemList;