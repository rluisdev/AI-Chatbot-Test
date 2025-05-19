import React from 'react';
import MessageAvatar from './MessageAvatar';
import MessageTime from './MessageTime';

interface MessageHeaderProps {
  isUser: boolean;
  timestamp: Date;
}

const MessageHeader: React.FC<MessageHeaderProps> = ({ isUser, timestamp }) => {
  return (
    <div className="flex items-center mb-2">
      <MessageAvatar isUser={isUser} />
      <div className="ml-2 text-sm font-semibold">
        {isUser ? 'You' : 'Thoughtful AI Support'}
      </div>
      <div className="ml-auto">
        <MessageTime timestamp={timestamp} />
      </div>
    </div>
  );
};

export default MessageHeader; 