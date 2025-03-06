
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './LoadingScreen';
import { Navigation } from './Navigation/Navigation';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import { useImagePreloader } from './hero/useImagePreloader';
import { Link } from 'react-router-dom';

const images = [
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&w=1920&q=80",
  "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?auto=format&w=1920&q=80",
  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&w=1920&q=80",
  "https://images.unsplash.com/photo-1601823984263-b87b59798b00?auto=format&w=1920&q=80",
  "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&w=1920&q=80",
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&w=1920&q=80",
  "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?auto=format&w=1920&q=80",
  "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&w=1920&q=80",
  "https://images.unsplash.com/photo-1597998593641-5c27455adf87?auto=format&w=1920&q=80",
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&w=1920&q=80",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loadedImages, isLoading } = useImagePreloader(images);

  useEffect(() => {
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
        {/* Logo in top-left corner */}
        <div className="absolute top-6 left-6 z-50">
          <Link to="/">
            <img 
              src="/lovable-uploads/83c68e77-3dd0-4763-a625-9071182b3664.png" 
              alt="Positive Travel Logo" 
              className="h-14 w-auto"
            />
          </Link>
        </div>
        
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <HeroBackground 
          images={images} 
          currentImage={currentImage} 
          loadedImages={loadedImages} 
        />
        
        <HeroContent scrollToSection={scrollToSection} />
      </div>
    </>
  );
}
