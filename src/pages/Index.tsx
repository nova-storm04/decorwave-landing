import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import FeaturedProducts from "@/components/FeaturedProducts";
import ShopByCategory from "@/components/ShopByCategory";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

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
      <ShopByCategory />
      <Reviews />
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default Index;