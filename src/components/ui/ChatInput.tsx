import React from 'react';
import { motion } from 'framer-motion';
import { ChangeEvent } from '@/src/types';

interface ChatInputProps {
  value: string;
  onChange: (e: ChangeEvent) => void;
  onSubmit: (e: React.FormEvent) => void;
  disabled: boolean;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  value, 
  onChange, 
  onSubmit, 
  disabled,
  isLoading 
}) => {
  return (
    <motion.form 
      onSubmit={onSubmit} 
      className="border-t p-4 bg-white rounded-b-xl shadow-md"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Type your question about Thoughtful AI..."
          className="flex-1 p-3 border border-gray-200 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          disabled={disabled}
        />
        <motion.button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-r-xl hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 transition-all"
          disabled={disabled || !value.trim()}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ChatInput; 