
import { useEffect } from 'react';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Hotel } from 'lucide-react';

const HotelReservationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout
      title="Hotel Reservations"
      description="We offer a wide range of hotel options to suit your needs and budget"
      bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945"
    >
      <div className="container-custom py-16">
        <h1 className="text-4xl font-bold mb-8">Hotel Reservations</h1>
        <p className="text-lg mb-4">
          We offer a wide range of hotel options to suit your needs. Whether you're looking for luxury or budget-friendly accommodations, we have you covered.
        </p>
        <p className="text-lg mb-4">
          Our team is dedicated to finding the perfect hotel for your stay, ensuring a comfortable and enjoyable experience.
        </p>
        <p className="text-lg mb-4">
          Contact us today to start planning your hotel reservations!
        </p>
        <div className="mt-8">
          <Hotel className="w-12 h-12 text-primary mb-4" />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default HotelReservationsPage;
