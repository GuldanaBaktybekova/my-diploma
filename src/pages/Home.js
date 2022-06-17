import Header from "../components/Header/Header";
import headerImage from "../assets/wallovens2.webp";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";
import Main from "../components/Main";
import "./pages.css"

function Home() {
  return (
    <>
      <Header
        title="Discover new culinary possibilities with new technologies"
        image={headerImage}
      >
        Lorem, ipsum dolor sitamet consectetur <br></br> adipisicing elit.
        Placeat, quasi
      </Header>
      <div className="refresh">
      
        <h1>REFRESH YOUR KITCHEN</h1>
      </div>

      <CategoryList categories={getCategories()} />
      <Main />

      
    </>
  );
}

export default Home;

// https://www.mockplus.com/blog/post/website-header-design
