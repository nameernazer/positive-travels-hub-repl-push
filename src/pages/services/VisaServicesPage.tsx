
import { useEffect } from 'react';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Clock, Headphones, CreditCard } from 'lucide-react';

const VisaServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout
      title="Visa Services"
      description="We provide comprehensive visa services to ensure a smooth travel experience"
      bgImage="https://images.unsplash.com/photo-1569008863968-64d2240bb208"
    >
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          <div>
            <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
            <p className="text-muted-foreground">Quick and efficient visa application handling</p>
          </div>
          <div>
            <Headphones className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-muted-foreground">Professional assistance throughout the process</p>
          </div>
          <div>
            <CreditCard className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
            <p className="text-muted-foreground">Competitive pricing for all visa services</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Visa Services?</h2>
          
          <p className="text-lg mb-6">
            We provide comprehensive visa services to ensure a smooth travel experience. Our team is here to assist you with all your visa needs.
          </p>

          <h3 className="text-xl font-semibold mb-4">Our visa services include:</h3>
          
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Visa consultation and advice</li>
            <li>Document preparation and submission</li>
            <li>Tracking and updates on visa status</li>
            <li>Assistance with visa interviews</li>
            <li>Express visa processing</li>
            <li>Multiple visa type handling</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default VisaServicesPage;
