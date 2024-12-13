import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  bgColor: string;
  shadowColor: string;
  textColor: string;
  description: string;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  bgColor,
  shadowColor,
  textColor,
  description,
  index,
}) => {
  return (
    <Link
      to={`${title.toLowerCase()}`}
      className={`relative ${bgColor} min-h-[250px] ${
        index === 0 || index === 2 ? "lg:row-span-2" : "lg:row-span-1"
      } rounded-md shadow-md group overflow-hidden`}
    >
      <div className="relative bg-cover bg-no-repeat h-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`absolute ${
            index === 2 ? "w-full" : "w-4/5"
          }  -right-[103px] -bottom-[15%] group-hover:scale-105 transition-transform duration-300`}
        />
        <div className="relative z-10 ml-7 mt-7">
          <h3
            className={`${textColor} font-semibold mb-2 text-left text-3xl font-quantico ${
              index === 1 || index === 3 ? "lg:text-2xl" : "lg:text-3xl"
            }`}
          >
            {title}
          </h3>
        </div>

        <div className="flex bg-neutral-900/20 backdrop-blur-[4px] absolute bottom-0 h-full w-full opacity-0 group-hover:opacity-100 items-center justify-center transition-all duration-500 ease-in-out overflow-hidden">
          <p
            className={`text-center lg:text-xl xl:text-xl text-white px-6 font-light max-w-[80%] -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}
          >
            {description}
          </p>
        </div>
        <button
          className={`absolute bottom-2 w-[140px] left-4 rounded-[4px] inline-flex items-center mt-2 gap-1 font-semibold ${textColor} text-sm px-3 py-2 group-hover:gap-3 transition-all duration-300`}
        >
          Shop Now <FaArrowRightLong />
        </button>
      </div>
    </Link>
  );
};

export default CategoryCard;
