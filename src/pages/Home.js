import Header from "../components/Header/Header";
import headerImage from "../assets/headerbag.jpg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";




function Home() {
  return (
    <>
      <Header h3="Fashion bag" title1="Look" span1="Stylish" span="Be" title=" Stylish"  image={headerImage} >
        Lorem, ipsum dolor sitamet consectetur <br></br> adipisicing elit. Placeat, quasi
        
      </Header>
      <CategoryList categories={getCategories()}/>
    </>
  );
}

export default Home;


// https://www.mockplus.com/blog/post/website-header-design