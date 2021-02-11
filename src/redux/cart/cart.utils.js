export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...itemToAdd, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [
    ...cartItems,
    {
      ...itemToAdd,
      quantity: 1,
    },
  ];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.reduce((acc, current) => {
    if (current.id !== itemToRemove.id) {
      acc.push(current);
      return acc;
    }

    if (current.quantity > 1) {
      acc.push({ ...current, quantity: current.quantity - 1 });
    }
    return acc;
  }, []);
};

export const clearItemsFromCart = (cartItems, itemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);

export const deleteItemFromCart = (cartItems, itemToDelete) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === itemToDelete.id
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === itemToDelete.id) {
        cartItem.quantity -= 1;
      }
      return cartItem;
    });
  }

  return cartItems;
};
