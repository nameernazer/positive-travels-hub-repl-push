
import { useEffect } from 'react';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Clock, Headphones, CreditCard } from 'lucide-react';

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
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          <div>
            <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Booking</h3>
            <p className="text-muted-foreground">Quick and easy flight reservations worldwide</p>
          </div>
          <div>
            <Headphones className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">Round-the-clock assistance for your journey</p>
          </div>
          <div>
            <CreditCard className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Rates</h3>
            <p className="text-muted-foreground">Guaranteed best prices and special deals</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Book With Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
        </div>
      </div>
    </ServiceLayout>
  );
};

export default FlightBookingsPage;
