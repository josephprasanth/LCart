import React, { createContext, useReducer } from "react";

const initialState = {
  cart: [],
  dispatch: () => {},
};

export const CartContext = createContext(initialState);

const cartReducer = (state, action) => {
  console.log("Action dispatched:", action);
  switch (action.type) {
    case "ADD_TO_CART": {
    }
    case "REMOVE": {
    }
    case "INCREASE": {
    }
    case "DECREASE": {
    }
    default:
      return state;
  }
};

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
