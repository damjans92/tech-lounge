import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

type BrandFilterProps = {
  brands: string[];
  setSelectedBrands: Dispatch<SetStateAction<string[]>>;
};

export const BrandFilter = ({
  brands,
  setSelectedBrands,
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
            <label htmlFor={brand} className="cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="mr-3 "
                id={brand}
                value={brand}
                onChange={handleChangeBrand}
              />
              <span>{brand}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};