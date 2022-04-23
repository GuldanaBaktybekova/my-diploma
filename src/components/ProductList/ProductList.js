import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductList.module.css";

function ProductList({ men }) {
  const productItems = men.map(man => (
    <ProductItem key={man.manId} man={man} />
  ));

  return (
    <div className={classes.ProductList}>
      {productItems}
    </div>
  );
}

export default ProductList;