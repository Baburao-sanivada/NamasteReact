import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { AddItems, ClearCart } from "../utils/Store/CardSlice";


const Cart=()=>{
    const dispatch=useDispatch();
    const cartItems=useSelector((store)=>store.cart.items);

    return <div className="text-center m-4 p-4 m-auto">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button className="bg-black text-white py-2 px-4 rounded-lg m-2" onClick={()=>{
            dispatch(ClearCart());
        }}>Clear Cart</button>
        {cartItems.length===0 && <h1>Cart is Empty Please Add Items!!!</h1>}
        <div className="w-6/12 m-auto">
            <ItemList items={cartItems}></ItemList>
        </div>
    </div>
}
export default Cart;