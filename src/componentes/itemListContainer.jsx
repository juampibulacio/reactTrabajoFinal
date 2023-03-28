import React, {useState, useEffect}  from "react"
import Flex from "./Flex/flex"
import Item from "./Item"
import products from "../data/products";
import ItemList from "./ItemList/itemList";
import { useParams } from "react-router-dom";

function getItems() {
    const promesa = new Promise((resolve) => {
    
      setTimeout(() => {
          resolve(products);
      }, 2500);
    });
  
    return promesa;
  }


  function getItemsByCategory(categoryURL) {
    const promesa = new Promise((resolve) => {
    
      setTimeout(() => {
         const filtro = products.filter (item => item.category === categoryURL);
         resolve (filtro)
      }, 1000);
    });
  
    return promesa;
  }


function ItemListContainer (props) {
    
    const [products, setProducts] = useState ([]);

    const {categoryid} = useParams();
    
    useEffect( () => {
        if (categoryid === undefined) {
        getItems().then((respuesta) => {
            setProducts(respuesta)} );
        }
        else {
            getItemsByCategory(categoryid).then((respuesta) =>
            setProducts(respuesta)
            );
        }
        },   [] )
    

        return (
            <ItemList products={products}/>
    )
}

export default ItemListContainer 