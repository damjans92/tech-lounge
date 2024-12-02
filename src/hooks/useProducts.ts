import { useContext } from "react";
import { ProductContext } from "../context/productsContext";
import { ProductContextType } from "../types";

const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }

  return context;
};
export default useProducts;
