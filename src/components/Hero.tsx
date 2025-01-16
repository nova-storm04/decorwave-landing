import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-[90vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Space Into a Dream Home</h1>
          <p className="text-xl mb-8">Discover unique pieces that reflect your style and elevate your living spaces.</p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Explore Collection
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;