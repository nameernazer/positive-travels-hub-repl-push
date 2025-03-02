
import { useEffect } from 'react';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Compass } from 'lucide-react';

const TourPackagesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
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
  ];

  const benefits = [
    "Stress-free travel planning",
    "Best value for money",
    "Authentic local experiences",
    "Flexible booking options",
    "Guaranteed departures",
    "Professional tour management"
  ];

  const contactInfo = {
    phone: "+91 94974 58282",
    email: "positivetravelandholidays@gmail.com",
    whatsapp: "+91 75939 46666"
  };

  return (
    <ServiceLayout
      title="Tour Packages"
      description="Discover our carefully curated tour packages designed to give you the best travel experience"
      bgImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
    >
      <div className="container-custom py-16">
        <div className="mb-12">
          <Compass className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold mb-4">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="bg-primary/20 text-primary rounded-full p-1">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-secondary/10 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">For more information about our tour packages, please get in touch:</p>
          <div className="space-y-2">
            <p>Phone: <a href={`tel:${contactInfo.phone}`} className="text-primary hover:underline">{contactInfo.phone}</a></p>
            <p>Email: <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">{contactInfo.email}</a></p>
            <p>WhatsApp: <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, '')}`} className="text-primary hover:underline">{contactInfo.whatsapp}</a></p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default TourPackagesPage;
