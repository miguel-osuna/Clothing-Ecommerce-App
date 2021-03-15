import React from "react";
import { shallow } from "enzyme";

import { CheckoutItem } from "./checkout-item.component";

describe("CheckoutItem component", () => {
  let wrapper;
  let mockClearItemFromCart;
  let mockAddItem;
  let mockRemoveItem;

  beforeEach(() => {
    mockClearItemFromCart = jest.fn();
    mockAddItem = jest.fn();
    mockRemoveItem = jest.fn();

    const mockProps = {
      cartItem: {
        imageUrl: "https://unsplash.it/100/100",
        price: 10,
        name: "hats",
        quantity: 2,
      },
      clearItemFromCart: mockClearItemFromCart,
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it("should render CheckoutItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call clearItemFromCart when remove button is clicked", () => {
    wrapper.find("RemoveButtonContainer").simulate("click");
    expect(mockClearItemFromCart).toHaveBeenCalled();
  });

  it("should call removeItem when left arrow is clicked", () => {
    wrapper.find("QuantityContainer").childAt(0).simulate("click");
    expect(mockRemoveItem).toHaveBeenCalled();
  });

  it("should call addItem when right arrow is clicked", () => {
    wrapper.find("QuantityContainer").childAt(2).simulate("click");
    expect(mockAddItem).toHaveBeenCalled();
  });
});
