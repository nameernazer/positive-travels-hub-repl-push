
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <Link to="/" className="inline-block mb-8">
          <img 
            src="/lovable-uploads/8f0267f0-7d97-4a6d-9237-a5f35bd98571.png"
            alt="Positive Travel and Holidays Logo" 
            className="h-16 w-auto mx-auto mb-4"
          />
          <h1 className="text-xl font-bold text-gray-900">Positive Travel and Holidays</h1>
        </Link>
        <h2 className="text-4xl font-bold mb-4 text-gray-900">404</h2>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="text-primary hover:text-primary/80 font-medium transition-colors">
          Return to Home →
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
