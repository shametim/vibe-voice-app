import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen text-gray-800 flex flex-col items-center justify-start p-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl font-bold font-franklin-gothic-medium p-4 text-blue-500 text-center">
          Hey! This is me
        </h1>
        
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold font-franklin-gothic-medium text-blue-600 mb-3">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a curious developer who loves building things that solve real problems. When I'm not coding, 
            you'll find me exploring new technologies or helping others learn. My goal is to create 
            beautiful, functional experiences that make people's lives better.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold font-franklin-gothic-medium text-blue-600 mb-3">What Drives Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Continuous Learning</h3>
              <p className="text-sm text-gray-600 mt-1">I thrive on acquiring new skills and understanding complex systems.</p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Problem Solving</h3>
              <p className="text-sm text-gray-600 mt-1">I get excited about finding creative solutions to technical challenges.</p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Collaboration</h3>
              <p className="text-sm text-gray-600 mt-1">I believe great things happen when people work together and share knowledge.</p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Quality Craftsmanship</h3>
              <p className="text-sm text-gray-600 mt-1">I take pride in creating clean, maintainable code that stands the test of time.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold font-franklin-gothic-medium text-blue-600 mb-3">My Journey</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <div>
                <h3 className="font-semibold text-blue-700">Started Coding</h3>
                <p className="text-sm text-gray-600 mt-1">Begun my journey with HTML/CSS and JavaScript in 2018</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <div>
                <h3 className="font-semibold text-blue-700">Full Stack Development</h3>
                <p className="text-sm text-gray-600 mt-1">Expanded skills to include React, Node.js, and modern web frameworks</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <div>
                <h3 className="font-semibold text-blue-700">Current Focus</h3>
                <p className="text-sm text-gray-600 mt-1">Focusing on building scalable applications with clean architecture and user-centric design</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
