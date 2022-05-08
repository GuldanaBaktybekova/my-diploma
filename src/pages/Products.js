
import productImage from "../assets/handbag6.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

import Header from "../components/Header/Header";

function Products() {
  return (
    <>
      <div className="Products">
      <Header title="Choose your essential accessory"  image={productImage} >
      

      </Header>
      </div>
      <ProductList products={getProducts()} />

    </>
  );
}

export default Products;

        // title="Pick your type of coffee!"
        // 
       