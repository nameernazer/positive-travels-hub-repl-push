
import { motion } from 'framer-motion';
import { Plane, Hotel, Compass, FileText } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Find the best flights with our global airline partnerships."
  },
  {
    icon: FileText,
    title: "Visa Services",
    description: "Hassle-free visa processing for your desired destinations."
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Luxurious stays at handpicked hotels worldwide."
  },
  {
    icon: Compass,
    title: "Tour Packages",
    description: "Curated experiences that showcase the best of each destination."
  }
];

export default function ServicesSection() {
  return (
    <section className="section-padding" id="services">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Comprehensive Travel Solutions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer a complete range of travel services to make your journey seamless and memorable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl border bg-card hover:bg-secondary/50 transition-colors"
            >
              <service.icon className="w-12 h-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
              <div className="mt-4 flex items-center justify-start">
                <span className="text-primary font-medium group-hover:text-primary/80 transition-colors inline-flex items-center">
                  Learn More
                  <span className="inline-block ml-1 relative top-[1px]">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
