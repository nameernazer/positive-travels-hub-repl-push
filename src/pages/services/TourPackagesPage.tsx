import { useEffect } from 'react';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Compass } from 'lucide-react';

const TourPackagesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout
      title="Tour Packages"
      description="Discover our carefully curated tour packages designed to give you the best travel experience"
      icon={Compass}
      features={[
        {
          title: "Customized Itineraries",
          description: "Personalized travel plans tailored to your preferences and schedule"
        },
        {
          title: "Expert Local Guides",
          description: "Knowledgeable guides who bring destinations to life with their insights"
        },
        {
          title: "All-Inclusive Options",
          description: "Comprehensive packages covering accommodation, transport, and activities"
        },
        {
          title: "Group Tours",
          description: "Join like-minded travelers for shared adventures and experiences"
        },
        {
          title: "Luxury Experiences",
          description: "Premium travel experiences with high-end accommodations and services"
        },
        {
          title: "24/7 Support",
          description: "Round-the-clock assistance throughout your journey"
        }
      ]}
      benefits={[
        "Stress-free travel planning",
        "Best value for money",
        "Authentic local experiences",
        "Flexible booking options",
        "Guaranteed departures",
        "Professional tour management"
      ]}
      contactInfo={{
        phone: "+91 94974 58282",
        email: "positivetravelandholidays@gmail.com",
        whatsapp: "+91 75939 46666"
      }}
    />
  );
};

export default TourPackagesPage;
