
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Preload logo
    const logo = new Image();
    logo.src = "/lovable-uploads/83c68e77-3dd0-4763-a625-9071182b3664.png";
    logo.onload = () => setLogoLoaded(true);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {/* Logo in top-left corner */}
      <div className="absolute top-6 left-6 z-10">
        <Link to="/">
          {!logoLoaded && (
            <div className="h-14 w-40 bg-gray-500/20 animate-pulse rounded"></div>
          )}
          <img 
            src="/lovable-uploads/83c68e77-3dd0-4763-a625-9071182b3664.png" 
            alt="Positive Travel Logo" 
            className={`h-14 w-auto transition-opacity duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
            width="160" 
            height="56"
            onLoad={() => setLogoLoaded(true)}
          />
        </Link>
      </div>
      
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="text-primary hover:text-primary/80 font-medium transition-colors">
          Return to Home →
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
