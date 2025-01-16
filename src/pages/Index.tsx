import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import FeaturedProducts from "@/components/FeaturedProducts";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <NewArrivals />
      <FeaturedProducts />
      <Reviews />
      <Newsletter />
    </motion.div>
  );
};

export default Index;