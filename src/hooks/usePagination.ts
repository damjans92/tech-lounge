import { useState } from "react";
import { Product } from "../types";

export const usePagination = (
  sortedProducts: Product[],
  productsPerPage: number
) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    currentPage,
    currentProducts,
    setCurrentPage,
    totalPages,
    handlePageChange,
  };
};
