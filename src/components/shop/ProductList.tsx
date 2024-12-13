import { Product } from "../../types";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[];
  colNum?: number;
}

function ProductList({ products, colNum = 4 }: ProductListProps) {
  const colClassLg = colNum === 6 ? `lg:grid-cols-6` : `lg:grid-cols-4`;
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-2 ${colClassLg} gap-4 product-list`}
    >
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
