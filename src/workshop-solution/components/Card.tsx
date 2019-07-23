import React from "react";
import Counter from "./Counter";
import { CartContextConsumer } from "../contexts/CartContext";
import { IItem } from "../interfaces/IItem";

interface ICardProps {
  item: IItem;
}

interface IState {
  quantity: number;
}

class Card extends React.Component<ICardProps, IState> {
  state = {
    quantity: 0
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity - 1
    }));
  };

  render() {
    return (
      <article className="card-block">
        <img
          className="image"
          src={this.props.item.imageUrl}
          alt="Item color"
        />
        <div className="card-body">
          <p className="subtitle -light-font">{this.props.item.title}</p>
          <p className="price">{this.props.item.price}€</p>
          <div className="quantity-block">
            <span className="-light-font">Quantity</span>
            <Counter
              count={this.state.quantity}
              handleDecrement={this.handleDecrement}
              handleIncrement={this.handleIncrement}
            />
          </div>
        </div>
        <CartContextConsumer>
          {value => (
            <button
              className="button -fullwidth"
              onClick={() =>
                value.updateItems({
                  id: this.props.item.id,
                  quantity: this.state.quantity
                })
              }
            >
              Add to cart
            </button>
          )}
        </CartContextConsumer>
      </article>
    );
  }
}

export default Card;
