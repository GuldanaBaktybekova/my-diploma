import Header from "../components/Header/Header";
import image from "../assets/tech-with-style.jpeg";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { getProducts } from "../data/products";



function Cart() {
  const items = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  // dispath
  const products = getProducts();

  
  let total = 0;
  let output = products
    .filter(product => items[product.productId])
    .map(product => {
      total += product.price * items[product.productId];

      return (
        <div>
          <Link to="">{product.title}</Link> {items[product.productId]} ${product.price * items[product.productId]}

          <button onClick={() => dispatch({ type: "cart/decrement", payload: product.productId })}>-</button>
          <button onClick={() => dispatch({ type: "cart/increment", payload: product.productId })}>+</button>
          <button onClick={() => dispatch({ type: "cart/delete", payload: product.productId })}>Delete</button>
        </div>
      );
    });

  if (!output) {
    output = "No items in the cart.";
  }


  return (
    <>
      <Header
        title="Your Shopping Cart"
        image={image}>
        Please review items in your cart.
      </Header>
      <div>
        {output}
        <hr />
        Total: ${total}
      </div>
    </>
  );
}

export default Cart; 