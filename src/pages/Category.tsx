import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ShopLayout from "../components/layout/ShopLayout";

const Category = () => {
  const { category } = useParams();
  const { products } = useProducts();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <ShopLayout
      products={filteredProducts}
      pageTitle={category || "category"}
      showCategoryFilter={false}
    />
  );
};

export default Category;
