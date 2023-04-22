import React, { useState, useEffect } from "react";
import Item from "../Item";
import Flex from "../Flex/Flex";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getItems, getItemsByCategory } from "../../services/firestore";



function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {categoryid} = useParams();

  useEffect(() => {
    if (categoryid === undefined) {

   
    getItems().then((respuesta) => {
     
      setProducts(respuesta);
    });
  }
  else{
    getItemsByCategory(categoryid).then(
      (respuesta) => setProducts(respuesta)
    )

  }
  }, [categoryid],);


  if (products.length === 0) {
    return <Loader/>
  }

  return (
   
    <Flex>
      {products.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          title={producto.title}
          price={producto.price}
          img={producto.img}
          offer={producto.offer}
          stock={producto.stock}
        />
      ))}
    </Flex>
  );
}

export default ItemListContainer;