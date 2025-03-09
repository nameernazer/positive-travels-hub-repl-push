
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider">About Us</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Our Journey in Travel Excellence
          </h2>
        </motion.div>

        {/* Changed flex-col to flex-row on all screen sizes with adjusted widths for mobile */}
        <div className="flex flex-row gap-4 md:gap-12">
          {/* Founder's Photo - Updated for side-by-side layout even on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-1/3 md:w-1/4 flex justify-center"
          >
            <div className="w-full max-w-[120px] xs:max-w-[150px] sm:max-w-[220px] md:max-w-[280px]">
              <img 
                src="/lovable-uploads/03a67081-0275-4f88-94b6-ecab70c60bd8.png" 
                alt="Nazer EP - Founder" 
                className="w-full aspect-square object-cover rounded-xl"
                loading="eager"
                width="280"
                height="280"
                decoding="async"
                fetchPriority="high"
              />
              <div className="text-center mt-2 md:mt-3 pb-2">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">Nazer EP</p>
                <p className="text-[#8E9196] font-medium text-xs sm:text-sm">Founder</p>
              </div>
            </div>
          </motion.div>
          
          {/* About Text - Adjusted for side-by-side layout on all screens */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-2/3 md:w-3/4"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-4">Welcome to Positive Travel and Holidays</h3>
            <p className="text-muted-foreground mb-3 md:mb-6 text-xs sm:text-sm md:text-base">
              Under the visionary leadership of Mr. Nazer EP, Positive Travel and Holidays has emerged as a trusted name in the travel industry. With years of experience and deep industry knowledge, Mr. Nazer EP has built a company dedicated to creating exceptional travel experiences.
            </p>
            <p className="text-muted-foreground mb-4 md:mb-8 text-xs sm:text-sm md:text-base">
              Our success is built on our commitment to excellence and our dedicated 24/7 support team, ensuring that our customers receive seamless assistance whenever they need it. We take pride in turning travel dreams into reality with personalized service and attention to detail.
            </p>
            
            {/* Mission and Support sections - Adjusted for responsiveness */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mt-2 md:mt-4">
              <div className="bg-secondary/30 p-3 md:p-6 rounded-lg">
                <h4 className="text-sm md:text-xl font-semibold mb-1 md:mb-2">Our Mission</h4>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                  To provide extraordinary travel experiences while ensuring customer satisfaction through our 24/7 dedicated support and personalized service.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-3 md:p-6 rounded-lg">
                <h4 className="text-sm md:text-xl font-semibold mb-1 md:mb-2">24/7 Support</h4>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                  Our team is available round the clock to assist you with any queries or support you need during your journey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
