import classes from "./ProductPage.module.css";
import CartButton from "../CartButton/CartButton";
import { getProduct } from "../../data/products";
import { useParams } from "react-router-dom";
function ProductPage() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <div className={classes.ProductPage}>
      <div className={classes.container}>
        <div>
          <img src={product.image} alt="productImage" />
        </div>
        <div className={classes.section}>
          <h1>{product.title}</h1>
          <p className={classes.price}>Price: ${product.price}</p>
          <p>{product.description}</p>
          <CartButton productId={params.productId} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
