import Header from "../components/Header/Header";
import headerImage from "../assets/lv2.jpg";


function Home() {
  return (
    <>
      <Header title="Welcome to our bag shop!" image={headerImage} >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, quasi
        nulla, harum asperiores excepturi dolor corrupti repellat sed odio
        consequatur dolorem! Reprehenderit quas mollitia neque quaerat dolorem
        accusamus vel nobis!
      </Header>
    </>
  );
}

export default Home;
