import React, { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    document.title = 'Hey There! Welcome to My App';
  }, []);

  return (
    <div className="dark bg-blue-900 min-h-screen text-white p-8">
      {/* Navigation Bar */}
      <h1 className="text-5xl font-franklin mb-8">Hey there! Welcome to My App</h1>
    </div>
  );
};
