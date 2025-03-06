
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  bgImage: string;
}

const ServiceLayout = ({ children, title, description, bgImage }: ServiceLayoutProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.src = `${bgImage}?auto=format&w=1200&q=60`;
    img.onload = () => setImageLoaded(true);
    
    // Preload the logo
    const logo = new Image();
    logo.src = "/lovable-uploads/83c68e77-3dd0-4763-a625-9071182b3664.png";
    logo.onload = () => setLogoLoaded(true);
    
    window.scrollTo(0, 0);
  }, [bgImage]);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] bg-cover bg-center">
        {/* Placeholder before image loads */}
        <div className={`absolute inset-0 bg-gray-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
        
        {/* Background image - using optimized version */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${bgImage}?auto=format&w=1200&q=60)` }}
        ></div>
        
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <Link to="/">
              {!logoLoaded && (
                <div className="h-16 w-48 mx-auto mb-8 bg-gray-500/20 animate-pulse rounded"></div>
              )}
              <img 
                src="/lovable-uploads/83c68e77-3dd0-4763-a625-9071182b3664.png" 
                alt="Positive Travel Logo" 
                className={`h-16 mx-auto mb-8 transition-opacity duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
                width="192" 
                height="64"
                onLoad={() => setLogoLoaded(true)}
              />
            </Link>
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
    </div>
  );
};

export default ServiceLayout;
