import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Heart, ShoppingCart, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Luxury Sofa Set",
    price: "$1,299",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1974&auto=format&fit=crop",
    description: "Elegant and comfortable design perfect for modern homes",
  },
  {
    id: 2,
    name: "Artisan Wall Art",
    price: "$199",
    tag: "New",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1974&auto=format&fit=crop",
    description: "Handcrafted pieces to add character to your walls",
  },
  {
    id: 3,
    name: "Designer Coffee Table",
    price: "$449",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1974&auto=format&fit=crop",
    description: "Contemporary design with premium materials",
  },
  {
    id: 4,
    name: "Pendant Light",
    price: "$179",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1974&auto=format&fit=crop",
    description: "Modern lighting solution for any room",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-600">Discover our most popular pieces</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-white hover:shadow-xl transition-all duration-300 rounded-xl">
                <div className="relative h-40 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      <Button 
                        size="sm"
                        variant="secondary"
                        className="rounded-full bg-white/90 hover:bg-white"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm"
                        variant="secondary"
                        className="rounded-full bg-white/90 hover:bg-white"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm"
                        variant="secondary"
                        className="rounded-full bg-white/90 hover:bg-white"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-2 left-2 bg-white/90">
                    {product.tag}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">
                      {product.price}
                    </span>
                    <Button 
                      size="sm"
                      variant="ghost"
                      className="hover:bg-purple-50 hover:text-purple-600"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;