import React from 'react';
import { motion } from 'framer-motion';
import { Message } from '@/src/types';
import MessageHeader from './MessageHeader';
import MessageContent from './MessageContent';

interface MessageItemProps {
  message: Message;
  key?: string | number;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`mb-4 p-5 rounded-2xl max-w-[85%] shadow-sm ${
        message.isUser 
          ? 'ml-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
          : 'mr-auto bg-white border border-gray-100 text-gray-800'
      }`}
    >
      <MessageHeader 
        isUser={message.isUser} 
        timestamp={message.timestamp} 
      />
      <div className="pl-10">
        <MessageContent 
          text={message.text} 
          isUser={message.isUser} 
        />
      </div>
    </motion.div>
  );
};

export default MessageItem; 