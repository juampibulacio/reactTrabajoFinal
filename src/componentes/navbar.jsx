import "./navbar.css"
import CartWidget from "./cartWidget"

function Navbar () {
return (
    <div className="container">
<div className="logo">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IUmlY8D28JgP1l0oKZ-oBvgY-eh1iv7HJg&usqp=CAU" alt="" width="130"/>
  </div>
<nav>
  <ul>
  <li>Home</li>
  <li>Novedades</li>
  <li>Ofertas</li>
  <li>Promociones</li>
  <li> <CartWidget/> </li> 
  </ul>
  </nav>
</div>

)

}

export default Navbar