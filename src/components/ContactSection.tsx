
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 94974 58282",
    action: "Call Now",
    href: "tel:+919497458282"
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "positivetravelandholidays@gmail.com",
    action: "Send Email",
    href: "mailto:positivetravelandholidays@gmail.com"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "+91 75939 46666",
    action: "Message Us",
    href: "https://wa.me/917593946666"
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
          <span className="text-primary font-medium uppercase tracking-wider">Contact Us</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Let's Plan Your Next Adventure
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to start your journey? Reach out to us through any of these channels
            and we'll be happy to help you plan your perfect trip.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
