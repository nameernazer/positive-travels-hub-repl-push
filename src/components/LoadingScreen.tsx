
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const dots = [...Array(12)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-white rounded-full"
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
        delay: i * 0.1,
      }}
      style={{
        transform: `rotate(${i * 30}deg) translateY(-40px)`,
        transformOrigin: '50% 50%',
      }}
    />
  ));

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
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {dots}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
