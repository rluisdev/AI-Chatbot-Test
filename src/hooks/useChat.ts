import { useState, useEffect, useRef } from 'react';
import { Message } from '@/src/types';
import { sendQuery, checkHealth } from '@/src/services/api';
import { generateId, delay } from '@/src/utils';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateId(),
      text: "Hello! I'm the Thoughtful AI Support Assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState<boolean | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkApiHealth = async () => {
      const status = await checkHealth();
      setApiStatus(status);
    };

    checkApiHealth();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: generateId(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendQuery(input.trim());

      await delay(1500);
      
      const botMessage: Message = {
        id: generateId(),
        text: response.answer,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prevMessages: Message[]) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      
      const errorMessage: Message = {
        id: generateId(),
        text: 'Sorry, I encountered an error. Please try again later.',
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prevMessages: Message[]) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    apiStatus,
    messagesEndRef,
    handleSubmit
  };
}; 