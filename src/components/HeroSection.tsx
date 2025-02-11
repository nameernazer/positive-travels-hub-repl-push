import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import LoadingScreen from './LoadingScreen';
import { Navigation } from './Navigation/Navigation';

const images = [
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", // Japanese Temple at Night
  "https://images.unsplash.com/photo-1493997181344-712f2f19d87a", // Scenic Lake View
  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8", // Japanese Temple
  "https://images.unsplash.com/photo-1601823984263-b87b59798b00", // Snowy Mountains
  "https://images.unsplash.com/photo-1519677100203-a0e668c92439", // Beautiful Mosque
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd", // Mountain Sunrise
  "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23", // Scenic Valley
  "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f", // Traditional Market
  "https://images.unsplash.com/photo-1597998593641-5c27455adf87", // Desert Landscape
  "https://images.unsplash.com/photo-1518684079-3c830dcef090", // Sunset at Beach
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      images.map(src => {
        const img = new Image();
        img.src = src;
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    ).then(() => {
      // Force minimum loading time of 1.5 seconds
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    });

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        {images.map((img, index) => (
          <motion.div
            key={img}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
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
              <h1 className="text-5xl md:text-7xl font-bold text-white max-w-5xl mx-auto leading-tight tracking-tight">
                Experience the World with Positive Travel and Holidays
              </h1>
              
              <p className="text-2xl md:text-4xl text-white/90 max-w-3xl mx-auto font-light tracking-wide">
                Your Gateway to Extraordinary Adventures
              </p>
              
              <motion.button 
                onClick={() => scrollToSection('about')}
                className="mt-8 px-8 py-4 bg-primary text-white rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-primary/90 transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
