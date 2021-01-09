export const addItemToCart = (cartItems, item) => {
  const exists = cartItems.find((cartItem) => cartItem.id === item.id);
  if (exists) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const removeItem = (cartItems, item) => {
  if (item.quantity === 1) {
    return clearItemFromCart(cartItems, item);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
