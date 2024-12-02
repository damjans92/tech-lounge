import { ChangeEvent, useState } from "react";
import ProductList from "../components/shop/ProductList.tsx";
import { useProducts } from "../context/productsContext.tsx";
import { CategoryFilter } from "../components/shop/filters/CategoryFilter.tsx";
import { PriceRangeFilter } from "../components/shop/filters/PriceRangeFilter.tsx";
import {
  filterByCategory,
  filterByPriceRange,
} from "../utils/productFilters.ts";
import { Pagination } from "../components/Pagination.tsx";
import { Sorting } from "../components/shop/filters/Sorting.tsx";

function Shop() {
  const { products } = useProducts();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categoriesSet = new Set(products.map((p) => p.category));
  const categories = Array.from(categoriesSet);

  const filteredProducts = products
    .filter((product) => filterByCategory(product, selectedCategories))
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

  const indexOfLastProduct = currentPage * 12;
  const indexOfFirstProduct = indexOfLastProduct - 12;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / 12);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flex justify-center bg-neutral-100 py-12">
        <div className="uppercase text-6xl font-thin">Shop</div>
      </div>
      <div className="pt-16">
        <div className="max-w-[1536px] mx-auto px-4">
          <main className="flex flex-col md:flex-row gap-3">
            <aside className="sm:w-1/5">
              <CategoryFilter
                categories={categories}
                setSelectedCategories={setSelectedCategories}
              />
              <PriceRangeFilter setSelectedPrices={setSelectedPrices} />
            </aside>
            <section className="w-full md:w-4/5 flex flex-col">
              <Sorting
                sortOption={sortOption}
                onSortChange={handleSortChange}
              />
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
