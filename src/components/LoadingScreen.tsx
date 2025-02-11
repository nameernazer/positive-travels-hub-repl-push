
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="relative">
        <img 
          src="/lovable-uploads/7edb967b-2e30-4aa9-a94c-c2684850f4e2.png"
          alt="Loading Logo"
          className="w-24 h-24 object-contain"
          loading="eager"
        />
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
