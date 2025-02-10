
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Facebook, Instagram, MessageCircle, Menu, X } from 'lucide-react';
import LoadingScreen from './LoadingScreen';

const images = [
  "https://images.unsplash.com/photo-1478547522833-c7f23b7e8f91", // Snow-capped mountains
  "https://images.unsplash.com/photo-1545569341-9eb8b30979d9", // Japanese temple
  "https://images.unsplash.com/photo-1528164344705-47542687000d", // Japanese shrine
  "https://images.unsplash.com/photo-1601823984263-b87b59798b00", // Winter landscape
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", // Temple at night
  "https://images.unsplash.com/photo-1493997181344-712f2f19d87a", // Mountain lake
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd", // Mountain sunrise
  "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23", // Scenic valley
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", // Tropical beach
  "https://images.unsplash.com/photo-1597998593641-5c27455adf87", // Desert landscape
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    // Preload images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newCount = prev + 1;
          if (newCount === images.length) {
            setIsLoading(false);
          }
          return newCount;
        });
      };
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

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: "0%",
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.2
      }
    })
  };

  const menuIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
        {/* Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 bg-transparent">
          <div className="container-custom">
            <div className="flex items-center justify-between py-4">
              {/* Logo and Menu Button */}
              <div className="flex w-full items-center justify-between md:justify-start">
                <img 
                  src="/lovable-uploads/83c68e77-3dd0-4763-a625-9071182b3664.png" 
                  alt="Positive Travel Logo" 
                  className="h-10 md:h-16 w-auto"
                />
                
                <motion.button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  className="md:hidden text-white p-2 z-50"
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={menuIconVariants}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <X className="w-6 h-6" key="close" />
                    ) : (
                      <Menu className="w-6 h-6" key="menu" />
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

              {/* Phone Number - Desktop Only, Centered */}
              <div className="hidden md:block text-center flex-1">
                <span className="text-white text-sm">
                  Make a call: +91 94974 58282
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  <a href="https://www.facebook.com/share/19rhFzkc4q/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/positivetravelandholidays" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/917593946666" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Horizontal Line */}
            <div className="h-px bg-white/20 my-4" />

            {/* Desktop Navigation Links - Below Line */}
            <div className="hidden md:flex items-center space-x-8 py-2">
              <a href="#" className="text-white hover:text-white/80 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-white/80 transition-colors">About</a>
              <a href="#services" className="text-white hover:text-white/80 transition-colors">Services</a>
              <a href="#contact" className="text-white hover:text-white/80 transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 h-screen w-full bg-black/95 z-40 md:hidden flex justify-end"
              >
                <div className="w-64 h-full flex flex-col items-end pr-8 pt-32">
                  <motion.div className="flex flex-col items-end space-y-8">
                    {['Home', 'About', 'Services', 'Contact Us'].map((item, i) => (
                      <motion.a
                        key={item}
                        href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                        custom={i}
                        variants={menuItemVariants}
                        className="text-white text-2xl font-medium hover:text-white/80 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </motion.a>
                    ))}
                    <motion.div 
                      variants={menuItemVariants}
                      custom={4}
                      className="flex items-center space-x-8 mt-8"
                    >
                      <a href="https://www.facebook.com/share/19rhFzkc4q/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a href="https://www.instagram.com/positivetravelandholidays" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a href="https://wa.me/917593946666" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                        <MessageCircle className="w-6 h-6" />
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Hero Images */}
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
                Experience the World with Positive Travel and Holidays
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
    </>
  );
}
