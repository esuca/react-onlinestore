import React from "react";
// @ts-ignore
import { ReactComponent as ShoppingCartIcon } from "../assets/cart-icon.svg";
import Badge from "./Badge";

const CartButton: React.FC = props => {
  return (
    <div className="cart-button">
      <ShoppingCartIcon />
      <Badge />
    </div>
  );
};

export default CartButton;
