
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1478547522833-c7f23b7e8f91", // Snow-capped mountains
  "https://images.unsplash.com/photo-1545569341-9eb8b30979d9", // Japanese temple
  "https://images.unsplash.com/photo-1528164344705-47542687000d", // Japanese shrine
  "https://images.unsplash.com/photo-1601823984263-b87b59798b00", // Winter landscape
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
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
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div className="absolute top-4 left-4 z-20">
        <img 
          src="/lovable-uploads/83c68e77-3dd0-4763-a625-9071182b3664.png" 
          alt="Positive Travel Logo" 
          className="h-16 w-auto"
        />
      </div>
      
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
            <h1 className="text-5xl md:text-7xl font-bold text-white max-w-5xl mx-auto leading-tight tracking-tight">
              Experience the World with Positive Travel
            </h1>
            
            <p className="text-2xl md:text-4xl text-white/90 max-w-3xl mx-auto font-light tracking-wide">
              Your Gateway to Extraordinary Adventures
            </p>
            
            <button 
              onClick={scrollToAbout}
              className="mt-8 px-8 py-4 bg-primary text-white rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-primary/90 transition-colors text-lg"
            >
              Start Your Journey
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
