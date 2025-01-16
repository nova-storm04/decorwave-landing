import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Heart, ShoppingCart } from "lucide-react";

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Featured Products
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated selection of our most popular and stunning pieces
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-700"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start">
                      <Badge className="bg-white/90 text-purple-600 hover:bg-white">
                        {product.tag}
                      </Badge>
                      <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white rounded-full">
                        <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
                      </Button>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100">
                        Quick View
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <Button variant="ghost" size="icon" className="hover:bg-purple-100 hover:text-purple-600 rounded-full">
                        <ShoppingCart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;