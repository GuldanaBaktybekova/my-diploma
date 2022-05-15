
import productImage from "../assets/bag000.png";
import CategoryList from "../components/CategoryList/CategoryList";


import Header from "../components/Header/Header";
import { getCategories } from "../data/categories";

function Categories() {
  return (
    <>
      <div className="Products">
      <Header  image={productImage} >
      

      </Header>
      </div>
      <CategoryList categories={getCategories()} />

    </>
  );
}

export default Categories;

      