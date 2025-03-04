
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from './TestimonialData';

interface TestimonialCardProps {
  testimonial: Testimonial;
  currentIndex: number;
}

export default function TestimonialCard({ testimonial, currentIndex }: TestimonialCardProps) {
  return (
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-center"
    >
      <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
      <p className="text-xl md:text-2xl font-medium mb-6">
        {testimonial.quote}
      </p>
      <div className="space-y-2">
        <p className="font-semibold">{testimonial.author}</p>
        <p className="text-muted-foreground">{testimonial.location}</p>
      </div>
    </motion.div>
  );
}
