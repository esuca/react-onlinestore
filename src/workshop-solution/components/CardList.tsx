import React from "react";
import CardPlaceholder from "./CardPlaceholder";
import { IItem } from "../interfaces/IItem";
import Card from "./Card";

interface ICardListProps {
  loading: boolean;
  data: IItem[];
}

const CardList: React.FC<ICardListProps> = props => {
  return (
    <section className="items-grid">
      {props.loading
        ? new Array(4)
            .fill(0)
            .map((_, index) => <CardPlaceholder key={index} />)
        : props.data.map(item => <Card key={item.id} item={item} />)}
    </section>
  );
};

export default CardList;
