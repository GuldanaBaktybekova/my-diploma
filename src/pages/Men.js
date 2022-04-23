import Header from "../components/Header/Header";
import headerImage from "../assets/header2.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/men";

function Men() {
  return (
    <>
      <Header
        title="Pick your type of coffee!"
        image={headerImage}>
        The fruits; cherries or berries, most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry".
      </Header>

      <ProductList men={getProducts()} />
    </>
  );
}

export default Men;
  