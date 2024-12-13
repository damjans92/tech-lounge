import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Laptops",
    image: "/images/cat-3.png",
    bgColor: "bg-slate-200",
    shadowColor: "shadow-amber-600",
    textColor: "text-black",
    description: "Find the best laptops for your needs.",
  },
  {
    title: "Headphones",
    image: "/images/cat-1.png",
    bgColor: "bg-slate-700",
    shadowColor: "shadow-slate-700",
    textColor: "text-white",
    description: "Discover our range of high-quality headphones.",
  },

  {
    title: "Smartphones",
    image: "/images/cat-2.png",
    bgColor: "bg-blue-800",
    shadowColor: "shadow-blue-700",
    textColor: "text-white",
    description: "Check out our latest smartphones.",
  },

  {
    title: "Tablets",
    image: "/images/cat-4.png",
    bgColor: "bg-sky-200",
    shadowColor: "shadow-gray-300",
    textColor: "text-black",
    description: "Explore our versatile tablets.",
  },
];

const CategorySection = () => {
  return (
    <div className="relative container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            index={index}
            title={category.title}
            image={category.image}
            bgColor={category.bgColor}
            shadowColor={category.shadowColor}
            textColor={category.textColor}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
