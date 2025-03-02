
import { useEffect } from 'react';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Plane } from 'lucide-react';

const FlightBookingsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout
      title="Flight Bookings"
      description="Book your flights with confidence. We offer competitive rates and a hassle-free booking experience."
      bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Why Book With Us?</h3>
          <ul className="space-y-2">
            <li>✓ Best price guarantee</li>
            <li>✓ 24/7 customer support</li>
            <li>✓ Flexible booking options</li>
            <li>✓ Multiple airlines comparison</li>
            <li>✓ Special corporate rates</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Our Services Include</h3>
          <ul className="space-y-2">
            <li>• Domestic and international flights</li>
            <li>• Group booking discounts</li>
            <li>• Last-minute deals</li>
            <li>• Multi-city bookings</li>
            <li>• Premium class upgrades</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">How to Book</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-secondary/20 rounded-lg">
            <h4 className="font-semibold mb-2">1. Contact Us</h4>
            <p className="text-muted-foreground">
              Reach out to our team with your travel requirements and preferences.
            </p>
          </div>
          <div className="p-6 bg-secondary/20 rounded-lg">
            <h4 className="font-semibold mb-2">2. Get Options</h4>
            <p className="text-muted-foreground">
              We'll provide you with the best available flight options and prices.
            </p>
          </div>
          <div className="p-6 bg-secondary/20 rounded-lg">
            <h4 className="font-semibold mb-2">3. Confirm & Pay</h4>
            <p className="text-muted-foreground">
              Choose your preferred option and complete the secure booking process.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-primary/10 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Need Assistance?</h3>
        <p className="text-lg mb-4">
          Our travel experts are here to help you find the best flights for your journey.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+919497458282"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/917593946666"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-white border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default FlightBookingsPage;
