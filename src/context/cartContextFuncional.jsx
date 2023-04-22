import { createContext, useState } from 'react';
const cartContext = createContext ({default: "default"});  
  const Provider = cartContext.Provider;
  

  function CartProvider(props) {
    const [cart, setCart] = useState([]);

function addItem (product, count) {
    /* product.quantity = count;
    setCart(product) */

    /* const newCart = [...cart];
    newCart.push({... product,count})
    setCart(newCart); */

    const newCart = JSON.parse(JSON.stringify(cart))
            newCart.push({... product, count})
            setCart(newCart);
   
}


function getPriceInCart() {
     //cantidad * precio
    return 1999;
}


function getCountInCart() {
    let total = 0;
    cart.forEach();
    return 5;   
}

    return (
        <Provider value={{cart, addItem, getCountInCart, getPriceInCart}}>
           {props.children}
        </Provider>

    )
  }

  export {cartContext, CartProvider}