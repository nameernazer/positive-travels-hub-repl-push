
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "@/components/layouts/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist :(</p>
          <Link to="/" className="text-primary hover:text-primary/80 font-medium transition-colors">
            Return to Home →
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
