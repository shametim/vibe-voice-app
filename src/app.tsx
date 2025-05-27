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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 sm:p-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 italic tracking-widest">🧠 Stroke Recovery</h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">Left Side Neglect Exercises</p>
          </div>
          <div className="flex items-center space-x-4 text-gray-500 text-sm">
            <span className="hover:text-blue-600 transition-colors">support@strokerecovery.org</span>
            <span>•</span>
            <span className="hover:text-green-600 transition-colors">@stroke_recovery</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row max-w-6xl mx-auto px-4 py-6">
        {/* Sidebar */}
        <aside className="w-full md:w-64 md:sticky md:top-24 space-y-6 mb-6 md:mb-0">
          {/* Voice Search Card */}
          <div className="bg-white rounded-xl shadow p-4 border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Search Exercises</h3>
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-full py-3 rounded-lg font-medium transition-all ${
                isRecording
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600'
              }`}
            >
              {isRecording ? 'Stop' : 'Search Exercises'}
            </button>
            {isRecording && (
              <div className="flex items-center space-x-2 text-gray-600 mt-2">
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
                <span>Listening for exercise terms...</span>
              </div>
            )}
            {transcription && (
              <div className="bg-blue-50 p-2 rounded text-xs text-blue-800 mt-2">
                <strong>Search:</strong> {transcription}
              </div>
            )}
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>

          {/* Why Explore Card */}
          <div className="bg-white rounded-xl shadow p-4 border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Why This Matters</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Left side neglect is a common post-stroke condition where patients fail to recognize or respond to stimuli on the left side of their body. These exercises are designed by neurorehabilitation experts to help retrain the brain.
            </p>
          </div>

          {/* Interesting Facts Card */}
          <div className="bg-white rounded-xl shadow p-4 border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Key Statistics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center space-x-2 p-2 bg-blue-50 rounded-lg">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 text-sm">Affects 30-50% of stroke survivors</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 text-sm">Early intervention improves outcomes</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-purple-50 rounded-lg">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 text-sm">Exercises take 15-30 minutes daily</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="w-full md:pl-6 space-y-6">
          {/* Tab Navigation */}
          <div className="bg-white rounded-xl shadow p-3 border border-gray-100">
            <div className="flex border-b border-gray-200">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 border-b-2 border-indigo-500">
                Overview
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                Resources
              </button>
            </div>
          </div>

          {/* Understanding Neglect Card */}
          <div className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Understanding Left Side Neglect</h2>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-800 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                What is Left Side Neglect?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 mb-2">Left side neglect is a neurological condition where patients fail to recognize or respond to stimuli on the left side of their body or environment.</p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Common after right hemisphere stroke
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Affects daily activities like dressing
                    </li>
                  </ul>
                </div>
                <div className="relative h-32 md:h-48 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <img src="https://picsum.photos/seed/neglect/600/400?random=1" alt="Left side neglect illustration" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-800 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Top Exercises
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 mb-2">These exercises help retrain the brain to recognize and use the left side of the body:</p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <strong>Visual Scanning:</strong> Move eyes slowly from right to left while reading
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <strong>Left Hand Use:</strong> Practice daily tasks with left hand
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <strong>Line Bisection:</strong> Mark the center of horizontal lines
                    </li>
                  </ul>
                </div>
                <div className="relative h-32 md:h-48 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <img src="https://picsum.photos/seed/exercises/600/400?random=2" alt="Exercise demonstration" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Recovery Tips Card */}
          <div className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Recovery Strategies</h2>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-800 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Daily Practice Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 mb-1">Consistency is key in neurorehabilitation. Try these strategies:</p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Set reminders for daily exercises
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Use visual cues (e.g., stickers on left side)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Engage in mirror therapy exercises
                    </li>
                  </ul>
                </div>
                <div className="relative h-32 md:h-48 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <img src="https://picsum.photos/seed/recovery/600/400?random=3" alt="Recovery techniques" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-800 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Professional Support
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 mb-1">Work with healthcare professionals for personalized plans:</p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Occupational therapists
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Neurologists
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Speech-language pathologists
                    </li>
                  </ul>
                </div>
                <div className="relative h-32 md:h-48 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <img src="https://picsum.photos/seed/professionals/600/400?random=4" alt="Healthcare team" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 px-4 text-center text-gray-500 text-sm border-t border-gray-200">
        <p className="mb-1">© 2025 Stroke Recovery Foundation. All rights reserved.</p>
        <p>Content last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
};
