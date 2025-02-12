
import { useParams, Link } from 'react-router-dom';
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { motion } from "framer-motion";
import { Plane, Hotel, FileText, Compass } from "lucide-react";

const destinationData = {
  asia: {
    title: "Discover Asia",
    description: "Experience the perfect blend of ancient traditions and modern wonders",
    bgImage: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    content: "From the bustling streets of Tokyo to the serene temples of Thailand, Asia offers an incredible diversity of experiences. Explore ancient traditions, savor exotic cuisines, and immerse yourself in rich cultural heritage."
  },
  europe: {
    title: "Explore Europe",
    description: "Journey through centuries of history and culture",
    bgImage: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    content: "Discover the charm of historic cities, indulge in world-class cuisine, and experience the sophistication of European culture. From the romantic streets of Paris to the ancient ruins of Rome."
  },
  "middle-east": {
    title: "Experience the Middle East",
    description: "Where tradition meets luxury",
    bgImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    content: "Immerse yourself in the magical world of Arabian nights, explore ancient civilizations, and experience world-class luxury. From the modern marvels of Dubai to the historic treasures of Petra."
  },
  "north-america": {
    title: "Discover North America",
    description: "From coast to coast adventures",
    bgImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74",
    content: "Experience the diversity of landscapes, from bustling cities to breathtaking national parks. Explore iconic landmarks, vibrant culture, and natural wonders across the United States and Canada."
  },
  "south-america": {
    title: "Adventure in South America",
    description: "Explore natural wonders and ancient civilizations",
    bgImage: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    content: "Journey through the Amazon rainforest, witness the majesty of Machu Picchu, and experience the vibrant culture of South American cities. An adventure of a lifetime awaits."
  }
};

const services = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Direct flights and convenient connections to all major cities",
    link: "/services/flights"
  },
  {
    icon: Hotel,
    title: "Hotel Accommodations",
    description: "Handpicked hotels and resorts for every budget",
    link: "/services/hotels"
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Complete visa processing support",
    link: "/services/visa"
  },
  {
    icon: Compass,
    title: "Tour Packages",
    description: "Curated experiences and guided tours",
    link: "/services/tours"
  }
];

const DestinationPage = () => {
  const { region } = useParams();
  const destination = destinationData[region as keyof typeof destinationData];

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <ServiceLayout
      title={destination.title}
      description={destination.description}
      bgImage={destination.bgImage}
    >
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {destination.content}
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Our Services in {destination.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link to={service.link} className="text-primary hover:text-primary/80 transition-colors">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </ServiceLayout>
  );
};

export default DestinationPage;
