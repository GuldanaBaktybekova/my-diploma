
import productImage from "../assets/v-bag.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

import Header from "../components/Header/Header";

function Products() {
  return (
    <>
      <div className="Products">
      <Header image={productImage} >
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, quasi nulla, harum asperiores excepturi dolor corrupti repellat sed odio consequatur dolorem! Reprehenderit quas mollitia neque quaerat dolorem accusamus vel nobis!

      </Header>
      </div>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;

        // title="Pick your type of coffee!"
        // 
       