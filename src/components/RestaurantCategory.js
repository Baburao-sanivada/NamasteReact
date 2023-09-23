import ItemList from "./ItemList";

const RestaurantCategory=(props)=>{
    const {data}=props
    // console.log(data);
    const itemlength=data.itemCards?data.itemCards.length:null;
    return <div>
        {/* Header */}
        <div className="w-6/12 mx-auto my-2 shadow-lg bg-gray-50 m-4 p-4">
            <div className="flex justify-between ">
            <span className="font-bold text-lg">{data.title} ({itemlength})</span>
            <span>⬇️</span>
            </div>
            <ItemList items={data.itemCards}></ItemList>
        </div>
        {/* Accordion */}
    </div>
}
export default RestaurantCategory;