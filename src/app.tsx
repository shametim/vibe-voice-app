import { useEffect, useState } from 'react';

export const App = () => {
  const [cvFile, setCvFile] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('home');

  useEffect(() => {
    document.title = "Amy's Architect Journey | Future Architect";

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
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      {/* Status Bar */}
      <div className="fixed top-0 left-0 right-0 h-10 bg-gray-100 flex items-center justify-between px-4 z-50">
        <div className="flex items-center space-x-2">
          <img src="https://i.pravatar.cc/32" alt="Profile" className="w-6 h-6 rounded-full" />
          <div className="text-gray-600 text-sm">{currentTime}</div>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <span>WiFi</span>
          <span>•</span>
          <span>Battery 90%</span>
        </div>
      </div>

      {/* Story Highlights */}
      <div className="fixed top-12 left-4 flex space-x-2 z-40">
        <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
          <img src="https://i.pravatar.cc/40" alt="Story 1" className="w-10 h-10 rounded-full" />
        </div>
        <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
          <img src="https://i.pravatar.cc/40" alt="Story 2" className="w-10 h-10 rounded-full" />
        </div>
        <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
          <img src="https://i.pravatar.cc/40" alt="Story 3" className="w-10 h-10 rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 px-4 pb-20">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex items-center space-x-4">
              <img src="https://i.pravatar.cc/64" alt="Amy" className="w-16 h-16 rounded-full" />
              <div>
                <h1 className="text-xl font-bold">Amy Nguyen</h1>
                <p className="text-gray-500 text-sm">Future Architect | Class of '25</p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Education</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <p className="font-semibold text-gray-800 text-base">University of Michigan School of Architecture</p>
            <p className="text-gray-600 text-sm">BArch Candidate, Class of 2025</p>
            <p className="text-gray-500 text-xs mt-1">Specializing in Sustainable Design</p>
          </div>

          {/* About Me Card */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">About Me</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              I'm a passionate architecture student with a focus on sustainable and human-centered design. I enjoy creating spaces that foster community and environmental responsibility. Outside of the studio, I love exploring urban landscapes, sketching, and experimenting with 3D modeling.
            </p>
          </div>

          {/* Professional Highlights Card */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Professional Highlights</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <ul className="list-disc list-inside text-gray-600 font-medium text-sm space-y-1">
              <li>Proficient in AutoCAD, Revit, and SketchUp</li>
              <li>Experience in sustainable design and energy modeling</li>
              <li>Collaborative project management and team leadership</li>
              <li>Volunteer work in community design initiatives</li>
            </ul>
          </div>

          {/* Interests Card */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Interests</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <label htmlFor="cv-upload" className="cursor-pointer">
              <div className="flex items-center text-gray-600 font-medium text-sm">
                <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                Upload CV (PDF)
              </div>
            </label>
            <input
              id="cv-upload"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            {cvFile && (
              <p className="text-gray-600 text-sm mt-2">
                Selected: <span className="font-medium">{cvFile}</span>
              </p>
            )}
          </div>

          {/* Structural Integrity Card */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Understanding Structural Integrity</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <p className="text-gray-600 font-medium text-sm leading-relaxed mb-4">
              Structural integrity is the foundation of any successful architectural design. It ensures that buildings are not only aesthetically pleasing but also safe and functional. Understanding load distribution, material properties, and environmental factors is essential for creating resilient structures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-gray-700 font-semibold text-xs mb-1">Key Factors</h3>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>• Material strength and durability</li>
                  <li>• Load-bearing capacity</li>
                  <li>• Environmental impact</li>
                  <li>• Design constraints</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-gray-700 font-semibold text-xs mb-1">Common Issues</h3>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>• Poor foundation design</li>
                  <li>• Inadequate reinforcement</li>
                  <li>• Material fatigue</li>
                  <li>• Improper load distribution</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-gray-700 font-semibold text-xs mb-1">Design Tips</h3>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Use structural analysis software for simulations</li>
                <li>• Prioritize material sustainability</li>
                <li>• Collaborate with engineers early in the design process</li>
                <li>• Consider long-term maintenance and adaptability</li>
              </ul>
            </div>
          </div>

          {/* Math Involvement Card */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Math Involvement</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="text-center border-2 border-pink-500 rounded-lg p-3 bg-gray-50">
              <p className="text-gray-600 text-xs mb-1">Golden Ratio:</p>
              <div className="text-base font-mono text-gray-800">
                φ = <span className="ml-1">(1 + √5) ÷ 2</span>
              </div>
            </div>
            <div className="mt-3 p-3 border-l-4 border-yellow-500 bg-gray-50">
              <p className="text-yellow-500 font-medium text-xs">
                Fun fact: Why did the golden ratio break up with the Fibonacci sequence? It felt like it was being followed everywhere! 😂
              </p>
            </div>
          </div>

          {/* Personal Profile Card */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Personal Profile</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-3 border border-pink-500 rounded-lg">
                <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
                <div>
                  <p className="font-semibold text-gray-800 text-xs">Siblings</p>
                  <p className="text-gray-600 text-xs">1 sister, Sarah. We fight a lot but love each other deeply.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-14 z-50">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center justify-center text-gray-600 ${activeTab === 'home' ? 'text-pink-500' : ''}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
        </button>
        <button
          onClick={() => setActiveTab('search')}
          className={`flex flex-col items-center justify-center text-gray-600 ${activeTab === 'search' ? 'text-pink-500' : ''}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <button
          onClick={() => setActiveTab('create')}
          className="bg-pink-500 rounded-full w-12 h-12 flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </button>
        <button
          onClick={() => setActiveTab('activity')}
          className={`flex flex-col items-center justify-center text-gray-600 ${activeTab === 'activity' ? 'text-pink-500' : ''}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center justify-center text-gray-600 ${activeTab === 'profile' ? 'text-pink-500' : ''}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
