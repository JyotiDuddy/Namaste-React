import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";



const Cart=()=>{
    // 
    const cartItems= useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const dispatch= useDispatch();
   function handleClearCart(){
       dispatch(clearCart())
   }


    return(
        <div className="text-center m-8 p-8">
              <h1 className="text-2xl font-bold">Cart</h1>
             
                  {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ItemList item={cartItems} />
      )}
 <button onClick={handleClearCart} className="bg-black p-4 text-white">Clear Cart </button>
        </div>
       
    )
}
export default Cart;