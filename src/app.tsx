import '../styles.css';

export const App = () => {
  return (
    <div className="dark bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 font-franklin-gothic-medium">John Doe</h1>
          <p className="text-gray-400 text-lg">Software Engineer | Web Developer</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
            <span>john.doe@example.com</span>
            <span>•</span>
            <span>(555) 123-4567</span>
            <span>•</span>
            <span>linkedin.com/in/johndoe</span>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <div className="flex justify-between mb-1">
              <h3 className="font-medium">Senior Software Engineer</h3>
              <span className="text-sm text-gray-400">2020 - Present</span>
            </div>
            <p className="text-gray-400 mb-1">Tech Corp</p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Lead development of 3 major web applications</li>
              <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
              <li>Mentored 5 junior developers</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <div className="flex justify-between mb-1">
              <h3 className="font-medium">BS Computer Science</h3>
              <span className="text-sm text-gray-400">2016 - 2020</span>
            </div>
            <p className="text-gray-400">University of Technology</p>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Python', 'AWS'].map((skill) => (
              <span 
                key={skill} 
                className="bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
