import React from "react";
import { shallow } from "enzyme";

import { CollectionItem } from "./collection-item.component";

describe("CollectionItem component", () => {
  let wrapper;
  let mockAddItem;
  const mockName = "black hat";
  const mockPrice = 10;
  const imageUrl = "https://unsplash.it/100/100";

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        name: mockName,
        price: mockPrice,
        imageUrl,
      },
      addItem: mockAddItem,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it("should render CollectionItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call addItem when AddButton is clicked", () => {
    wrapper.find("AddButton").simulate("click");

    expect(mockAddItem).toHaveBeenCalled();
  });

  it("should render imageUrl as a prop on BackgroundImage", () => {
    expect(wrapper.find("BackgroundImage").prop("imageUrl")).toBe(imageUrl);
  });

  it("should render name prop in NameContainer", () => {
    expect(wrapper.find("NameContainer").text()).toBe(mockName);
  });

  it("should render price prop in PriceContainer", () => {
    const price = parseInt(wrapper.find("PriceContainer").text());
    expect(price).toBe(mockPrice);
  });
});
