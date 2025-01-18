import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Share2, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { allProducts } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  // Generate similar products based on the same category
  const similarProducts = allProducts
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  // Simulate multiple product images
  const productImages = [
    product?.image,
    "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1974&auto=format&fit=crop",
  ].filter(Boolean) as string[];

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
          <Carousel className="w-full">
            <CarouselContent>
              {productImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                    {index === 0 && (
                      <Badge className="absolute top-4 left-4 bg-white/90 text-purple-600">
                        {product.tag}
                      </Badge>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
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
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
              <span className="text-gray-600">(4.0)</span>
            </div>
          </div>

          <p className="text-gray-600 text-lg">{product.description}</p>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-purple-600">{product.price}</span>
            <Badge variant="secondary">Free Shipping</Badge>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col items-center text-center space-y-2 p-3">
              <Truck className="w-6 h-6 text-purple-600" />
              <span className="text-sm font-medium">Fast Delivery</span>
              <span className="text-xs text-gray-500">2-4 business days</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-3">
              <Shield className="w-6 h-6 text-purple-600" />
              <span className="text-sm font-medium">Warranty</span>
              <span className="text-xs text-gray-500">1 year coverage</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-3">
              <RotateCcw className="w-6 h-6 text-purple-600" />
              <span className="text-sm font-medium">Easy Returns</span>
              <span className="text-xs text-gray-500">30-day returns</span>
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

      <Separator className="my-12" />

      {/* Reviews Section */}
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

      <Separator className="my-12" />

      {/* Similar Products Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {similarProducts.map((similarProduct) => (
            <Card key={similarProduct.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={similarProduct.image}
                    alt={similarProduct.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-2 left-2 bg-white/90 text-purple-600">
                    {similarProduct.tag}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-base mb-1 group-hover:text-purple-600 transition-colors">
                    {similarProduct.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{similarProduct.price}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;