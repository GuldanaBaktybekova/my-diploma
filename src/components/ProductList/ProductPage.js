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
        <img src={product.image} alt="productImage" />
        <div>
          <h1>{product.title}</h1>
          <div className={classes.price}>Price: ${product.price}</div>
        </div>

        {product.description}
        <CartButton productId={params.productId} />
      </div>
    </div>
  );
}

export default ProductPage;
