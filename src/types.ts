// Cart types
export type CartState = {
  cartProducts: CartItem[];
  isOpen: boolean;
};

export interface CartItem extends Product {
  quantity: number;
}

export type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: { productId: string } }
  | { type: "REMOVE_QTY"; payload: { productId: string } }
  | { type: "TOGGLE_CART" };

export type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

// Product types
export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  brand: string;
};

export type ProductState = {
  products: Product[];
};

export type ProductContextType = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};
