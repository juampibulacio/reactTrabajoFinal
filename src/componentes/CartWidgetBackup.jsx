import { useContext } from "react";
import { cartContext, } from "../context/cartContext";

function CartWidget () {

    const {cart} = useContext(cartContext);
    

    return (
        <span role="img" aria-label="cart">🛒<span>
            
            {cart.length > 0 && (cart.length)}  
            
             
            </span></span>
    )
}

export default CartWidget 