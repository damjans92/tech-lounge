import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { Product } from "../../types";
import { getThumbnailImage } from "../../utils/getThumbnailImage";

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const { dispatch } = useCart();

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div
        key={product.id}
        className="rounded-md border border-stone-200 overflow-hidden group hover:shadow-md transition-shadow product-item"
      >
        <div className="overflow-hidden">
          <img
            src={`/images/thumbs/${getThumbnailImage(product.image)}`}
            alt={product.name}
            className="transform transition-transform duration-300  group-hover:scale-105"
          />
        </div>
        <div className="flex items-center flex-col p-2">
          <span className="text-[1.25rem] text-gray-800 font-light text-center text-base min-h-[50px] leading-6">
            {product.name}
          </span>
          <div className="flex justify-between w-full p-3 flex-wrap">
            <div className="text-[1.5rem] text-stone-500 ">
              ${product.price}
            </div>
            <button
              className="bg-blue-500 rounded-full p-2 text-white px-4"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(e);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
