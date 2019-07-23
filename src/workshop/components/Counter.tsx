import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button className="button -circle m-small">
          <span>-</span>
        </button>
        <span className="-light-font">0</span>
        <button className="button -circle m-small">
          <span>+</span>
        </button>
      </div>
    );
  }
}

export default Counter;
