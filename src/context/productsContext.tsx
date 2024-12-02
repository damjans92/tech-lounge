import { createContext, useContext, useState } from "react";
import { Product, ProductContextType } from "../types";
import products from "../data/products";

const productsData = products;

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(productsData);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }

  return context;
};

export { ProductProvider, useProducts };
