import Item from "../Item"
import Flex from "../Flex/flex"
import product from "../../data/products"

function ItemDetail ({product}) {
    return (
      <Flex>
            <Item
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            img={product.img}
            />
                </Flex>
    )
}

export default ItemDetail

