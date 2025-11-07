import React, { createContext, useReducer } from "react";

const initialState = {
  cart: [],
  dispatch: () => {},
};

export const CartContext = createContext(initialState);

const cartReducer = (state, action) => {
  console.log("Reducer Initialized:", state);
  console.log("Action dispatched:", action);
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.find((p) => p.id === action.product.id);
      if (existing) {
        return state.map((p) =>
          p.id === action.product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...state, { ...action.product, quantity: 1 }];
    }
    case "REMOVE": {
      return state.filtert((p) => p.id !== action.id);
    }
    case "INCREASE": {
      return state.map((p) =>
        p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
      );
    }
    case "DECREASE": {
      return state
        .map((p) =>
          p.id === action.id
            ? { ...p, quantity: Math.max(p.quantity - 1, 0) }
            : p
        )
        .filter((p) => p.quantity > 0);
    }
    default:
      return state;
  }
};

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  console.log("Reducer initialized with state:", cart);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
