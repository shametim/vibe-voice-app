import React, { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    document.title = 'Welcome to My App';
  }, []);

  return (
    <div className="dark bg-purple-950 min-h-screen text-white p-8">
      {/* Navigation Bar */}
      <h1 className="text-5xl font-franklin-gothic-medium mb-8">Hey there! Welcome to My App</h1>
    </div>
  );
};
