import { Product } from "../../types";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    // <div className="flex flex-wrap gap-4 w-full product-list">
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
