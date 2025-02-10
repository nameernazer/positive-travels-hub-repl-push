
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import LoadingScreen from './LoadingScreen';
import { Navigation } from './Navigation/Navigation';

const images = [
  "https://images.unsplash.com/photo-1478547522833-c7f23b7e8f91",
  "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
  "https://images.unsplash.com/photo-1528164344705-47542687000d",
  "https://images.unsplash.com/photo-1601823984263-b87b59798b00",
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
  "https://images.unsplash.com/photo-1493997181344-712f2f19d87a",
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd",
  "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  "https://images.unsplash.com/photo-1597998593641-5c27455adf87",
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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
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
            transition={{ duration: 1 }}
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
                onClick={scrollToAbout}
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
