import React from "react";

interface CartItem {
  id: number;
  quantity: number;
}

interface ICartContext {
  items: CartItem[];
  quantity: number;
  updateItems: (items: CartItem) => void;
}

const CartContext = React.createContext<ICartContext>({
  items: [],
  quantity: 0,
  updateItems: () => {
    throw Error("update items not implemented");
  }
});

interface IState {
  items: CartItem[];
}

class CartContextProvider extends React.Component<{}, IState> {
  state: IState = {
    items: []
  };

  updateItems = (item: CartItem) => {
    const itemIndex = this.state.items.findIndex(value => value.id === item.id);

    if (itemIndex > -1) {
      this.setState(prevState => {
        const newItems = [...prevState.items];
        newItems[itemIndex].quantity = item.quantity;
        return {
          items: newItems
        };
      });
    } else {
      this.setState(prevState => ({
        items: [...prevState.items, item]
      }));
    }
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          items: this.state.items,
          quantity: this.state.items.reduce(
            (previousValue, currentValue) =>
              previousValue + currentValue.quantity,
            0
          ),
          updateItems: this.updateItems
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

const CartContextConsumer = CartContext.Consumer;

export { CartContextProvider, CartContextConsumer };
