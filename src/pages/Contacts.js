import Header from "../components/Header/Header";
import headerImage from "../assets/contact.jpg";

function Contacts() {
  return (
    <>
      <div className="Contacts">
        <Header
          title="Contacts
        "
          image={headerImage}
        >
          Via Leonardo da Vinci,<br></br> 4 42016 Guastalla (RE), ITALY<br></br>{" "}
          Tel. +77 777 77 77
        </Header>
      </div>
    </>
  );
}

export default Contacts;
