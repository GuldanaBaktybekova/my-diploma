import { useSelector } from "react-redux";
import { getProducts } from "../../data/products";
import classes from "./CartDisplay.module.css";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

function CartDisplay({ actions }) {
  const items = useSelector(store => store.cart.items);
  const products = getProducts();

  let total = 0;
  let output = products
    .filter(product => items[product.productId])
    .map(product => {
      total += product.price * items[product.productId];

      return (
        <CartItem
          product={product}
          quantity={items[product.productId]}
          key={product.productId}
          actions={actions} />
      );
    });

  if (!output.length) {
    output = "No items in the cart.";
  }

  return (
    <div class={classes.CartDisplay}>
      {output}
    
      <div className={classes.total}>Total: ${total}</div>
      <Link to="/checkout">
        Checkout
      </Link>
    </div>
  );
}

export default CartDisplay; 