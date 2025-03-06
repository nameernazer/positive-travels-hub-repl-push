
import { useState } from 'react';
import { motion } from 'framer-motion';
import { destinations } from './DestinationTypes';
import { DestinationSlider } from './DestinationSlider';
import { SliderControls } from './SliderControls';

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
          <DestinationSlider destinations={destinations} />
          <SliderControls onPrevClick={prevSlide} onNextClick={nextSlide} />
        </div>
      </div>
    </section>
  );
}
