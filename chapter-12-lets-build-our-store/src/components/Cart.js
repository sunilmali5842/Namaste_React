import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import {clearCart} from "../utils/cartSlice"

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    
    const dispatch = useDispatch();

    const clearCartItems = () => {
        dispatch(clearCart());
    }
    console.log(cartItems);

    return (
        <div className="container m-auto my-16">
                <h1 className="text-2xl text-center">CART -  {cartItems.length} Items</h1>

            <div className="flex flex-wrap justify-center">
            {
                cartItems.map((item) =>  (
                <FoodItem key={item.id} {...item} 
                 /> ))
            }
           
            </div>

            <div className="">
            <button className="bg-red-600 text-white p-3 m-5" onClick={() => clearCartItems()}>Clear Cart</button>
            </div>



               

        </div>

    );

};


export default Cart;