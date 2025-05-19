"use client";

import ChatInterface from '@/src/components/ChatInterface';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="w-full max-w-5xl">
        <motion.header 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-blue-800 mb-3"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            Thoughtful AI Support
          </motion.h1>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Ask me anything about Thoughtful AI's intelligent agents for healthcare automation!
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">EVA</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">CAM</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">PHIL</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Healthcare</span>
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">Automation</span>
          </motion.div>
        </motion.header>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden h-[70vh] border border-gray-100 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ChatInterface />
        </motion.div>
        
        <motion.footer 
          className="mt-8 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>© {new Date().getFullYear()} Thoughtful AI. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">Terms of Service</a>
            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">Contact Us</a>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
