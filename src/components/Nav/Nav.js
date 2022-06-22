import classes from "./Nav.module.css";

import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <div className={classes.Nav}>
      <ul className={classes.menu}>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products">Products</NavItem>
        <NavItem url="/contacts">Contacts</NavItem>
      </ul>
    </div>
  );
}

export default Nav;
