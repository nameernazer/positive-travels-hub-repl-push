
import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Logo in top-left corner */}
      <div className="absolute top-6 left-6 z-50">
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
      
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {children}
    </div>
  );
};

export default MainLayout;
