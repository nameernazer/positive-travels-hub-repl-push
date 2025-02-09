
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The best travel experience I've ever had. Their attention to detail and personalized service was outstanding.",
    author: "Priya Menon",
    location: "Kerala, India"
  },
  {
    quote: "They made planning our family trip completely stress-free. Every recommendation was perfect!",
    author: "Rajesh Kumar",
    location: "Karnataka, India"
  },
  {
    quote: "Professional, reliable, and truly exceptional service. Will definitely book with them again.",
    author: "Anitha Krishnan",
    location: "Tamil Nadu, India"
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const next = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-secondary/30">
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

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
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

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
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
