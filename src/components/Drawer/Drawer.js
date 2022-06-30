import Nav from "../Nav/Nav";
import SignOutItem from "../SignOut/SignOutItem";
import Logo from "../ui/Logo/Logo";
import classes from "./Drawer.module.css";

function Drawer({ open, toggle }) {
  const classNames = [classes.Drawer];
  if (open) {
    classNames.push(classes.open);
  }

  return (
    <div className={classNames.join(" ")}>
      <div onClick={toggle} className={classes.backdrop}></div>
      <div className={classes.content}>
        <Logo />
        <Nav />
        <SignOutItem />
      </div>
    </div>
  );
}

export default Drawer;
