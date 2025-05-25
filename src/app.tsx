import React, { useState } from 'react';

export const App = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);

  const handleVoiceCommand = () => {
    const userMessage = { text: 'User spoke', isUser: true };
    setMessages([...messages, userMessage]);

    // Simulate app response
    setTimeout(() => {
      const appMessage = { text: 'App responded', isUser: false };
      setMessages((prev) => [...prev, appMessage]);
    }, 500);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen text-gray-800 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Chat with{' '}
            <span className="font-franklin-gothic-medium">Vibe Voice</span>
          </h1>
          <p className="text-gray-600 font-inter text-sm mt-1">Click to speak</p>
          <button
            onClick={handleVoiceCommand}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Say Something
          </button>
        </header>

        <div className="h-96 overflow-y-auto mb-6 border border-gray-200 rounded-lg p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs sm:max-w-md ${
                msg.isUser
                  ? 'bg-blue-100 ml-auto text-right'
                  : 'bg-gray-100 text-left'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
