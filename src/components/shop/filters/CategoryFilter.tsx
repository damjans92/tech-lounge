import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Product } from "../../../types";

type CategoryFilterProps = {
  categories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
  productsPerFilter: (filter: keyof Product, value: string) => number;
};

export const CategoryFilter = ({
  categories,
  setSelectedCategories,
  productsPerFilter,
}: CategoryFilterProps) => {
  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedCat = e.target.value;
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(selectedCat)) {
        return prevSelected.filter((cat) => cat !== selectedCat);
      } else {
        return [...prevSelected, selectedCat];
      }
    });
  };

  return (
    <div className="p-3 border bg-white border-stone-200 rounded-md flex flex-col">
      <span className="font-bold text-lg uppercase 2-full border-b-2 border-black">
        Categories
      </span>
      <div className="flex flex-col gap-2 mt-3 text-lg font-light">
        {categories.map((category) => (
          <div key={category} className="checkbox-container">
            <label
              htmlFor={category}
              className="cursor-pointer flex items-center w-full"
            >
              <input
                type="checkbox"
                className="mr-3 "
                id={category}
                value={category}
                onChange={handleChangeCategory}
              />
              <span>{category}</span>
              <span className="ml-auto text-neutral-400">
                ({productsPerFilter("category", category)})
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
