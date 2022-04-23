import "./Nav.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <nav className="Nav">
       <div className="logo">
        {" "}
        <Logo />
      </div>
      <div className="container">
        <ul>
          <NavItem url="/">Home</NavItem>
          <NavItem url="/men">Men</NavItem>
          <NavItem url="/women">Women</NavItem>
          <NavItem url="/sport">Sport</NavItem>
        </ul>
      </div>
     
    </nav>
  );
}

export default Nav;
