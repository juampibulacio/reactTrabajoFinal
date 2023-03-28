import React, { useState, useEffect } from "react";
import Flex from "../Flex/flex";
import Item from "../Item";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

function getSingleItem(idURL) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemRequested = products.find((item) => {
        return item.id === parseInt(idURL)
      })
      resolve(itemRequested);
    }, 1000);
  });

  return promesa;
}


function ItemDetailContainer () {
  const [product, setProduct] = useState([]);

  let {id} = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, []);

 
  return (
    <ItemDetail product={product} />
  );
}

export default ItemDetailContainer;