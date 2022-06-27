import Header from "../components/Header/Header";
import image from "../assets/galileo.jpeg";
// import { useDispatch, useSelector } from "react-redux";

// import { checkout } from "../redux/cartSlice";
// import { useNavigate } from "react-router-dom";

import CartDisplay from "../components/CartDisplay/CartDisplay";
import CheckoutItem from "../components/Checkout/CheckoutItem";

function Checkout() {
  return (
    <>
      <Header title="Checkout" image={image}>
        Please enter your information.
      </Header>
      <CartDisplay />
      <CheckoutItem />
    </>
  );
}

export default Checkout;
