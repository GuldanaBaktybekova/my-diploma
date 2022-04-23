

import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {
  return (
    <>
      {/* <Header
        title="Pick your type of coffee!"
        >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, quasi nulla, harum asperiores excepturi dolor corrupti repellat sed odio consequatur dolorem! Reprehenderit quas mollitia neque quaerat dolorem accusamus vel nobis!
      </Header> */}

      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;