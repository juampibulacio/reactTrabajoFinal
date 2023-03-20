import React, {useState, useEffect}  from "react"
import Flex from "./Flex/flex"
import Item from "./Item"
import products from "../data/products";


function getItems() {
    const promesa = new Promise((resolve) => {
    
      setTimeout(() => {
          resolve(products);
      }, 2500);
    });
  
    return promesa;
  }





function ItemListContainer (props) {
    
    const [products, setProducts] = useState ([]);
    
    useEffect(
        () => {getItems().then((respuesta) => {
            console.log("promesa cumplida", respuesta);
            setProducts(respuesta)} );},
            []
    )
    

        return (

        
            <Flex>
            { products.map((producto) => (
            <Item
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            category={producto.category}
            img={producto.img}
                />))
            }
                </Flex>
               
    )
}

export default ItemListContainer 