import React from 'react';

export const App = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl relative flex flex-col bg-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
        <p className="text-xl text-gray-600 mt-2">Software Engineer | Web Developer | Open Source Contributor</p>
        <div className="mt-4 flex justify-center space-x-4 text-gray-500">
          <span>john.doe@example.com</span>
          <span>•</span>
          <span>(555) 123-4567</span>
          <span>•</span>
          <span>linkedin.com/in/johndoe</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Contact & Summary */}
        <div className="md:col-span-1 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Professional Summary</h2>
            <p className="text-gray-600 leading-relaxed">
              Results-driven software engineer with 5+ years of experience building scalable web applications. 
              Specialized in full-stack development with a focus on React and Node.js. Passionate about clean code 
              and collaborative agile environments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Technical Skills</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• JavaScript/TypeScript, React, Node.js</li>
              <li>• REST APIs, GraphQL</li>
              <li>• MongoDB, PostgreSQL</li>
              <li>• Docker, AWS</li>
              <li>• Agile/Scrum, CI/CD</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Education</h2>
            <div className="text-gray-600">
              <p><strong>Bachelor of Science in Computer Science</strong></p>
              <p>University of Techlandia, 2015-2019</p>
              <p>Graduated with honors (GPA: 3.8/4.0)</p>
            </div>
          </section>
        </div>

        {/* Right Column - Experience */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Professional Experience</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800">Senior Software Engineer</h3>
              <p className="text-gray-500 mb-2">InnovateTech Solutions • 2020 - Present</p>
              <ul className="list-disc list-inside text-gray-600 ml-5 space-y-1">
                <li>Lead development of company's flagship SaaS product used by 100k+ users</li>
                <li>Architected microservices using Node.js and Docker, reducing deployment time by 40%</li>
                <li>Implemented CI/CD pipelines with GitHub Actions and AWS</li>
                <li>Mentored 5 junior developers and conducted code reviews</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800">Software Engineer</h3>
              <p className="text-gray-500 mb-2">CodeCraft Inc • 2018 - 2020</p>
              <ul className="list-disc list-inside text-gray-600 ml-5 space-y-1">
                <li>Developed and maintained React-based dashboard for enterprise clients</li>
                <li>Integrated third-party APIs for payment processing and analytics</li>
                <li>Improved application performance by 35% through code optimization</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Projects</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-800">Open Source Blog Platform</h3>
              <p className="text-gray-500 mb-1">React + Node.js + MongoDB</p>
              <p className="text-gray-600 text-sm">Full-stack blogging platform with real-time collaboration features</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">Task Management App</h3>
              <p className="text-gray-500 mb-1">Vue.js + Firebase</p>
              <p className="text-gray-600 text-sm">Cross-platform task manager with calendar integration and team collaboration</p>
            </div>
          </section>
        </div>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>123 Main Street, Tech City, TC 12345</p>
        <p>Resume last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
};
