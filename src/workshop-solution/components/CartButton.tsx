import React from "react";
// @ts-ignore
import { ReactComponent as ShoppingCartIcon } from "../assets/cart-icon.svg";
import { CartContextConsumer } from "../contexts/CartContext";
import Badge from "./Badge";

const CartButton: React.FC = props => {
  return (
    <div className="cart-button">
      <ShoppingCartIcon />
      <CartContextConsumer>
        {value => <Badge quantity={value.quantity} />}
      </CartContextConsumer>
    </div>
  );
};

export default CartButton;
