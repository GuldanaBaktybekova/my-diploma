import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { checkout } from "../../redux/cartSlice";
import classes from "./CheckoutItem.module.css";
function CheckoutItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, localId } = useSelector(store => ({
    items: store.cart.items,
    localId: store.auth.localId
  }));

  useEffect(() => {
    if (!localId) {
      navigate('/auth');
    }
  }, [localId, navigate]);
  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(checkout({
      localId: localId,
      items: items,
      ...Object.fromEntries(formData.entries()),
    }));
    navigate("/");
  }
  return (
    <form className={classes.CheckoutItem} onSubmit={onCheckout}>
      <label>
        First name:
        <input type="text" name="firstName" required />
      </label>
      <label>
        Last name:
        <input type="text" name="lastName" required />
      </label>
      <label>
        Address:
        <input type="text" name="address" required />
      </label>
      <label>
        Phone:
        <input type="text" name="phone" required />
      </label>

      <button className={classes.order}>Complete the order</button>
    </form>
  );
}

export default CheckoutItem;
