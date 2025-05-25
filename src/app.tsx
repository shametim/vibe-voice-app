import { useEffect, useState } from 'react';

export const App = () => {
  const [cvFile, setCvFile] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    document.title = "Amy's Architectural Journey | Aspiring Architect";

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file.name);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      {/* Status Bar */}
      <div className="fixed top-0 left-0 right-0 h-10 bg-gray-800 flex items-center justify-between px-4 z-50">
        <div className="text-gray-300 text-sm">{currentTime}</div>
        <div className="flex items-center space-x-2 text-gray-300 text-sm">
          <span>WiFi</span>
          <span>•</span>
          <span>Battery 90%</span>
        </div>
      </div>

      {/* Taskbar */}
      <div className="fixed left-0 top-10 bottom-0 w-16 bg-gray-800 flex flex-col items-center justify-start p-2 space-y-4 z-40">
        <button className="p-2 rounded hover:bg-gray-700 transition">
          <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </button>
        <button className="p-2 rounded hover:bg-gray-700 transition">
          <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </button>
        <button className="p-2 rounded hover:bg-gray-700 transition">
          <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="pt-16 pl-16 px-6 pb-6">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-white">
              Amy Nguyen
            </h1>
            <p className="text-teal-300 font-medium text-lg mt-2">Future Architect | Class of '25</p>
            <p className="text-indigo-300 text-sm mt-1">University of Michigan</p>
          </header>

          <section className="mb-8">
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-600">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold text-white">Education</h2>
                <button className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <p className="font-semibold text-white text-lg">University of Michigan School of Architecture</p>
              <p className="text-teal-300 text-base">BArch Candidate, Class of 2025</p>
              <p className="text-indigo-300 text-sm mt-1">Specializing in Sustainable Design</p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-600">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold text-white">About Me</h2>
                <button className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <p className="text-teal-300 font-medium text-base leading-relaxed">
                I'm a passionate architecture student with a focus on sustainable and human-centered design. I enjoy creating spaces that foster community and environmental responsibility. Outside of the studio, I love exploring urban landscapes, sketching, and experimenting with 3D modeling.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-600">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold text-white">Professional Highlights</h2>
                <button className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <ul className="list-disc list-inside text-teal-300 font-medium text-sm space-y-2">
                <li>Proficient in AutoCAD, Revit, and SketchUp</li>
                <li>Experience in sustainable design and energy modeling</li>
                <li>Collaborative project management and team leadership</li>
                <li>Volunteer work in community design initiatives</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-600">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold text-white">Interests</h2>
                <button className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <ul className="list-disc list-inside text-teal-300 font-medium text-sm space-y-2">
                <label htmlFor="cv-upload" className="cursor-pointer">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    Upload CV (PDF)
                  </li>
                </label>
                <input
                  id="cv-upload"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {cvFile && (
                  <li className="text-teal-300 text-sm">
                    Selected: <span className="font-medium">{cvFile}</span>
                  </li>
                )}
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-600">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold text-white">Understanding Structural Integrity</h2>
                <button className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <p className="text-teal-300 font-medium text-base leading-relaxed mb-4">
                Structural integrity is the foundation of any successful architectural design. It ensures that buildings are not only aesthetically pleasing but also safe and functional. Understanding load distribution, material properties, and environmental factors is essential for creating resilient structures.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-teal-300 font-semibold text-sm mb-2">Key Factors</h3>
                  <ul className="text-teal-300 text-sm space-y-1">
                    <li>• Material strength and durability</li>
                    <li>• Load-bearing capacity</li>
                    <li>• Environmental impact</li>
                    <li>• Design constraints</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-teal-300 font-semibold text-sm mb-2">Common Issues</h3>
                  <ul className="text-teal-300 text-sm space-y-1">
                    <li>• Poor foundation design</li>
                    <li>• Inadequate reinforcement</li>
                    <li>• Material fatigue</li>
                    <li>• Improper load distribution</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-teal-300 font-semibold text-sm mb-2">Design Tips</h3>
                <ul className="text-teal-300 text-sm space-y-1">
                  <li>• Use structural analysis software for simulations</li>
                  <li>• Prioritize material sustainability</li>
                  <li>• Collaborate with engineers early in the design process</li>
                  <li>• Consider long-term maintenance and adaptability</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-600">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold text-white">Math Involvement</h2>
                <button className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="text-center border-2 border-teal-500 rounded-lg p-4 bg-gray-700">
                <p className="text-teal-300 text-sm mb-2">Golden Ratio:</p>
                <div className="text-2xl font-mono text-white">
                  φ = <span className="ml-1">(1 + √5) ÷ 2</span>
                </div>
              </div>
              {/* New funny addition */}
              <div className="mt-4 p-4 border-l-4 border-yellow-500 bg-gray-800">
                <p className="text-yellow-300 font-medium text-sm">
                  Fun fact: Why did the golden ratio break up with the Fibonacci sequence? It felt like it was being followed everywhere! 😂
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-600">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold text-white">Personal Profile</h2>
                <button className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 border border-teal-500 rounded-lg">
                  <svg className="w-6 h-6 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-white text-sm">Siblings</p>
                    <p className="text-teal-300 text-sm">1 sister, Sarah. We fight a lot but love each other deeply.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
