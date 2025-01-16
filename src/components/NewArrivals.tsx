import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

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
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          New Arrivals
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.price}</p>
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

export default NewArrivals;