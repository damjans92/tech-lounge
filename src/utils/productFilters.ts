import { Product } from "../types";

export const filterByCategory = (
  product: Product,
  selectedCategories: string[]
) => {
  return (
    selectedCategories.length === 0 ||
    selectedCategories.includes(product.category)
  );
};

export const filterByPriceRange = (
  product: Product,
  selectedPrices: string[]
) => {
  return (
    selectedPrices.length === 0 ||
    selectedPrices.some((range) => {
      switch (range) {
        case "below-200":
          return product.price >= 0 && product.price <= 200;
        case "200-500":
          return product.price > 200 && product.price <= 500;
        case "over-500":
          return product.price > 500;
        default:
          return false;
      }
    })
  );
};
