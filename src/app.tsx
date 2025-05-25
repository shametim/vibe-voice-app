import { useEffect, useState } from 'react';

export const App = () => {
  const [spokenText, setSpokenText] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [browserSupport, setBrowserSupport] = useState<boolean>(true);

  useEffect(() => {
    document.title = "Amy's Architect Journey | Future Architect";

    if ('webkitSpeechRecognition' in window) {
      setBrowserSupport(true);
    } else {
      setBrowserSupport(false);
    }
  }, []);

  const startListening = () => {
    if (!browserSupport) return;

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSpokenText(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      {/* Vibe Voice App Banner */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-md z-50">
        <div className="flex items-center space-x-1">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            ></path>
          </svg>
          <span className="text-white text-xs font-medium">Vibe Voice App</span>
        </div>
      </div>

      {/* Two-Panel Layout */}
      <div className="pt-8 px-2 pb-10 flex flex-1 h-full">
        {/* Left Panel - Static Message */}
        <div className="w-1/5 bg-gray-50 border-r border-gray-200 p-3 flex flex-col items-center justify-start">
          <div className="text-center">
            <h2 className="text-pink-500 font-bold text-sm mb-1">Change Your Resume</h2>
            <p className="text-gray-600 text-xs">
              Speak to update your resume. Update your background by voice on the right panel.
            </p>
          </div>
        </div>

        {/* Right Panel - Resume View */}
        <div className="w-4/5 pl-4 overflow-y-auto h-full">
          <div className="max-w-3xl mx-auto space-y-4 h-full">
            {/* Profile Header */}
            <div className="bg-white rounded-xl shadow-sm p-2">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center font-bold text-lg">
                  AN
                </div>
                <div className="mt-2">
                  <h1 className="text-lg font-bold">Amy Nguyen</h1>
                  <p className="text-gray-500 text-xs">Future Architect | Class of '25</p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white rounded-xl shadow-sm p-2">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-base font-bold">Education</h2>
              </div>
              <p className="font-semibold text-gray-800 text-sm">University of Michigan School of Architecture</p>
              <p className="text-gray-600 text-xs">BArch Candidate, Class of 2025</p>
              <p className="text-gray-500 text-xs mt-0.5">Specializing in Sustainable Design</p>
            </div>

            {/* About Me Card */}
            <div className="bg-white rounded-xl shadow-sm p-2">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-base font-bold">About Me</h2>
              </div>
              <p className="text-gray-600 font-medium text-xs leading-tight">
                I'm a passionate architecture student with a focus on sustainable and human-centered design. I enjoy creating spaces that foster community and environmental responsibility. Outside of the studio, I love exploring urban landscapes, sketching, and experimenting with 3D modeling.
              </p>
            </div>

            {/* Professional Highlights Card */}
            <div className="bg-white rounded-xl shadow-sm p-2">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-base font-bold">Professional Highlights</h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 font-medium text-xs space-y-0.5">
                <li>Proficient in AutoCAD, Revit, and SketchUp</li>
                <li>Experience in sustainable design and energy modeling</li>
                <li>Collaborative project management and team leadership</li>
                <li>Volunteer work in community design initiatives</li>
              </ul>
            </div>

            {/* Interests Card */}
            <div className="bg-white rounded-xl shadow-sm p-2">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-base font-bold">Interests</h2>
              </div>
              <label htmlFor="cv-upload" className="cursor-pointer">
                <div
                  className="flex items-center text-gray-600 font-medium text-xs"
                  onClick={startListening}
                >
                  <svg
                    className="w-4 h-4 text-pink-500 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                  {isListening ? 'Listening...' : 'Speak your background'}
                </div>
              </label>
              {spokenText && (
                <p className="text-gray-600 text-xs mt-1">
                  <span className="font-medium">You said:</span> {spokenText}
                </p>
              )}
              {!browserSupport && (
                <p className="text-red-500 text-xs mt-1">
                  Your browser does not support speech recognition.
                </p>
              )}
            </div>

            {/* Structural Integrity Card */}
            <div className="bg-white rounded-xl shadow-sm p-2">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-base font-bold">Understanding Structural Integrity</h2>
              </div>
              <p className="text-gray-600 font-medium text-xs leading-tight mb-1">
                Structural integrity is the foundation of any successful architectural design. It ensures that buildings are not only aesthetically pleasing but also safe and functional. Understanding load distribution, material properties, and environmental factors is essential for creating resilient structures.
              </p>
              <div className="grid grid-cols-1 gap-2">
                <div className="bg-gray-50 p-1 rounded">
                  <h3 className="text-gray-700 font-semibold text-xs mb-0.5">Key Factors</h3>
                  <ul className="text-gray-600 text-xs space-y-0.5">
                    <li>• Material strength and durability</li>
                    <li>• Load-bearing capacity</li>
                    <li>• Environmental impact</li>
                    <li>• Design constraints</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-1 rounded">
                  <h3 className="text-gray-700 font-semibold text-xs mb-0.5">Common Issues</h3>
                  <ul className="text-gray-600 text-xs space-y-0.5">
                    <li>• Poor foundation design</li>
                    <li>• Inadequate reinforcement</li>
                    <li>• Material fatigue</li>
                    <li>• Improper load distribution</li>
                  </ul>
                </div>
              </div>
              <div className="mt-1">
                <h3 className="text-gray-700 font-semibold text-xs mb-0.5">Design Tips</h3>
                <ul className="text-gray-600 text-xs space-y-0.5">
                  <li>• Use structural analysis software for simulations</li>
                  <li>• Prioritize material sustainability</li>
                  <li>• Collaborate with engineers early in the design process</li>
                  <li>• Consider long-term maintenance and adaptability</li>
                </ul>
              </div>
            </div>

            {/* Math Involvement Card */}
            <div className="bg-white rounded-xl shadow-sm p-2">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-base font-bold">Math Involvement</h2>
              </div>
              <div className="text-center border-2 border-pink-500 rounded p-1 bg-gray-50">
                <p className="text-gray-600 text-xs mb-0.5">Golden Ratio:</p>
                <div className="text-xs font-mono text-gray-800">
                  φ = <span className="ml-0.5">(1 + √5) ÷ 2</span>
                </div>
              </div>
              <div className="mt-1 p-1 border-l-4 border-yellow-500 bg-gray-50">
                <p className="text-yellow-500 font-medium text-xs">
                  Fun fact: Why did the golden ratio break up with the Fibonacci sequence? It felt like it was being followed everywhere! 😂
                </p>
              </div>
            </div>

            {/* Personal Profile Card */}
            <div className="bg-white rounded-xl shadow-sm p-2">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-base font-bold">Personal Profile</h2>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center p-1 border border-pink-500 rounded">
                  <div className="w-3 h-3 rounded-full bg-pink-500 mr-1"></div>
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
    </div>
  );
};
