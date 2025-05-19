import React from 'react';
import { motion } from 'framer-motion';

interface ErrorMessageProps {
  title: string;
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ title, message }) => {
  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-r-md" 
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{message}</p>
    </motion.div>
  );
};

export default ErrorMessage; 