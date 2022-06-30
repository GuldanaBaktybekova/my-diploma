import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

// import { useDispatch } from "react-redux";/

function ProductItem({ product }) {
  // const dispatch = useDispatch();
  // function onAddToCart() {
  //   dispatch(add(productId));
  // }
  return (
    <div className={classes.ProductItem}>
      <Link to={"/products/" + product.productId}>
        {" "}
        <img src={product.image} alt={product.title} />{" "}
      </Link>
      <Link to={"/products/" + product.productId}>{product.title}</Link>
      <div className={classes.price}>${product.price}</div>
      {/* <button className={classes.cart} onClick={onAddToCart}>${product.cart}</button> */}
    </div>
  );
}

export default ProductItem;
