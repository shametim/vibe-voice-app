import React, { useState, useEffect, useRef } from 'react';

export const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [error, setError] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Speech recognition not supported in this browser.');
      return;
    }

    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          setTranscription(prev => prev + event.results[i][0].transcript + ' ');
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      setTranscription(prev => prev.replace(/.*\n/, '') + interimTranscript);
    };

    recognition.onend = () => {
      setIsRecording(false);
      setTranscription('');
    };

    recognition.onerror = (event) => {
      setError(`Speech recognition error: ${event.error}`);
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const startRecording = () => {
    setError('');
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl relative flex flex-col bg-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Albanian Travel Tips</h1>
        <p className="text-xl text-gray-600 mt-2">Discover the beauty of Albania</p>
        <div className="mt-4 flex justify-center space-x-4 text-gray-500">
          <span>albania.travel@example.com</span>
          <span>•</span>
          <span>(555) 123-4567</span>
          <span>•</span>
          <span>linkedin.com/in/albania</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Travel Tips & Highlights */}
        <div className="md:col-span-1 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Why Visit Albania?</h2>
            <p className="text-gray-600 leading-relaxed">
              Albania is a hidden gem in the Balkans with stunning landscapes, rich history, and warm hospitality. From the rugged mountains of the north to the pristine beaches of the south, there's something for every traveler.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Top Destinations</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• 🏔️ Theth & Valbona Valleys</li>
              <li>• 🌊 Ksamil & Saranda Beaches</li>
              <li>• 🏰 Berat – The City of a Thousand Windows</li>
              <li>• 🏞️ Lake Koman & National Parks</li>
              <li>• 🏙️ Tirana – Vibrant Capital City</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Cultural Tips</h2>
            <div className="text-gray-600">
              <p><strong>• Greeting:</strong> A simple "Përshëndetje" (Hello) goes a long way.</p>
              <p><strong>• Food:</strong> Try fërgesë, byrek, and rakia.</p>
              <p><strong>• Language:</strong> Learn a few basic Albanian phrases – locals love it!</p>
            </div>
          </section>

          {/* Microphone Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Voice Input</h2>
            <div className="space-y-3">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  isRecording
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {isRecording ? 'Stop' : 'Start Talking'}
              </button>
              {isRecording && (
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg
                    className="animate-spin h-5 w-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Listening...</span>
                </div>
              )}
              {transcription && (
                <div className="bg-gray-100 p-3 rounded text-sm text-gray-800">
                  <strong>Transcription:</strong> {transcription}
                </div>
              )}
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          </section>
        </div>

        {/* Right Column - Travel Advice & Experiences */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Travel Advice</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800">Getting Around</h3>
              <p className="text-gray-500 mb-2">Buses and taxis are common, but renting a car is ideal for exploring rural areas.</p>
              <ul className="list-disc list-inside text-gray-600 ml-5 space-y-1">
                <li>Uber and Bolt are available in major cities.</li>
                <li>Public transport is affordable but can be unreliable in remote areas.</li>
                <li>Driving is on the right side; roads vary in quality.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800">Safety Tips</h3>
              <p className="text-gray-500 mb-2">Albania is generally safe, but be cautious in crowded areas and with your belongings.</p>
              <ul className="list-disc list-inside text-gray-600 ml-5 space-y-1">
                <li>Keep valuables secure in hostels and public places.</li>
                <li>Be mindful of road conditions in mountainous regions.</li>
                <li>Respect local customs and dress modestly in religious sites.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Local Experiences</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-800">Festivals & Events</h3>
              <p className="text-gray-500 mb-1">Albania has vibrant festivals throughout the year.</p>
              <p className="text-gray-600 text-sm">Don't miss the Tirana International Film Festival or the Krujë Medieval Festival in May.</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">Culinary Highlights</h3>
              <p className="text-gray-500 mb-1">Albanian cuisine is hearty and flavorful.</p>
              <p className="text-gray-600 text-sm">Try grilled meats, fresh seafood, and traditional raki. Street food is also a must-try!</p>
            </div>
          </section>
        </div>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>123 Main Street, Tirana, Albania</p>
        <p>Travel Tips Updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
};
