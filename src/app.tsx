import '../styles.css';

export const App = () => {
  return (
    <div className="dark bg-purple-950 min-h-screen text-white p-8">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-purple-900 p-4 z-50 shadow-md border-b border-purple-800">
        <div className="flex gap-4 overflow-x-auto pb-2">
          <a
            href="#about"
            className="px-4 py-2 bg-purple-700 text-white rounded font-franklin hover:bg-purple-800 transition-colors whitespace-nowrap"
          >
            About
          </a>
          <a
            href="#education"
            className="px-4 py-2 bg-purple-700 text-white rounded font-franklin hover:bg-purple-800 transition-colors whitespace-nowrap"
          >
            Education
          </a>
          <a
            href="#experience"
            className="px-4 py-2 bg-purple-700 text-white rounded font-franklin hover:bg-purple-800 transition-colors whitespace-nowrap"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="px-4 py-2 bg-purple-700 text-white rounded font-franklin hover:bg-purple-800 transition-colors whitespace-nowrap"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-4 py-2 bg-purple-700 text-white rounded font-franklin hover:bg-purple-800 transition-colors whitespace-nowrap"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-purple-700 text-white rounded font-franklin hover:bg-purple-800 transition-colors whitespace-nowrap"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto pt-20 space-y-8">
        {/* About Section */}
        <div id="about" className="bg-purple-900 rounded-lg p-6 mb-8 border border-purple-800 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-purple-200 mb-4">
            👋 Hi! I'm a dental student at the University of Michigan and I'm really into patient care and helping people love their smiles. I'm always eager to learn and apply what I know in real-world settings.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-purple-300">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Ann Arbor, MI</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>amy@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>(555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="bg-purple-900 rounded-lg p-6 mb-8 border border-purple-800 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">University of Michigan School of Dentistry</h3>
              <span className="text-purple-300">2022 - 2026</span>
            </div>
            <p className="text-purple-200 mt-2">Doctor of Dental Surgery (DDS)</p>
            <p className="text-purple-300 mt-1">GPA: 3.8/4.0 | Dean's List (2022, 2023)</p>
            <p className="text-purple-300 mt-1">Certified Dental Assistant (CDA) - 2021</p>
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="bg-purple-900 rounded-lg p-6 mb-8 border border-purple-800 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Clinical Experience</h2>
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">General Dental Assistant</h3>
              <span className="text-purple-300">2021 - 2022</span>
            </div>
            <p className="text-purple-200 mt-2">Provided patient care support in a private dental practice, including sterilization of instruments, patient education, and treatment room setup.</p>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="bg-purple-900 rounded-lg p-6 mb-8 border border-purple-800 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">Clinical</h3>
              <ul className="text-purple-200 text-sm space-y-1">
                <li>• Patient assessment and treatment planning</li>
                <li>• Dental charting and documentation</li>
                <li>• Infection control protocols</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Technical</h3>
              <ul className="text-purple-200 text-sm space-y-1">
                <li>• CAD/CAM dental software</li>
                <li>• Digital radiography</li>
                <li>• Practice management systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="bg-purple-900 rounded-lg p-6 mb-8 border border-purple-800 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="mb-6 border-b border-purple-800 pb-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Dental Patient Education App</h3>
              <span className="text-purple-300">2023 - 2024</span>
            </div>
            <p className="text-purple-200 mt-2">Developed a mobile app to help patients understand dental procedures and maintain oral hygiene through interactive content and reminders.</p>
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">3D Dental Model Printer</h3>
              <span className="text-purple-300">2022</span>
            </div>
            <p className="text-purple-200 mt-2">Designed and implemented a 3D printing system for creating accurate dental models for educational and clinical use.</p>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-purple-900 rounded-lg p-6 border border-purple-800 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
          <div className="flex flex-wrap gap-4">
            <a href="https://linkedin.com" className="text-purple-300 hover:text-purple-200 transition-colors underline">LinkedIn Profile</a>
            <a href="mailto:amy@example.com" className="text-purple-300 hover:text-purple-200 transition-colors underline">Email Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};
