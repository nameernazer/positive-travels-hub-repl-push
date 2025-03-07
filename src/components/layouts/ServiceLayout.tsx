
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MainLayout from "./MainLayout";

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  bgImage: string;
}

const ServiceLayout = ({ children, title, description, bgImage }: ServiceLayoutProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.src = `${bgImage}?auto=format&w=1200&q=60`;
    img.onload = () => setImageLoaded(true);
    
    window.scrollTo(0, 0);
  }, [bgImage]);

  return (
    <MainLayout>
      <div className="relative h-[50vh] bg-cover bg-center mt-24"> {/* Added margin-top to account for navigation */}
        {/* Placeholder before image loads */}
        <div className={`absolute inset-0 bg-gray-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
        
        {/* Background image - using optimized version */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${bgImage}?auto=format&w=1200&q=60)` }}
        ></div>
        
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Centered title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{description}</p>
          </div>
        </div>
      </div>
      
      {children}

      <div className="container-custom py-16">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-primary/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-muted-foreground mb-6">
            Contact us now and let us help you plan your perfect trip.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Get in Touch <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default ServiceLayout;
