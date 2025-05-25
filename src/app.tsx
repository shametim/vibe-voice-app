export const App = () => {
  return (
    <div className="dark bg-green-900 min-h-screen text-white p-8">
      <div className="max-w-3xl mx-auto bg-white text-gray-800 rounded-lg shadow-lg p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-franklin mb-2">John Doe</h1>
          <p className="text-gray-600 font-inter">Software Engineer | Full-Stack Developer</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Personal Info</h2>
          <div className="space-y-2">
            <p><span className="font-semibold">Email:</span> john.doe@example.com</p>
            <p><span className="font-semibold">Phone:</span> (123) 456-7890</p>
            <p><span className="font-semibold">Location:</span> San Francisco, CA</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Professional Summary</h2>
          <p className="text-gray-600 font-inter">
            A passionate software engineer with 5+ years of experience in building scalable web applications using modern
            technologies. Skilled in both front-end and back-end development with a focus on clean code and user-centric design.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Work Experience</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Senior Software Engineer</h3>
            <p className="text-gray-600 font-inter">Tech Corp, San Francisco · 2020 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-600 font-inter">
              <li>Lead development of a high-traffic web application using React and Node.js.</li>
              <li>Improved performance by 40% through code optimization and caching strategies.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Software Engineer</h3>
            <p className="text-gray-600 font-inter">Innovate Inc, New York · 2017 - 2020</p>
            <ul className="list-disc list-inside mt-2 text-gray-600 font-inter">
              <li>Developed and maintained internal tools using Python and Django.</li>
              <li>Collaborated with cross-functional teams to deliver features on time.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Education</h2>
          <div>
            <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 font-inter">University of California, Berkeley · 2013 - 2017</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">JavaScript</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">TypeScript</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">React</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">Node.js</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">Python</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">Django</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">SQL</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">Git</span>
          </div>
        </section>
      </div>
    </div>
  );
};
