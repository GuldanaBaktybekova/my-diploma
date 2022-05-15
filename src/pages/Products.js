
import productImage from "../assets/bag000.png";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

import Header from "../components/Header/Header";

function Products() {
  return (
    <>
      <div className="Products">
      <Header title1="Choose"span1="your" span="essential"title="accessory" image={productImage} >
      

      </Header>
      </div>
      <ProductList products={getProducts()} />

    </>
  );
}

export default Products;

        // title="Pick your type of coffee!"
        // 
       