import React from 'react';
import { motion } from 'framer-motion';
import { ChangeEvent } from '@/src/types';
import { useChat } from '@/src/hooks';
import { 
  ChatInput, 
  ErrorMessage, 
  MessageList 
} from '@/src/components/ui';

const ChatInterface: React.FC = () => {
  const {
    messages,
    input,
    setInput,
    isLoading,
    apiStatus,
    messagesEndRef,
    handleSubmit
  } = useChat();

  const handleInputChange = (e: ChangeEvent) => {
    setInput(e.target.value);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full max-w-4xl mx-auto"
    >
      {apiStatus === false && (
        <ErrorMessage 
          title="API Unavailable" 
          message="The backend API is currently unavailable. Please check your connection and try again." 
        />
      )}

      <MessageList 
        messages={messages}
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
      />

      <ChatInput 
        value={input}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        disabled={isLoading || apiStatus === false}
        isLoading={isLoading}
      />
    </motion.div>
  );
};

export default ChatInterface; 