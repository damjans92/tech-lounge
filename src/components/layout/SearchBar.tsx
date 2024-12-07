import { MouseEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getThumbnailImage } from "../../utils/getThumbnailImage";
import { Product } from "../../types";
import { MdClose } from "react-icons/md";
import { useProducts } from "../../context/productsContext";

type SearchBarProps = {
  openSearch: boolean;
  toggleSearchBar: (e: MouseEvent<HTMLButtonElement>) => void;
};

const SearchBar = ({ openSearch, toggleSearchBar }: SearchBarProps) => {
  const { products } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const filterProducts = () => {
      if (searchTerm.length === 0) return;

      setLoading(true);
      try {
        const results = products.filter((product: Product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
        setError("");
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };
    filterProducts();
  }, [searchTerm, products]);

  useEffect(() => {
    if (!openSearch) {
      setSearchTerm("");
      setFilteredProducts([]);
      setLoading(false);
      setError("");
    }
  }, [openSearch]);

  return (
    <div
      className={`relative z-10 flex justify-center items-center gap-2 transition-max-height duration-300 ease-in-out ${
        openSearch
          ? "max-h-[200px] overflow-visible"
          : "max-h-0 overflow-hidden"
      }`}
    >
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-[400px] px-4 py-2 mt-6 border border-gray-300 rounded-md focus:outline-none"
      />
      <button onClick={toggleSearchBar} className="items-center">
        <MdClose size={25} className="text-neutral-500 mt-6" />
      </button>
      {loading && <p className="text-center mt-2">Loading...</p>}{" "}
      {error && <p className="text-center mt-2 text-red-500">{error}</p>}
      {filteredProducts.length > 0 && (
        <div className="absolute top-[70px] max-h-[300px] bg-white border border-neutral-300 p-3 max-w-[600px] overflow-y-scroll">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="flex items-center gap-3 py-2 border-b"
            >
              <img
                src={`/images/thumbs/${getThumbnailImage(product.image)}`}
                alt={product.name}
                className="w-[100px] h-[100px] object-cover"
              />
              <div>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
                <p className="text-gray-500">{product.description}</p>
                <span className="text-xl font-bold">${product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
      {!loading && searchTerm.length > 0 && filteredProducts.length === 0 && (
        <div className="absolute top-[70px] max-h-[300px]  w-[600px] bg-white border border-neutral-300 p-3 overflow-y-scroll">
          <p className="text-center mt-2">No products found</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
