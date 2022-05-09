import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getProduct } from "../data/products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <div className="Product">
      <Header image={product.image} title={product.title}>
        <div className="price">${product.price}</div>
        <div className="color">{product.color}</div>

        {product.description}
      </Header>
    </div>
  );
}

export default Product;
