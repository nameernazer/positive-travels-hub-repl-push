
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-48 bg-cover bg-center mb-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
        </div>
      </div>

      <div className="container-custom">
        <div className="flex flex-col gap-4">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link to="/" className="flex flex-col sm:flex-row items-center gap-3">
            <img 
              src="/lovable-uploads/8907c8a8-e2fd-447f-81ef-c2b9988b4098.png" 
              alt="Positive Travel Logo" 
              className="h-12 sm:h-10 w-auto"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-xl font-bold">Positive Travel and Holidays</h1>
              <p className="text-sm text-muted-foreground">Your trusted travel partner</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to make your travel dreams a reality. Our dedicated team provides 24/7 support 
            to ensure your journey is seamless from start to finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
            <p className="text-sm text-muted-foreground mt-2">Available 24/7</p>
          </motion.a>

          <motion.a
            href="mailto:positivetravelandholidays@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-6 hover:bg-secondary/10 rounded-lg transition-colors"
          >
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground">positivetravelandholidays@gmail.com</p>
            <p className="text-sm text-muted-foreground mt-2">Quick response guaranteed</p>
          </motion.a>

          <motion.a
            href="https://wa.me/917593946666"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-6 hover:bg-secondary/10 rounded-lg transition-colors"
          >
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground">+91 75939 46666</p>
            <p className="text-sm text-muted-foreground mt-2">Instant messaging support</p>
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
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-muted-foreground">Malappuram, Kerala, India</p>
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
            <p className="text-muted-foreground">Positive Travel and Holidays</p>
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
            <p className="text-muted-foreground">@positivetravelandholidays</p>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
