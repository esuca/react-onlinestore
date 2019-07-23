import React from "react";

interface IProps {
  quantity: number;
}

const Badge: React.FC<IProps> = props => {
  return props.quantity > 0 ? (
    <div className="badge" data-testid="badge">
      {props.quantity}
    </div>
  ) : null;
};

export default Badge;
