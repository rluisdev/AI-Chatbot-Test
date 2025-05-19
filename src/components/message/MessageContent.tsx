import React from 'react';

interface MessageContentProps {
  text: string;
  isUser: boolean;
}

const MessageContent: React.FC<MessageContentProps> = ({ text, isUser }) => {
  return (
    <div className={`${isUser ? 'text-white' : 'text-gray-700'}`}>
      {text}
    </div>
  );
};

export default MessageContent; 