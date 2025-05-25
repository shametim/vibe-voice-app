import React, { useState, useEffect } from 'react';

export const App = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    setCurrentDate(new Date().toDateString());
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <div className="max-w-md mx-auto mt-10 text-center">
        <h1 className="text-4xl font-bold text-pink-500 underline mb-4 hover:scale-105 transition-transform duration-200">Heyo Ming! 😄</h1>
        <p className="text-lg text-gray-700">Today is {currentDate}</p>
      </div>
    </div>
  );
};
