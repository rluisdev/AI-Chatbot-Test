import React from 'react';
import { FaUser, FaRobot } from 'react-icons/fa';

interface MessageAvatarProps {
  isUser: boolean;
}

const MessageAvatar: React.FC<MessageAvatarProps> = ({ isUser }) => {
  return (
    <div 
      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
        isUser ? 'bg-blue-400 text-white' : 'bg-blue-100 text-blue-600'
      }`}
    >
      {isUser ? <FaUser /> : <FaRobot />}
    </div>
  );
};

export default MessageAvatar; 