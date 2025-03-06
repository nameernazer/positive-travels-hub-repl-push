
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    region: "asia",
    title: "Asia",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&w=800&q=75",
    description: "Experience ancient traditions and modern wonders"
  },
  {
    region: "europe",
    title: "Europe",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&w=800&q=75",
    description: "Journey through centuries of history and culture"
  },
  {
    region: "middle-east",
    title: "Middle East",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&w=800&q=75",
    description: "Where tradition meets luxury"
  },
  {
    region: "north-america",
    title: "North America",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&w=800&q=75",
    description: "From coast to coast adventures"
  },
  {
    region: "south-america",
    title: "South America",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&w=800&q=75",
    description: "Natural wonders and ancient civilizations"
  }
];

export default function DestinationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setEndX(e.clientX);
    }
  };

  const onMouseUp = () => {
    if (isDragging) {
      const distance = startX - endX;
      
      if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      
      setIsDragging(false);
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Preload visible and adjacent images
  useEffect(() => {
    const preloadImages = () => {
      // Load current, next and previous images
      const indexesToLoad = [
        currentIndex,
        (currentIndex + 1) % destinations.length,
        (currentIndex - 1 + destinations.length) % destinations.length
      ];
      
      indexesToLoad.forEach(index => {
        const img = new Image();
        img.src = destinations[index].image;
        img.onload = () => {
          setImagesLoaded(prev => ({...prev, [index]: true}));
        };
      });
    };
    
    preloadImages();
  }, [currentIndex]);

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
          <div 
            className="overflow-hidden touch-pan-y"
            ref={sliderRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
          >
            <div 
              className={`flex transition-transform duration-500 ease-out ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {destinations.map((destination, index) => (
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
                      {/* Show a placeholder while image loads */}
                      {!imagesLoaded[index] && (
                        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                      )}
                      <img 
                        src={destination.image} 
                        alt={destination.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        draggable="false"
                        loading={Math.abs(index - currentIndex) <= 1 ? "eager" : "lazy"}
                        onLoad={() => setImagesLoaded(prev => ({...prev, [index]: true}))}
                        style={{opacity: imagesLoaded[index] ? 1 : 0}}
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
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors z-10"
            aria-label="Previous destination"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors z-10"
            aria-label="Next destination"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
