import Item from "../Item"
import Flex from "../Flex/flex"


function ItemList ({products}) {
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
             )}

                export default ItemList