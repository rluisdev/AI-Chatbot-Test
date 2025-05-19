import React from 'react';
import { formatTime } from '@/src/utils';

interface MessageTimeProps {
  timestamp: Date;
}

const MessageTime: React.FC<MessageTimeProps> = ({ timestamp }) => {
  return (
    <div className="text-xs opacity-70">
      {formatTime(timestamp)}
    </div>
  );
};

export default MessageTime; 