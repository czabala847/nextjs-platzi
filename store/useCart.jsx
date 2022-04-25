import React, { useReducer } from "react";
import { ADD_TO_CART } from "./types";

const defaultState = {
  cart: [],
};

const useCart = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const found = state.cart.find(
          (product) => product.id === action.payload.id
        );

        if (!found) {
          return {
            ...state,
            cart: [...state.cart, action.payload],
          };
        } else {
          const newCart = state.cart.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity + action.payload.quantity,
                }
              : product
          );

          return {
            ...state,
            cart: newCart,
          };
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const onSaveToCart = (product, quantity) => {
    dispatch({ type: ADD_TO_CART, payload: { ...product, quantity } });
  };

  const getCartCount = (sum, product) => sum + product.quantity;
  const count = state.cart.reduce(getCartCount, 0);

  return { count, cart: state.cart, onSaveToCart };
};

export { useCart };
