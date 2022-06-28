import CartLink from "../CartLink/CartLink";
import Nav from "../Nav/Nav";

import NavToggle from "../Nav/NavToggle/NavToggle";
import SignOutItem from "../SignOut/SignOutItem";

import Logo from "../ui/Logo/Logo";
import classes from "./Toolbar.module.css";

function Toolbar({ toggleDrawer }) {
  return (
    <nav className={classes.Toolbar}>
      <div className={classes.container}>
        <div className={classes.nav1}>
          {/* <p> &nbsp;</p> */}
          <SignOutItem />

          <Logo />
          <CartLink />
        </div>
        <div className={classes.nav2}>
          {" "}
          <Nav />
        </div>
        <NavToggle callback={toggleDrawer} />
      </div>
    </nav>
  );
}

export default Toolbar;
