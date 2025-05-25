import React, { useState } from 'react';

export const App = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { text: input, isUser: true };
    setMessages([...messages, userMessage]);

    // Simulate app response
    setTimeout(() => {
      const appMessage = { text: `You said: "${input}"`, isUser: false };
      setMessages((prev) => [...prev, appMessage]);
    }, 500);

    setInput('');
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen text-gray-800 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Chat with the App</h1>
          <p className="text-gray-600 font-inter text-sm mt-1">Type a message and see the app respond</p>
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

        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
