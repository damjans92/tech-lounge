import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Product } from "../../../types";

type BrandFilterProps = {
  brands: string[];
  setSelectedBrands: Dispatch<SetStateAction<string[]>>;
  productsPerFilter: (filter: keyof Product, value: string) => number;
};

export const BrandFilter = ({
  brands,
  setSelectedBrands,
  productsPerFilter,
}: BrandFilterProps) => {
  const handleChangeBrand = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedBrand = e.target.value;
    setSelectedBrands((prevSelected) => {
      if (prevSelected.includes(selectedBrand)) {
        return prevSelected.filter((brand) => brand !== selectedBrand);
      } else {
        return [...prevSelected, selectedBrand];
      }
    });
  };
  return (
    <div className="p-3 mt-3 border bg-white border-stone-200 rounded-md flex flex-col">
      <span className="font-bold text-lg uppercase 2-full border-b-2 border-black">
        Brands
      </span>
      <div className="flex flex-col gap-2 mt-3 text-lg font-light">
        {brands.map((brand) => (
          <div key={brand} className="checkbox-container">
            <label
              htmlFor={brand}
              className="cursor-pointer flex items-center  w-full"
            >
              <input
                type="checkbox"
                className="mr-3 "
                id={brand}
                value={brand}
                onChange={handleChangeBrand}
              />
              <span>{brand}</span>
              <span className="ml-auto text-neutral-400">
                ({productsPerFilter("brand", brand)})
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
