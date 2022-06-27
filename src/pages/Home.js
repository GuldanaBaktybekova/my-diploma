import Header from "../components/Header/Header";
import headerImage from "../assets/tech-with-style.jpeg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Home() {
  return (
    <>
      <Header
        title="Discover new culinary possibilities with new technologies"
        image={headerImage}
      >
        Lorem, ipsum dolor sitamet consectetur
      </Header>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Home;
