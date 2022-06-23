import Header from "../components/Header/Header";
import image from "../assets/galileo.jpeg";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { getProducts } from "../data/products";
import classes from "./Cart.module.css";

function Cart() {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  // dispath
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];

      return (
        <div className={classes.Cart}>
          <div className={classes.title}>
            <Link to="" className={classes.a}>
              {product.title}
            </Link>{" "}
            <span>{items[product.productId]}</span>{" "}
            <span>${product.price * items[product.productId]}</span>
          </div>
          <div className={classes.buttons}>
            <button
              onClick={() =>
                dispatch({ type: "cart/decrement", payload: product.productId })
              }
            >
              -
            </button>
            <button
              onClick={() =>
                dispatch({ type: "cart/increment", payload: product.productId })
              }
            >
              +
            </button>
            <button
              onClick={() =>
                dispatch({ type: "cart/delete", payload: product.productId })
              }
            >
              Delete
            </button>
          </div>
        </div>
      );
    });

  if (!output) {
    output = "No items in the cart.";
  }

  return (
    <div className={classes.Cart2}>
      <Header title="Your Shopping Cart" image={image}>
        Please review items in your cart.
      </Header>
      <div className={classes.output}>
        {output}
        <hr />
        <div className={classes.Total}>Total: ${total}</div>
      </div>
    </div>
  );
}

export default Cart;
