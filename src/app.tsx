import { useEffect, useState } from 'react';

export const App = () => {
  const [spokenText, setSpokenText] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [browserSupport, setBrowserSupport] = useState<boolean>(true);

  useEffect(() => {
    document.title = "40th Birthday Party Planner | Amy's 40th Birthday";

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
      {/* Party Planner Banner */}
      <div className="fixed top-0 left-0 right-0 h-10 bg-gradient-to-r from-yellow-500 to-green-500 flex items-center justify-center shadow-md z-50">
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <span className="text-white text-sm font-medium">Plan Your 40th Birthday Party</span>
        </div>
      </div>

      {/* Two-Panel Layout */}
      <div className="pt-10 px-4 pb-12 flex flex-1 h-full">
        {/* Left Panel - Instructions */}
        <div className="w-1/4 bg-gray-50 border-r border-gray-200 p-5 flex flex-col items-center justify-start">
          <div className="text-center">
            <h2 className="text-pink-500 font-bold text-base mb-2">Plan Your 40th Birthday</h2>
            <p className="text-gray-600 text-sm">
              Speak to update your birthday party details. Add guests, activities, and more on the right panel.
            </p>
          </div>
        </div>

        {/* Right Panel - Party View */}
        <div className="w-3/4 pl-6 overflow-y-auto h-full">
          <div className="max-w-3xl mx-auto space-y-6 h-full">
            {/* Party Header */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center font-bold text-xl">
                  AN
                </div>
                <div className="mt-4">
                  <h1 className="text-xl font-bold">Amy Nguyen</h1>
                  <p className="text-gray-500 text-sm">40th Birthday | April 2024</p>
                </div>
              </div>
            </div>

            {/* Party Details Card */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Party Details</h2>
              </div>
              <p className="font-semibold text-gray-800 text-sm">Date: Saturday, April 20, 2024</p>
              <p className="text-gray-600 text-sm">Time: 2:00 PM - 5:00 PM</p>
              <p className="text-gray-500 text-sm mt-1">Venue: The Garden Room, Ann Arbor</p>
            </div>

            {/* Guest List Card */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Guest List</h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 font-medium text-sm space-y-1">
                <li>John & Sarah</li>
                <li>Mike & Lisa</li>
                <li>Emily & Chris</li>
                <li>Parents & Siblings</li>
                <li>Martin Mink</li>
                <li>Wendy</li>
              </ul>
            </div>

            {/* Activities Card */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Activities</h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 font-medium text-sm space-y-1">
                <li>40th Birthday Trivia Game</li>
                <li>Photo Booth with Props</li>
                <li>Memory Lane Timeline Wall</li>
                <li>Open Bar with Signature Cocktails</li>
                <li>Group Dance Party</li>
              </ul>
            </div>

            {/* Decorations Card */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Decorations</h2>
              </div>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">
                Balloons with "40" graphics, vintage photo displays, custom banners, and a memory wall with photos from past birthdays.
              </p>
            </div>

            {/* Food & Drinks Card */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Food & Drinks</h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 font-medium text-sm space-y-1">
                <li>Mini gourmet sliders and charcuterie boards</li>
                <li>Signature cocktail station</li>
                <li>Custom 40th birthday cake</li>
                <li>Wine tasting bar</li>
                <li>Soft drinks and mocktails</li>
              </ul>
            </div>

            {/* Budget Tracker Card */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Budget Tracker</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <h3 className="text-gray-700 font-semibold text-sm mb-1">Total Budget</h3>
                  <p className="text-gray-600 text-sm">$1,200</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h3 className="text-gray-700 font-semibold text-sm mb-1">Spent So Far</h3>
                  <p className="text-gray-600 text-sm">$750</p>
                </div>
              </div>
            </div>

            {/* Party Tips Card */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Party Tips</h2>
              </div>
              <div className="mt-2 p-3 border-l-4 border-yellow-500 bg-gray-50">
                <p className="text-yellow-500 font-medium text-sm">
                  Pro tip: Include a "40 Years of Memories" timeline wall with photos and mementos.
                </p>
              </div>
            </div>

            {/* Voice Input Card */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Voice Input</h2>
              </div>
              <label htmlFor="cv-upload" className="cursor-pointer">
                <div
                  className="flex items-center text-gray-600 font-medium text-sm"
                  onClick={startListening}
                >
                  <svg
                    className="w-5 h-5 text-pink-500 mr-2"
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
                  {isListening ? 'Listening...' : 'Speak your party details'}
                </div>
              </label>
              {spokenText && (
                <p className="text-gray-600 text-sm mt-2">
                  <span className="font-medium">You said:</span> {spokenText}
                </p>
              )}
              {!browserSupport && (
                <p className="text-red-500 text-sm mt-2">
                  Your browser does not support speech recognition.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
