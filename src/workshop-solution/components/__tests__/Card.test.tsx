import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Card from "../Card";
import { IItem } from "../../interfaces/IItem";

describe("Card", () => {
  const mockItem: IItem = {
    id: 1,
    imageUrl: "",
    price: 100,
    title: "Lorem ipsum dolor sit amet."
  };

  afterEach(() => {
    cleanup();
  });

  it("should increment the value when the user clicks on the increment button", () => {
    const result = render(<Card item={mockItem} />);
    fireEvent.click(result.getByTestId("counter_increment"));
    expect(result.getByTestId("counter_value")).toHaveTextContent("1");
  });

  it("should increment the value when the user clicks on the decrement button", () => {
    const result = render(<Card item={mockItem} />);
    fireEvent.click(result.getByTestId("counter_increment"));
    expect(result.getByTestId("counter_value")).toHaveTextContent("1");
    fireEvent.click(result.getByTestId("counter_decrement"));
    expect(result.getByTestId("counter_value")).toHaveTextContent("0");
  });
});
