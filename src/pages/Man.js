import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getProduct } from "../data/men";

function Product() {
  const params = useParams();
  const man = getProduct(params.productId);

  if (!man) {
    return null;
  }

  return (
    <>
      <Header
        title={man.title}
        image={man.image}>
        {man.description}
      </Header>
    </>
  );
}

export default Product;