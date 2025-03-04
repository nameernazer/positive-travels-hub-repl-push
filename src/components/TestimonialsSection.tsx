
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The best travel experience I've ever had. Their attention to detail and personalized service was outstanding.",
    author: "Priya Menon",
    location: "Kerala, India"
  },
  {
    quote: "They made planning our family trip completely stress-free. Every recommendation was perfect!",
    author: "Mohammed Al-Sayed",
    location: "Dubai, UAE"
  },
  {
    quote: "Professional, reliable, and truly exceptional service. Will definitely book with them again.",
    author: "Ahmed Hassan",
    location: "Qatar"
  },
  {
    quote: "An incredible journey planned to perfection. The team went above and beyond.",
    author: "Lisa Thompson",
    location: "Australia"
  },
  {
    quote: "Amazing attention to cultural details and excellent coordination throughout the trip.",
    author: "Rajesh Kumar",
    location: "Karnataka, India"
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Touch handling for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Required minimum swipe distance in pixels
  const minSwipeDistance = 50;

  const next = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Handle touch start event
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move event
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end event
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  // Handle mouse drag events for desktop
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
          next();
        } else {
          prev();
        }
      }
      
      setIsDragging(false);
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prev();
      } else if (e.key === 'ArrowRight') {
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        <div 
          className="max-w-4xl mx-auto relative overflow-hidden"
          ref={sliderRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <div className={`${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center"
            >
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
              <p className="text-xl md:text-2xl font-medium mb-6">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="space-y-2">
                <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
                <p className="text-muted-foreground">{testimonials[currentTestimonial].location}</p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
