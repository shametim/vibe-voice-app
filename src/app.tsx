import '../styles.css';

export const App = () => {
  return (
    <div className="dark bg-purple-900 min-h-screen text-white p-8">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-purple-900 p-4 z-50">
        <div className="flex gap-4 overflow-x-auto">
          <a
            href="#about"
            className="px-4 py-2 bg-purple-700 text-white rounded font-franklin hover:bg-purple-600 transition-colors"
          >
            About
          </a>
          <a
            href="#education"
            className="px-4 py-2 bg-purple-700 text-white rounded font-franklin hover:bg-purple-600 transition-colors"
          >
            Education
          </a>
          <a
            href="#experience"
            className="px-4 py-2 bg-purple-700 text-white rounded font-franklin hover:bg-purple-600 transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="px-4 py-2 bg-purple-700 text-white rounded font-franklin hover:bg-purple-600 transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-purple-700 text-white rounded font-franklin hover:bg-purple-600 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto pt-20">
        {/* About Section */}
        <div id="about" className="bg-purple-800 rounded-lg p-6 mb-8 border border-purple-700">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-purple-300 mb-4">
            👋 Hi there! I'm a dental student at the University of Michigan who's super passionate about patient care and helping people love their smiles. I'm always looking for ways to grow and apply what I've learned in real-world settings.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-purple-400">
            <div>📍 Ann Arbor, MI</div>
            <div>📧 amy@example.com</div>
            <div>📱 (555) 123-4567</div>
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="bg-purple-800 rounded-lg p-6 mb-8 border border-purple-700">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-6">
            <div className="flex justify-between">
              <h3 className="text-xl font-bold">University of Michigan School of Dentistry</h3>
              <span className="text-purple-400">2022 - 2026</span>
            </div>
            <p className="text-purple-300 mt-2">Doctor of Dental Surgery (DDS)</p>
            <p className="text-purple-400 mt-1">GPA: 3.8/4.0 | Dean's List (2022, 2023)</p>
            <p className="text-purple-400 mt-1">Certified Dental Assistant (CDA) - 2021</p>
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="bg-purple-800 rounded-lg p-6 mb-8 border border-purple-700">
          <h2 className="text-2xl font-bold mb-4">Clinical Experience</h2>
          <div className="mb-6">
            <div className="flex justify-between">
              <h3 className="font-bold">General Dental Assistant</h3>
              <span className="text-purple-400">2021 - 2022</span>
            </div>
            <p className="text-purple-300 mt-2">Provided patient care support in a private dental practice, including sterilization of instruments, patient education, and treatment room setup.</p>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="bg-purple-800 rounded-lg p-6 mb-8 border border-purple-700">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">Clinical</h3>
              <ul className="text-purple-300 text-sm space-y-1">
                <li>• Patient assessment and treatment planning</li>
                <li>• Dental charting and documentation</li>
                <li>• Infection control protocols</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Technical</h3>
              <ul className="text-purple-300 text-sm space-y-1">
                <li>• CAD/CAM dental software</li>
                <li>• Digital radiography</li>
                <li>• Practice management systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-purple-800 rounded-lg p-6 border border-purple-700">
          <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
          <div className="flex flex-wrap gap-4">
            <a href="https://linkedin.com" className="text-purple-400 hover:text-purple-300 transition-colors">LinkedIn Profile</a>
            <a href="mailto:amy@example.com" className="text-purple-400 hover:text-purple-300 transition-colors">Email Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};
