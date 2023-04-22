import React, {useContext, useState} from "react";
import { cartContext } from "../../context/cartContext";
import Flex from "../Flex/Flex";
import { createOrder } from "../../services/firestore";
import swal from "sweetalert";
import { Link } from "react-router-dom";

function CartContainer() {
    const context = useContext(cartContext)
    const {cart, getTotalPrice, removeItem} = context;



    /* rendering condicional: si el carrito está vacío mostrar un mensaje */
    /* mostrar el contenido del carrito */



async function handleCheckout() {
    const order = {
        items: cart,
        buyer: {name: "Juan"},
        total: getTotalPrice(), 
        date: new Date(),
    }
    const orderId = await createOrder(order);
    
    const orderComplete = await swal({
        title: "gracias por tu compra",
        text: "Tu compra se realizó correctamente. \n Tu número de compra es: \n " + orderId,
        icon: "success",
      });
   

    //clearCart()
    setInterval("location.reload()",500);
    
} 



    return (
        <Flex>
<div>
{cart.length < 1 && 
<div><h1> Tu Carrito está vacío </h1>
<h3>
      <Link to="/"> Ir a Inicio</Link>
</h3>
</div>
 }


{cart.length > 0 && ( <div>
    <h1>Tu carrito</h1>
    {
        cart.map( (item) => 
        <div>
         <h1> {item.title} </h1>
         <p>cantidad: {item.count} </p>
         <p>precio: ${((item.price)*(item.count)).toFixed(2)} </p>
         <button onClick={()=> removeItem(item.id)}> remover </button>
         {/* <button onClick={removeSingleItem}> remover uno</button> */}
         </div>
         ) 
     }
     <br />
 <span>El total de tu compra es: ${getTotalPrice()} </span>
 <br />
 <br />
 <button onClick={handleCheckout}> finalizar compra</button>
</div>  )  }

</div>
</Flex>
)
}

export default CartContainer; 