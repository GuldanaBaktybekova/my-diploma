import { Link } from "react-router-dom";
import classes from "./MProductItem.module.css";

function MProductItem({ mproduct }) {
  return (
    <div className={classes.MProductItem}>
      <img src={mproduct.image} alt="img" />
      <Link to={"/men/" + mproduct.mproductId}>{mproduct.title}</Link>
      <div className={classes.price}>${mproduct.price}</div>
    </div>
  );
}

export default MProductItem;