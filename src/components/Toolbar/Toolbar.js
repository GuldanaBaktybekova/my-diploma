import InputSearch from "../InputSearch/InputSearch";
import Nav from "../Nav/Nav";
import NavToggle from "../Nav/NavToggle/NavToggle";
import NavIcon from "../NavIcon/NavIcon";
import Logo from "../ui/Logo/Logo";
import classes from "./Toolbar.module.css";

function Toolbar({ toggleDrawer }) {
  return (
    <nav className={classes.Toolbar}>
      <div className={classes.container}>
        <div className={classes.nav1}>
          <InputSearch />

          <Logo />
          <NavIcon />
        </div>
        <Nav />
        <NavToggle callback={toggleDrawer} />
      </div>
    </nav>
  );
}

export default Toolbar;
