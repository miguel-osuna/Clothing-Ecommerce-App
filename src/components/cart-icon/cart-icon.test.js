import React from "react";
import { shallow } from "enzyme";

import { CartIcon } from "./cart-icon.component";

describe("CartIcon component", () => {
  let wrapper;
  let mockToggleCartDropdown;

  beforeEach(() => {
    mockToggleCartDropdown = jest.fn();

    const mockProps = {
      toggleCartDropdown: mockToggleCartDropdown,
      itemCount: 0,
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it("should render CartIcon component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call toggleCartDropdown when icon is clicked", () => {
    wrapper.find("CartContainer").simulate("click");
    expect(mockToggleCartDropdown).toHaveBeenCalled();
  });

  it("should render the itemCount as the text", () => {
    const itemCount = parseInt(wrapper.find("ItemCountContainer").text());
    expect(itemCount).toBe(0);
  });
});
