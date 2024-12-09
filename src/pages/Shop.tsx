import ShopLayout from "../components/layout/ShopLayout";
import { useProducts } from "../context/productsContext";

const Shop = () => {
  const { products } = useProducts();
  return (
    <ShopLayout
      products={products}
      pageTitle={"Shop"}
      showCategoryFilter={true}
    />
  );
};

export default Shop;
