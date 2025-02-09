
import { MapPin, Phone, Mail, Instagram, MessageCircle, Facebook } from 'lucide-react';

const socialInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Positive Travel and Holidays, Malappuram, Kerala, India",
    action: "Get Directions",
    href: "https://www.google.com/maps/place/POSITIVE+TRAVEL+AND+HOLIDAYS/@10.877443,75.9829016,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7b1196a6f0e15:0x8a8842a1bc3902c9!8m2!3d10.8774377!4d75.9854765!16s%2Fg%2F11lmqz43ly?entry=ttu"
  },
  {
    icon: Instagram,
    title: "Follow Us",
    content: "@positivetravelandholidays",
    action: "View Profile",
    href: "https://www.instagram.com/positivetravelandholidays"
  },
  {
    icon: Facebook,
    title: "Facebook",
    content: "Positive Travel and Holidays",
    action: "Visit Page",
    href: "https://www.facebook.com/share/19rhFzkc4q/"
  }
];

const contactInfo = [
  {
    icon: Phone,
    content: "+91 94974 58282",
    href: "tel:+919497458282"
  },
  {
    icon: Mail,
    content: "positivetravelandholidays@gmail.com",
    href: "mailto:positivetravelandholidays@gmail.com"
  },
  {
    icon: MessageCircle,
    content: "+91 75939 46666",
    href: "https://wa.me/917593946666"
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Positive Travel and Holidays is dedicated to creating unforgettable travel experiences 
              for our clients. We specialize in personalized travel solutions and exceptional service.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#vision" className="text-gray-400 hover:text-white transition-colors">Our Vision</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-4">
              {socialInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.content}</span>
                </a>
              ))}
              {contactInfo.map((item) => (
                <a
                  key={item.content}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.content}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Positive Travel and Holidays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
