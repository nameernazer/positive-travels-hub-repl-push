
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    region: "asia",
    title: "Asia",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    description: "Experience ancient traditions and modern wonders"
  },
  {
    region: "europe",
    title: "Europe",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    description: "Journey through centuries of history and culture"
  },
  {
    region: "middle-east",
    title: "Middle East",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    description: "Where tradition meets luxury"
  },
  {
    region: "north-america",
    title: "North America",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74",
    description: "From coast to coast adventures"
  },
  {
    region: "south-america",
    title: "South America",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    description: "Natural wonders and ancient civilizations"
  }
];

export default function DestinationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <section className="section-padding bg-white" id="destinations">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider">Our Destinations</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Explore the World with Us
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover incredible destinations and create unforgettable memories
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {destinations.map((destination) => (
                <div 
                  key={destination.region}
                  className="w-full flex-shrink-0"
                >
                  <Link to={`/destinations/${destination.region}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="group relative overflow-hidden rounded-2xl aspect-[4/3] mx-4"
                    >
                      <img 
                        src={destination.image} 
                        alt={destination.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                        <h3 className="text-2xl font-bold text-white mb-2">{destination.title}</h3>
                        <p className="text-white/90 mb-4">{destination.description}</p>
                        <span className="text-white font-medium inline-flex items-center">
                          Learn More
                          <span className="ml-2">→</span>
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
