import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from "./cart-item.styles";

export const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
