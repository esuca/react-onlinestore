import React from "react";
import CartButton from "./components/CartButton";
import { CartContextProvider } from "./contexts/CartContext";
import { IItem } from "./interfaces/IItem";
import CardList from "./components/CardList";
import { getAllItems } from "./services/itemsService";

interface IAppState {
  loading: boolean;
  data: IItem[];
}

class AppComponents extends React.Component<{}, IAppState> {
  state: IAppState = {
    data: [],
    loading: true
  };

  async componentDidMount() {
    const items = await getAllItems();
    this.setState({
      data: items.data,
      loading: false
    });
  }

  render() {
    return (
      <CartContextProvider>
        <div className="app-container">
          <nav className="navbar">
            <CartButton />
          </nav>
          <CardList data={this.state.data} loading={this.state.loading} />
        </div>
      </CartContextProvider>
    );
  }
}

export default AppComponents;
