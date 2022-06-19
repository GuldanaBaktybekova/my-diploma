
import productImage from "../assets/product-header.jpeg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

import Header from "../components/Header/Header";

function Products() {
  return (
    <>
      <div className="Products">
      <Header title="KitchenTech: Better Together" image={productImage} >
      Discover the ultimate in kitchen collaboration with showstopping suites of appliances designed to bring a cohesive and stylish look to your kitchen.

      </Header>
      </div>
      <ProductList products={getProducts()} />

    </>
  );
}

export default Products;

        // title="Pick your type of coffee!"
        // 
       