import React from "react";
// @ts-ignore
import { ReactComponent as ShoppingCartIcon } from "./assets/cart-icon.svg";

const AppHtml: React.FC = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="cart-button">
          <ShoppingCartIcon />
          <div className="badge">10+</div>
        </div>
      </nav>
      <main>
        <section className="items-grid">
          <article className="card-block">
            <img
              className="image"
              src="https://via.placeholder.com/550/384259/ffffff"
              alt="Item color"
            />
            <div className="card-body">
              <p className="subtitle -light-font">
                Lorem ipsum dolor sit amet.
              </p>
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
          <article className="card-block">
            <img
              className="image"
              src="https://via.placeholder.com/550/f73859/fffffff"
              alt="Item color"
            />
            <div className="card-body">
              <p className="subtitle -light-font">
                Lorem ipsum dolor sit amet.
              </p>
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
          <article className="card-block">
            <img
              className="image"
              src="https://via.placeholder.com/550/009975/ffffff"
              alt="Item color"
            />
            <div className="card-body">
              <p className="subtitle -light-font">
                Lorem ipsum dolor sit amet.
              </p>
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
          <article className="card-block">
            <img
              className="image"
              src="https://via.placeholder.com/550/ffd460/ffffff"
              alt="Item color"
            />
            <div className="card-body">
              <p className="subtitle -light-font">
                Lorem ipsum dolor sit amet.
              </p>
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
        </section>
      </main>
    </div>
  );
};

export default AppHtml;
