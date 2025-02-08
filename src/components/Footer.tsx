
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const socialInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Travel Street, City Center",
    action: "Get Directions",
    href: "#"
  },
  {
    icon: Instagram,
    title: "Follow Us",
    content: "@positivetravel",
    action: "View Profile",
    href: "#"
  }
];

const contactInfo = [
  {
    icon: Phone,
    content: "+1 234 567 890",
    href: "tel:+1234567890"
  },
  {
    icon: Mail,
    content: "hello@positivetravel.com",
    href: "mailto:hello@positivetravel.com"
  },
  {
    icon: MessageCircle,
    content: "+1 234 567 890",
    href: "https://wa.me/1234567890"
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
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Vision</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Visit & Follow Us</h3>
            <div className="space-y-4">
              {socialInfo.map((item) => (
                <a
                  key={item.title}
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
