import { useState } from "react";
import ProductItem from "./ProductItem/ProductItem";


import classes from "./ProductList.module.css";

function ProductList({ products }) {
  const [search, setSearch] = useState("");
  const productItems = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .map((product) => (
      <ProductItem key={product.productId} product={product} />
    ));

  return (
    <>
     <input className={classes.search} type="text" value={search} onChange={({target})=> setSearch(target.value)} placeholder="Search" />
      <div className={classes.ProductList}>{productItems}</div>
    </>
  );
}
export default ProductList;
