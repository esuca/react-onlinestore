import React from "react";

interface ICounterProps {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

class Counter extends React.Component<ICounterProps> {
  render() {
    return (
      <div>
        <button
          className="button -circle m-small"
          data-testid="counter_decrement"
          onClick={this.props.handleDecrement}
        >
          <span>-</span>
        </button>
        <span className="-light-font" data-testid="counter_value">
          {this.props.count}
        </span>
        <button
          className="button -circle m-small"
          data-testid="counter_increment"
          onClick={this.props.handleIncrement}
        >
          <span>+</span>
        </button>
      </div>
    );
  }
}

export default Counter;
