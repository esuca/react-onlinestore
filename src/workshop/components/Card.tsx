import React from "react";

class Card extends React.Component {
  render() {
    return (
      <article className="card-block">
        <img
          className="image"
          src="https://via.placeholder.com/550/384259/ffffff"
          alt="Item color"
        />
        <div className="card-body">
          <p className="subtitle -light-font">Lorem ipsum dolor sit amet.</p>
          <p className="price">100€</p>
          <div className="quantity-block">
            <span className="-light-font">Quantity</span>
            <div>
              <button className="button -circle m-small">
                <span>-</span>
              </button>
              <span className="-light-font">1</span>
              <button className="button -circle m-small">
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
        <button className="button -fullwidth">Add to cart</button>
      </article>
    );
  }
}

export default Card;
