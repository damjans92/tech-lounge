type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className="flex justify-center space-x-2 my-12">
      <button
        onClick={handlePreviousPage}
        className={`px-4 py-2 rounded-[5px] border border-neutral-300 ${
          currentPage == 1 ? "bg-neutral-200" : "bg-white"
        }`}
      >
        {"<"}
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-4 py-2 rounded-[5px] ${
            index + 1 === currentPage
              ? "bg-blue-500 text-white"
              : "bg-white border border-neutral-300"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className={`px-4 py-2 rounded-[5px] border border-neutral-300 ${
          currentPage == totalPages ? "bg-neutral-200" : "bg-white"
        }`}
      >
        {">"}
      </button>
    </div>
  );
};
