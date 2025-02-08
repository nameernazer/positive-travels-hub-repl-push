
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", // Snowy mountain
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716", // Nature scene
  "https://images.unsplash.com/photo-1527576539890-dfa815648363", // Urban cityscape
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white max-w-5xl mx-auto leading-tight tracking-tight">
              Welcome to Positive Travel and Holidays
            </h1>
            
            <p className="text-3xl md:text-5xl text-white/90 max-w-3xl mx-auto font-light tracking-wide">
              Your Journey to Unforgettable Experiences Begins Here
            </p>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">
              Discover the world with our expertly curated travel experiences
            </p>
            
            <button className="mt-8 px-8 py-4 bg-primary text-white rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-primary/90 transition-colors text-lg">
              Start Your Journey
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
