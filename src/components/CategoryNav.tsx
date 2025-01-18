import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, useSearchParams } from "react-router-dom";

const categories = [
  { id: "all", name: "All Products" },
  { id: "featured", name: "Featured" },
  { id: "new-arrivals", name: "New Arrivals" },
  { id: "living-room", name: "Living Room" },
  { id: "bedroom", name: "Bedroom" },
  { id: "kitchen", name: "Kitchen" },
  { id: "office", name: "Office" },
];

const CategoryNav = () => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center space-x-1 overflow-x-auto py-4 scrollbar-hide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className={cn(
                "px-4 py-2 rounded-full whitespace-nowrap transition-all",
                currentCategory === category.id
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              )}
            >
              {category.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default CategoryNav;