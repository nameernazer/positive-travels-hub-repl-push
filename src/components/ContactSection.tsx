
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Travel Street, City Center",
    action: "Get Directions",
    href: "#"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 234 567 890",
    action: "Call Now",
    href: "tel:+1234567890"
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@positivetravel.com",
    action: "Send Email",
    href: "mailto:hello@positivetravel.com"
  },
  {
    icon: Instagram,
    title: "Follow Us",
    content: "@positivetravel",
    action: "View Profile",
    href: "#"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "+1 234 567 890",
    action: "Message Us",
    href: "https://wa.me/1234567890"
  }
];

export default function ContactSection() {
  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Contact Us</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Let's Plan Your Next Adventure
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey? Reach out to us through any of these channels
            and we'll be happy to help you plan your perfect trip.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl border bg-card hover:bg-secondary/50 transition-colors"
            >
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mt-2">{item.content}</p>
              <p className="mt-4 text-primary font-medium group-hover:text-primary/80 transition-colors">
                {item.action} →
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
