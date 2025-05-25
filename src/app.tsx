import { useEffect, useState } from 'react';

export const App = () => {
  const [cvFile, setCvFile] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

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
          <div className="w-6 h-6 rounded-full bg-gray-300"></div>
          <div className="text-gray-600 text-sm">{currentTime}</div>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <span>WiFi</span>
          <span>•</span>
          <span>Battery 90%</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 px-4 pb-20">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center font-bold text-2xl">
                AN
              </div>
              <div className="mt-3">
                <h1 className="text-xl font-bold">Amy Nguyen</h1>
                <p className="text-gray-500 text-sm">Future Architect | Class of '25</p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Education</h2>
            </div>
            <p className="font-semibold text-gray-800 text-base">University of Michigan School of Architecture</p>
            <p className="text-gray-600 text-sm">BArch Candidate, Class of 2025</p>
            <p className="text-gray-500 text-xs mt-1">Specializing in Sustainable Design</p>
          </div>

          {/* About Me Card */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">About Me</h2>
            </div>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              I'm a passionate architecture student with a focus on sustainable and human-centered design. I enjoy creating spaces that foster community and environmental responsibility. Outside of the studio, I love exploring urban landscapes, sketching, and experimenting with 3D modeling.
            </p>
          </div>

          {/* Professional Highlights Card */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Professional Highlights</h2>
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
            </div>
            <p className="text-gray-600 font-medium text-sm leading-relaxed mb-4">
              Structural integrity is the foundation of any successful architectural design. It ensures that buildings are not only aesthetically pleasing but also safe and functional. Understanding load distribution, material properties, and environmental factors is essential for creating resilient structures.
            </p>
            <div className="grid grid-cols-1 gap-4">
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
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center p-3 border border-pink-500 rounded-lg">
                <div className="w-5 h-5 rounded-full bg-pink-500 mr-2"></div>
                <div>
                  <p className="font-semibold text-gray-800 text-xs">Siblings</p>
                  <p className="text-gray-600 text-xs">1 sister, Sarah. We fight a lot but love each other deeply.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
