import React from "react";
import { render, waitForDomChange, fireEvent } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import AppComponents from "../AppComponents";
import axiosClient from "../services/axiosClient";
// This sets the mock adapter on the default instance
const axiosClientMock = new MockAdapter(axiosClient);

describe("App Components", () => {
  it("should show the cards placeholder when the request to get the items is in progress", () => {
    const result = render(<AppComponents />);
    expect(result.queryByText("Lorem ipsum")).not.toBeInTheDocument();
  });

  it("should show the cards placeholder when the request to get the items has been successful", async () => {
    axiosClientMock.onGet(/items/).reply(200, [
      {
        id: 1,
        imageUrl: "https://via.placeholder.com/550/384259/ffffff",
        title: "Lorem ipsum dolor sit amet",
        price: 100
      }
    ]);

    const result = render(<AppComponents />);

    await waitForDomChange();

    expect(
      result.queryByText("Lorem ipsum dolor sit amet")
    ).toBeInTheDocument();
  });

  it("should update the badge value when the user adds or remove items", async () => {
    axiosClientMock.onGet(/items/).reply(200, [
      {
        id: 1,
        imageUrl: "https://via.placeholder.com/550/384259/ffffff",
        title: "Lorem ipsum dolor sit amet",
        price: 100
      }
    ]);

    const result = render(<AppComponents />);

    await waitForDomChange();

    fireEvent.click(result.getByTestId("counter_increment"));

    fireEvent.click(result.getByText("Add to cart"));

    expect(result.queryByTestId("badge")).toHaveTextContent("1");

    fireEvent.click(result.getByTestId("counter_decrement"));

    fireEvent.click(result.getByText("Add to cart"));

    expect(result.queryByTestId("badge")).not.toBeInTheDocument();
  });
});
