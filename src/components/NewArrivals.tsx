import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Modern Accent Chair",
    price: "$299",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ceramic Vase Set",
    price: "$89",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Minimalist Table Lamp",
    price: "$129",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop",
  },
];

const NewArrivals = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            New Arrivals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of stunning home decor pieces that will transform your space
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary" className="bg-white hover:bg-gray-100">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                      <Button variant="ghost" size="icon" className="hover:text-purple-600">
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="group bg-white hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300 text-purple-600 hover:text-purple-700 transition-all duration-300 shadow-sm hover:shadow-md"
            onClick={() => navigate('/products?category=new-arrivals')}
          >
            <span>View All Collections</span>
            <Eye className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;
