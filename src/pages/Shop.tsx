import { ChangeEvent, useState } from "react";
import ProductList from "../components/shop/ProductList.tsx";
import { useProducts } from "../context/productsContext.tsx";
import { CategoryFilter } from "../components/shop/filters/CategoryFilter.tsx";
import { PriceRangeFilter } from "../components/shop/filters/PriceRangeFilter.tsx";
import {
  filterByBrands,
  filterByCategory,
  filterByPriceRange,
} from "../utils/productFilters.ts";
import { Pagination } from "../components/Pagination.tsx";
import { Sorting } from "../components/shop/filters/Sorting.tsx";
import useScreenWidth from "../hooks/useScreenWidth.ts";
import { FaFilter } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { BrandFilter } from "../components/shop/filters/BrandFilter.tsx";
import { Product } from "../types.ts";

function Shop() {
  const { products } = useProducts();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const screenWidth = useScreenWidth();
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categoriesSet = new Set(products.map((p) => p.category));
  const categories = Array.from(categoriesSet);
  const brandsSet = new Set(products.map((p) => p.brand));
  const brands = Array.from(brandsSet);

  const filteredProducts = products
    .filter((product) => filterByCategory(product, selectedCategories))
    .filter((product) => filterByBrands(product, selectedBrands))
    .filter((product) => filterByPriceRange(product, selectedPrices));

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const productsPerFilter = (filter: keyof Product, value: string) => {
    const allProductsWithFilter = products.filter(
      (product) => product[filter] === value
    );
    return allProductsWithFilter.length;
  };

  const PRODUCTS_PER_PAGE = 12;
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const toggleFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    <>
      <div className="flex justify-center bg-neutral-100 py-12">
        <div className="uppercase text-6xl font-thin">Shop</div>
      </div>
      <div className="sm:pt-16">
        <div className="container mx-auto px-4 py-20">
          <main className="flex flex-col md:flex-row gap-3">
            <aside
              className={` ${
                screenWidth < 1024 && showMobileFilters
                  ? "fixed  px-3 inset-0 bg-white z-50 w-full"
                  : "hidden lg:block md:w-1/5"
              }`}
            >
              {screenWidth < 1024 && showMobileFilters && (
                <div className="relative flex justify-center">
                  <span className="text-xl my-5">Filters</span>
                  <button
                    onClick={toggleFilters}
                    className="absolute right-6 top-5 text-3xl"
                  >
                    <MdClose />
                  </button>
                </div>
              )}

              <CategoryFilter
                categories={categories}
                setSelectedCategories={setSelectedCategories}
                productsPerFilter={productsPerFilter}
              />
              <BrandFilter
                brands={brands}
                setSelectedBrands={setSelectedBrands}
                productsPerFilter={productsPerFilter}
              />
              <PriceRangeFilter setSelectedPrices={setSelectedPrices} />
            </aside>
            <section className="w-full lg:w-4/5 flex flex-col ">
              <div className="flex flex-col-reverse sm:flex-row ">
                {screenWidth < 1024 && (
                  <button
                    className="flex justify-center items-center mb-3 px-5 h-[50px] gap-3 bg-blue-500 hover:bg-blue-700 transition-colors  text-lg text-white rounded-md"
                    onClick={toggleFilters}
                  >
                    <span>Filters</span>
                    <FaFilter />
                  </button>
                )}
                <Sorting
                  sortOption={sortOption}
                  onSortChange={handleSortChange}
                  totalProductsNum={sortedProducts.length}
                />
              </div>

              <ProductList products={currentProducts} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Shop;
