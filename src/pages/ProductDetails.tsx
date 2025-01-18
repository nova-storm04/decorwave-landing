import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { allProducts } from "@/data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="container mx-auto px-4 py-16">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg"
          />
          <Badge className="absolute top-4 left-4 bg-white/90 text-purple-600">
            {product.tag}
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold">{product.price}</span>
            <Badge variant="secondary">Free Shipping</Badge>
          </div>

          <div className="flex items-center space-x-4">
            <Button className="flex-1" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="border-t pt-6 mt-6">
            <h3 className="font-semibold mb-4">Product Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Premium quality materials</li>
              <li>Handcrafted with care</li>
              <li>Modern design</li>
              <li>Easy assembly</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;