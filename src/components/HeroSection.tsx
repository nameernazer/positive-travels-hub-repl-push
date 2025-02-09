
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Facebook, Instagram, MessageCircle, Menu, X, Phone } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1478547522833-c7f23b7e8f91", // Snow-capped mountains
  "https://images.unsplash.com/photo-1545569341-9eb8b30979d9", // Japanese temple
  "https://images.unsplash.com/photo-1528164344705-47542687000d", // Japanese shrine
  "https://images.unsplash.com/photo-1601823984263-b87b59798b00", // Winter landscape
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", // Temple at night
  "https://images.unsplash.com/photo-1493997181344-712f2f19d87a", // Mountain lake
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-transparent">
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <img 
              src="/lovable-uploads/83c68e77-3dd0-4763-a625-9071182b3664.png" 
              alt="Positive Travel Logo" 
              className="h-16 w-auto"
            />

            {/* Phone Number - Centered */}
            <div className="flex-1 text-center">
              <span className="text-white text-sm inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Make a call: +91 94974 58282
              </span>
            </div>

            {/* Desktop Navigation - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <a href="#" className="text-white hover:text-white/80 transition-colors">Home</a>
                <a href="#about" className="text-white hover:text-white/80 transition-colors">About</a>
                <a href="#services" className="text-white hover:text-white/80 transition-colors">Services</a>
                <a href="#contact" className="text-white hover:text-white/80 transition-colors">Contact Us</a>
              </div>
              <div className="flex items-center space-x-6">
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

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-0 bg-black/95 z-50 md:hidden"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <motion.div className="flex flex-col items-center space-y-8">
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
