import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1974&auto=format&fit=crop"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] flex items-center overflow-hidden">
      {images.map((img, index) => (
        <motion.div
          key={img}
          className="absolute inset-0 bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundImage: `url('${img}')` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      ))}
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-white"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform Your Space Into a Dream Home
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover unique pieces that reflect your style and elevate your living spaces.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 hover:scale-105 transition-transform">
              Explore Collection
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;