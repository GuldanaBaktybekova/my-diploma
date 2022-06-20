import "./Footer.css";
import FooterIcon from "./FooterIcon";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div>KitchenTech 2022</div>
        <p>
          KitchenTech- Via Leonardo da Vinci,<br></br> 4 42016 Guastalla  Italy<br></br> Phone
          +39 0522 821 1 Fax +77 7777 77 77 
        </p>
        <div>
          <FooterIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
