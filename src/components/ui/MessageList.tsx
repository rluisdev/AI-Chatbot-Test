import React, { RefObject } from 'react';
import { Message } from '@/src/types';
import { MessageItem } from '@/src/components/message';
import LoadingIndicator from './LoadingIndicator';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
  messagesEndRef: RefObject<HTMLDivElement>;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  isLoading,
  messagesEndRef
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50 rounded-t-xl">
      {messages.map((message: Message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      {isLoading && <LoadingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList; 