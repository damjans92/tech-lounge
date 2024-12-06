import { ChangeEvent } from "react";

type SortingProps = {
  sortOption: string;
  onSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  totalProductsNum: number;
};

export const Sorting = ({
  sortOption,
  onSortChange,
  totalProductsNum,
}: SortingProps) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="text-lg font-thin items-center ">
        Showing <strong className="text-neutral-600">{totalProductsNum}</strong>{" "}
        product in total
      </div>
      <div>
        <span className="mb-3 mr-3 text-lg">Sort by:</span>
        <select
          name="sort-select"
          id="sort-select"
          className="w-auto mb-3 h-10 px-3 rounded-md text-lg bg-neutral-100 border border-stone-400"
          value={sortOption}
          onChange={onSortChange}
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: min to max</option>
          <option value="price-desc">Price: max to min</option>
          <option value="name-asc">A-Z</option>
          <option value="name-desc">Z-A</option>
        </select>
      </div>
    </div>
  );
};
