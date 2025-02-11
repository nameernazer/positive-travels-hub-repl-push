import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const destinations = [
  {
    region: "Asia",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    description: "Discover the wonders of ancient traditions and modern marvels"
  },
  {
    region: "Europe",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    description: "Explore the rich history and diverse cultures of Europe"
  },
  {
    region: "Middle East",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    description: "Experience the blend of tradition and luxury in the Middle East"
  },
  {
    region: "North America",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74",
    description: "Experience the natural beauty and vibrant cities of North America"
  },
  {
    region: "South America",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    description: "Adventure through lush rainforests and ancient ruins"
  }
];

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <Link to="/">
              <img 
                src="/lovable-uploads/83c68e77-3dd0-4763-a625-9071182b3664.png" 
                alt="Positive Travel Logo" 
                className="h-16 mx-auto mb-8"
              />
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Destinations</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover amazing places and create unforgettable memories
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img 
                src={destination.image} 
                alt={destination.region}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{destination.region}</h3>
                <p className="text-white/90">{destination.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
