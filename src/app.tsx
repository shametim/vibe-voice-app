import React from 'react';

export const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">John Doe</h1>
          <p className="text-gray-600 font-inter text-lg mt-2">Software Engineer | Full Stack Developer</p>
        </header>

        <section className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 font-inter leading-relaxed">
            I'm a passionate software engineer with 5+ years of experience building scalable web applications and APIs. 
            I specialize in full-stack development using modern frameworks like React, Node.js, and TypeScript.
          </p>
        </section>

        <section className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Senior Software Engineer</h3>
              <p className="text-gray-500 font-inter">Tech Corp | Jan 2020 – Present</p>
              <p className="text-gray-600 font-inter mt-2">
                Led the development of a high-traffic SaaS platform using React and Node.js. Improved performance by 40% and reduced server costs by 25%.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Software Engineer</h3>
              <p className="text-gray-500 font-inter">InnovateX | Jun 2017 – Dec 2019</p>
              <p className="text-gray-600 font-inter mt-2">
                Built and maintained internal tools and APIs for a growing team of 50+ developers. Focused on backend architecture and CI/CD pipelines.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-500 font-inter">University of Tech | 2013 – 2017</p>
          </div>
        </section>

        <section className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">React</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Node.js</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">TypeScript</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Python</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">AWS</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Docker</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600 font-inter">
            Email: <a href="mailto:john.doe@example.com" className="text-blue-600 hover:text-blue-800 hover:underline transition">john.doe@example.com</a>
          </p>
          <p className="text-gray-600 font-inter mt-2">
            LinkedIn: <a href="https://linkedin.com/in/johndoe" className="text-blue-600 hover:text-blue-800 hover:underline transition">linkedin.com/in/johndoe</a>
          </p>
        </section>
      </div>
    </div>
  );
};
