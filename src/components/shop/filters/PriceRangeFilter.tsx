import { ChangeEvent, Dispatch, SetStateAction } from "react";

type PriceRangeFilterProps = {
  setSelectedPrices: Dispatch<SetStateAction<string[]>>;
};

export const PriceRangeFilter = ({
  setSelectedPrices,
}: PriceRangeFilterProps) => {
  const priceRanges = [
    { value: "below-200", text: "0 - $200" },
    { value: "200-500", text: "$200 - $500" },
    { value: "over-500", text: "$500+" },
  ];

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedPrices = e.target.value;
    setSelectedPrices((prevSelected) => {
      if (prevSelected.includes(selectedPrices)) {
        return prevSelected.filter((price) => price !== selectedPrices);
      } else {
        return [...prevSelected, selectedPrices];
      }
    });
  };

  return (
    <div className="p-3 border border-stone-200 rounded-md flex flex-col mt-3">
      <span className="font-bold text-lg uppercase 2-full border-b-2 border-black mb-3">
        Price
      </span>
      <div className="flex flex-col gap-2 mt-3 text-lg font-light">
        {priceRanges.map((range) => (
          <div key={range.value} className="checkbox-container">
            <label
              htmlFor={range.value}
              className="cursor-pointer flex items-center"
            >
              <input
                type="checkbox"
                className="mr-3 "
                id={range.value}
                value={range.value}
                onChange={handleChangePrice}
              />
              <span>{range.text}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
