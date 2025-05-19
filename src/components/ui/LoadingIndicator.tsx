import React from 'react';
import { motion } from 'framer-motion';

const LoadingIndicator: React.FC = () => (
  <div className="flex items-center space-x-2 p-3 bg-white rounded-xl shadow-sm max-w-[200px] mr-auto my-4">
    <motion.div
      className="w-3 h-3 bg-blue-400 rounded-full"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
    <motion.div
      className="w-3 h-3 bg-blue-500 rounded-full"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
    />
    <motion.div
      className="w-3 h-3 bg-blue-600 rounded-full"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
    />
  </div>
);

export default LoadingIndicator; 