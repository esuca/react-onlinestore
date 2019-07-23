import React from "react";
import CartButton from "./components/CartButton";
import CardList from "./components/CardList";

class AppComponents extends React.Component {
  render() {
    return (
      <div className="app-container">
        <nav className="navbar">
          <CartButton />
        </nav>
        <CardList />
      </div>
    );
  }
}

export default AppComponents;
