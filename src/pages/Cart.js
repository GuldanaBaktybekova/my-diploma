import Header from "../components/Header/Header";
import image from "../assets/smegOven.jpeg";

import CartDisplay from "../components/CartDisplay/CartDisplay";

function Cart() {
  return (
    <>
      <Header title="Your Shopping Cart" image={image}>
        Please review items in your cart.
      </Header>

      <CartDisplay actions />
    </>
  );
}

export default Cart;
