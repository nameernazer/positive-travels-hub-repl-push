
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
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Our Services</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Comprehensive Travel Solutions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
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
              <button className="mt-4 text-primary font-medium group-hover:text-primary/80 transition-colors">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
