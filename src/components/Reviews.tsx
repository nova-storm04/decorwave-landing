import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely love the quality of their furniture! The customer service was exceptional, and delivery was prompt.",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    text: "The attention to detail in their products is remarkable. My living room has never looked better!",
  },
  {
    id: 3,
    name: "Emma Davis",
    rating: 5,
    text: "Great selection of modern pieces. Everything I've purchased has exceeded my expectations.",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          What Our Customers Say
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{review.text}</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;