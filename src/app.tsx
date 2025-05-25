export const App = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen text-gray-800 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-1">Martin</h1>
          <p className="text-gray-600 font-inter text-lg">Software Engineer | Full-Stack Developer</p>
        </header>

        <section className="mb-8 border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Personal Info</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Email:</span> john.doe@example.com</p>
            <p><span className="font-medium">Phone:</span> (123) 456-7890</p>
            <p><span className="font-medium">Location:</span> San Francisco, CA</p>
          </div>
        </section>

        <section className="mb-8 border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Professional Summary</h2>
          <p className="text-gray-600 font-inter leading-relaxed">
            A passionate software engineer with 5+ years of experience in building scalable web applications using modern
            technologies. Skilled in both front-end and back-end development with a focus on clean code and user-centric design.
          </p>
        </section>

        <section className="mb-8 border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Work Experience</h2>

          <div className="mb-6">
            <h3 className="font-medium text-lg text-gray-800">Senior Software Engineer</h3>
            <p className="text-gray-600 font-inter">Tech Corp, San Francisco · 2020 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-600 font-inter space-y-1">
              <li>Lead development of a high-traffic web application using React and Node.js.</li>
              <li>Improved performance by 40% through code optimization and caching strategies.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg text-gray-800">Software Engineer</h3>
            <p className="text-gray-600 font-inter">Innovate Inc, New York · 2017 - 2020</p>
            <ul className="list-disc list-inside mt-2 text-gray-600 font-inter space-y-1">
              <li>Developed and maintained internal tools using Python and Django.</li>
              <li>Collaborated with cross-functional teams to deliver features on time.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education</h2>
          <div>
            <h3 className="font-medium text-lg text-gray-800">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 font-inter">University of California, Berkeley · 2013 - 2017</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 transition">JavaScript</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 transition">TypeScript</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 transition">React</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 transition">Node.js</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 transition">Python</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 transition">Django</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 transition">SQL</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 transition">Git</span>
          </div>
        </section>
      </div>
    </div>
  );
};
