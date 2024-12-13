import useProducts from "../../hooks/useProducts";
import ProductList from "../shop/ProductList";

const LatestArrivals = () => {
  const { products } = useProducts();

  const newestProducts = products.slice(0, 6);
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl mt-20 mb-20"> Latest Arrivals</h2>
      <div className="pb-12">
        <ProductList products={newestProducts} colNum={6} />
      </div>
    </div>
  );
};

export default LatestArrivals;
