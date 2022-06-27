import "./Footer.css";
import FooterIcon from "./FooterIcon";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="footerLogo">KitchenTech 2022</div>
        <div className="text">
          <Link to="/contacts">Contact</Link>
          <p>
            KitchenTech- Via Leonardo da Vinci,<br></br> 4 42016 Guastalla Italy
            <br></br> Phone +39 0522 821 1 Fax +77 7777 77 77
          </p>
          <div className="footerIcon">
            <FooterIcon />
          </div>
        </div>
        <div className="empty"></div>
      </div>
    </footer>
  );
}

export default Footer;
