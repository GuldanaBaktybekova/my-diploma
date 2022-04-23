import Header from "../components/Header/Header";
import headerImage from "../assets/header.jpg";

function Home() {
  return (
    <>
      <Header title="Welcome to our fashion shop!" image={headerImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, quasi
        nulla, harum asperiores excepturi dolor corrupti repellat sed odio
        consequatur dolorem! Reprehenderit quas mollitia neque quaerat dolorem
        accusamus vel nobis!
      </Header>
    </>
  );
}

export default Home;
