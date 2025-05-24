import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen text-gray-800 flex flex-col items-center justify-start p-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl font-bold font-franklin-gothic-medium p-4 text-blue-500 text-center">
          Hi! This is [Your Name]
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Continuous Learning</h3>
              <p className="text-sm text-gray-600 mt-1">
                I thrive on acquiring new skills and understanding complex systems. Whether it's diving into
                emerging technologies like AI or refining my knowledge of software architecture, I'm always
                looking to grow and adapt.
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded flex items-start">
              <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-blue-700">Problem Solving</h3>
                <p className="text-sm text-gray-600 mt-1">
                  I get excited about finding creative solutions to technical challenges. Breaking down complex
                  problems into manageable parts and building elegant solutions is what drives my passion for
                  development.
                </p>
              </div>
            </div>
            <div className="p-3 bg-blue-50 rounded flex items-start">
              <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-blue-700">Collaboration</h3>
                <p className="text-sm text-gray-600 mt-1">
                  I believe great things happen when people work together and share knowledge. I enjoy working
                  in teams, exchanging ideas, and mentoring others to help everyone grow and succeed.
                </p>
              </div>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Quality Craftsmanship</h3>
              <p className="text-sm text-gray-600 mt-1">
                I take pride in creating clean, maintainable code that stands the test of time. Writing
                well-documented, scalable, and efficient code is a core part of my development philosophy.
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Innovation</h3>
              <p className="text-sm text-gray-600 mt-1">
                I'm always looking for ways to push boundaries and create something new. Whether it's
                experimenting with new frameworks or rethinking traditional approaches, innovation is a key
                part of my journey.
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Community Impact</h3>
              <p className="text-sm text-gray-600 mt-1">
                I believe in using my skills to make a positive impact. Contributing to open-source projects,
                sharing knowledge through blogs or talks, and helping others learn are all ways I give back
                to the developer community.
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">User-Centric Design</h3>
              <p className="text-sm text-gray-600 mt-1">
                I prioritize the end-user in every project. Understanding user needs and designing intuitive
                interfaces that enhance the user experience is a core part of my development process.
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Sustainability</h3>
              <p className="text-sm text-gray-600 mt-1">
                I'm committed to building applications that are not only functional but also sustainable.
                This includes optimizing performance, reducing resource usage, and considering long-term
                maintainability.
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Automation</h3>
              <p className="text-sm text-gray-600 mt-1">
                I enjoy automating repetitive tasks to improve efficiency and reduce errors. From CI/CD
                pipelines to testing and deployment, automation is a key part of my workflow.
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Mentorship</h3>
              <p className="text-sm text-gray-600 mt-1">
                I believe in the power of mentorship. Sharing my knowledge and guiding others helps me
                reinforce my own understanding and contribute to the growth of the next generation of
                developers.
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Scalability</h3>
              <p className="text-sm text-gray-600 mt-1">
                I design systems with scalability in mind. Whether it's handling increased traffic or
                supporting new features, I focus on building architectures that can grow with the needs of
                the project.
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-700">Adaptability</h3>
              <p className="text-sm text-gray-600 mt-1">
                The tech landscape is always changing, and I embrace that. I'm comfortable learning new
                tools, adapting to new workflows, and staying flexible in the face of evolving project
                requirements.
              </p>
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
