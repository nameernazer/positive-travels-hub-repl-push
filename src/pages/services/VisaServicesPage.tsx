
import { useEffect } from 'react';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { FileText } from 'lucide-react';

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
        <h1 className="text-4xl font-bold mb-4">Visa Services</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We provide comprehensive visa services to ensure a smooth travel experience. Our team is here to assist you with all your visa needs.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Visa consultation and advice</li>
          <li>Document preparation and submission</li>
          <li>Tracking and updates on visa status</li>
          <li>Assistance with visa interviews</li>
        </ul>
      </div>
    </ServiceLayout>
  );
};

export default VisaServicesPage;
