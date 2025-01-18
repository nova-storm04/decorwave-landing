import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Share2, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { allProducts } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2024-02-15",
    comment: "Absolutely love this piece! The quality is outstanding.",
    verified: true
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4,
    date: "2024-02-10",
    comment: "Great product, just slightly different color than expected.",
    verified: true
  }
];

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
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
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
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2 space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
              ))}
              <span className="text-gray-600">(4.0)</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-lg">{product.description}</p>
          
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-purple-600">{product.price}</span>
            <Badge variant="secondary">Free Shipping</Badge>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Truck className="w-5 h-5" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5" />
              <span>Warranty</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <RotateCcw className="w-5 h-5" />
              <span>Easy Returns</span>
            </div>
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

          <Separator />

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Product Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Premium quality materials</li>
              <li>Handcrafted with care</li>
              <li>Modern design</li>
              <li>Easy assembly</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <Separator className="my-12" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="mt-4 text-gray-600">{review.comment}</p>
                {review.verified && (
                  <Badge variant="secondary" className="mt-4">
                    Verified Purchase
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;