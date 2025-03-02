
import { useEffect } from 'react';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Clock, Headphones, CreditCard } from 'lucide-react';

const HotelReservationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout
      title="Hotel Reservations"
      description="Find your perfect stay with our premium hotel booking service"
      bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945"
    >
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          <div>
            <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Booking</h3>
            <p className="text-muted-foreground">Quick and easy hotel reservations worldwide</p>
          </div>
          <div>
            <Headphones className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">Round-the-clock assistance for your stay</p>
          </div>
          <div>
            <CreditCard className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Rates</h3>
            <p className="text-muted-foreground">Guaranteed best prices and special deals</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Book With Us?</h2>
          
          <p className="text-lg mb-6">
            We partner with the finest hotels worldwide to offer you exceptional accommodations at competitive prices. Our extensive network ensures you'll find the perfect place to stay.
          </p>

          <h3 className="text-xl font-semibold mb-4">Our hotel booking services include:</h3>
          
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Access to luxury and boutique hotels</li>
            <li>Special corporate rates</li>
            <li>Group booking discounts</li>
            <li>Flexible cancellation policies</li>
            <li>24/7 customer support</li>
            <li>Personalized recommendations</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default HotelReservationsPage;
