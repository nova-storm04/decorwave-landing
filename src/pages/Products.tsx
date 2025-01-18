import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Filter } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Combined products from all sections
const allProducts = [
  // Featured Products
  {
    id: 1,
    name: "Luxury Sofa Set",
    price: "$1,299",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1974&auto=format&fit=crop",
    description: "Elegant and comfortable design perfect for modern homes",
    category: "Living Room"
  },
  {
    id: 2,
    name: "Artisan Wall Art",
    price: "$199",
    tag: "New",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1974&auto=format&fit=crop",
    description: "Handcrafted pieces to add character to your walls",
    category: "Living Room"
  },
  {
    id: 3,
    name: "Designer Coffee Table",
    price: "$449",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1974&auto=format&fit=crop",
    description: "Contemporary design with premium materials",
    category: "Living Room"
  },
  {
    id: 4,
    name: "Pendant Light",
    price: "$179",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1974&auto=format&fit=crop",
    description: "Modern lighting solution for any room",
    category: "Living Room"
  },
  // New Arrivals
  {
    id: 5,
    name: "Modern Accent Chair",
    price: "$299",
    tag: "New Arrival",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop",
    description: "Contemporary accent chair for any room",
    category: "Living Room"
  },
  {
    id: 6,
    name: "Ceramic Vase Set",
    price: "$89",
    tag: "New Arrival",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1974&auto=format&fit=crop",
    description: "Beautiful ceramic vase set for home decoration",
    category: "Decor"
  },
  {
    id: 7,
    name: "Minimalist Table Lamp",
    price: "$129",
    tag: "New Arrival",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop",
    description: "Modern minimalist table lamp",
    category: "Lighting"
  },
  // Additional products for categories
  {
    id: 8,
    name: "Queen Size Bed",
    price: "$899",
    tag: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080&auto=format&fit=crop",
    description: "Luxurious queen size bed frame",
    category: "Bedroom"
  },
  {
    id: 9,
    name: "Kitchen Island",
    price: "$799",
    tag: "Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop",
    description: "Modern kitchen island with storage",
    category: "Kitchen"
  },
  {
    id: 10,
    name: "Office Desk",
    price: "$549",
    tag: "Office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
    description: "Ergonomic office desk",
    category: "Office"
  },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
      console.log("Category from URL:", category);
    }
  }, [searchParams]);

  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "featured") return product.tag === "Best Seller" || product.tag === "Popular";
    if (selectedCategory === "new-arrivals") return product.tag === "New" || product.tag === "New Arrival";
    return product.category.toLowerCase().replace(' ', '-') === selectedCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return parseFloat(a.price.replace("$", "").replace(",", "")) - 
             parseFloat(b.price.replace("$", "").replace(",", ""));
    } else if (sortBy === "price-high") {
      return parseFloat(b.price.replace("$", "").replace(",", "")) - 
             parseFloat(a.price.replace("$", "").replace(",", ""));
    }
    return 0;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600">Discover our complete collection of premium home decor</p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="living room">Living Room</SelectItem>
                <SelectItem value="bedroom">Bedroom</SelectItem>
                <SelectItem value="kitchen">Kitchen</SelectItem>
                <SelectItem value="office">Office</SelectItem>
                <SelectItem value="decor">Decor</SelectItem>
                <SelectItem value="lighting">Lighting</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" /> Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
                      <Badge className="bg-white/90 text-purple-600 hover:bg-white">
                        {product.tag}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="bg-white/90 hover:bg-white rounded-full h-8 w-8"
                      >
                        <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-base mb-1 group-hover:text-purple-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="hover:bg-purple-100 hover:text-purple-600 rounded-full h-8 w-8"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Products;