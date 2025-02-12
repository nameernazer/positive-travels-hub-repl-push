
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-8">
        <Link to="/">
          <img 
            src="/lovable-uploads/8907c8a8-e2fd-447f-81ef-c2b9988b4098.png" 
            alt="Positive Travel Logo" 
            className="h-12 w-auto"
          />
        </Link>
      </div>

      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for personalized travel assistance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 max-w-5xl mx-auto">
          <motion.a
            href="tel:+919497458282"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-6 hover:bg-secondary/10 rounded-lg transition-colors"
          >
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-muted-foreground">+91 94974 58282</p>
          </motion.a>

          <motion.a
            href="https://wa.me/917593946666"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-6 hover:bg-secondary/10 rounded-lg transition-colors"
          >
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground">+91 75939 46666</p>
          </motion.a>

          <motion.a
            href="mailto:positivetravelandholidays@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-6 hover:bg-secondary/10 rounded-lg transition-colors"
          >
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">positivetravelandholidays@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://www.google.com/maps/place/POSITIVE+TRAVEL+AND+HOLIDAYS/@10.877443,75.9829016,17z/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-6 hover:bg-secondary/10 rounded-lg transition-colors"
          >
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">Kerala, India</p>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/share/19rhFzkc4q/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center p-6 hover:bg-secondary/10 rounded-lg transition-colors"
          >
            <Facebook className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Facebook</h3>
            <p className="text-muted-foreground">Follow Us</p>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/positivetravelandholidays"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center p-6 hover:bg-secondary/10 rounded-lg transition-colors"
          >
            <Instagram className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <p className="text-muted-foreground">Follow Us</p>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
