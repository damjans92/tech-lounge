import { createContext, useReducer } from "react";
import { CartAction, CartContextType, CartState } from "../types";

const initialState: CartState = {
  cartProducts: [],
  isOpen: false,
};

const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.cartProducts.find(
        (p) => p.id === action.payload.id
      );

      if (!existingProduct) {
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.payload],
        };
      } else {
        return {
          ...state,
          cartProducts: state.cartProducts.map((p) =>
            p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (p) => p.id !== action.payload.productId
        ),
      };
    case "REMOVE_QTY":
      return {
        ...state,
        cartProducts: state.cartProducts.map((p) =>
          p.id === action.payload.productId && p.quantity > 1
            ? { ...p, quantity: p.quantity - 1 }
            : p
        ),
      };
    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
  }
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
