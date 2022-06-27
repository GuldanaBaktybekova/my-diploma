import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment, remove } from "../../redux/cartSlice";
import classes from "./CartItem.module.css";

export default function CartItem({ product, actions, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className={classes.CartItem}>
      <div className={classes.image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={classes.text}>
        <div className={classes.title}>
          <Link to="">{product.title}</Link>
        </div>
        <div className={classes.quantity}>
        Amount:
          {actions ? (
            <button onClick={() => dispatch(decrement(product.productId))}>
              -
            </button>
          ) : null}
          {quantity}
          {actions ? (
            <button onClick={() => dispatch(increment(product.productId))}>
              +
            </button>
          ) : null}
        </div>
        <div className={classes.subtotal}>
          Price:
          ${product.price * quantity}
          <br></br>
          {actions ? (
            <button className={classes.delete} onClick={() => dispatch(remove(product.productId))}>
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </div>
   
  );
}
