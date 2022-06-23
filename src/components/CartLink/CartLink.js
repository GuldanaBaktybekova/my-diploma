import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cartImage from "../../assets/cart.jpg";
import classes from './CartLink.module.css';

export default function CartLink() {
  const number = useSelector(store => {
    return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
  });

  return (
    <div className={classes.CartLink}><NavLink to="/cart"><img src={cartImage} alt="cartImage"/><span>{number}</span></NavLink></div>
  );
}