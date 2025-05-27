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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="bg-white rounded-2xl shadow-lg p-8 mb-12 text-center">
          <h1 className="text-4xl font-medium text-gray-800 mb-4 italic tracking-widest">🇦🇱 Hey! Discover the Albanian Language</h1>
          <p className="text-xl text-gray-600 mb-8">Explore the beauty, history, and culture of the Albanian language</p>
          <div className="flex justify-center space-x-6 text-gray-500">
            <span>info@albanianlanguage.org</span>
            <span>•</span>
            <span>@albanianlang</span>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Left Column */}
          <div className="lg:col-span-1 w-full lg:w-64 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Navigation</h2>
            <div className="space-y-8">
              {/* Voice Search Card */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Voice Search</h3>
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    isRecording
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
                  }`}
                >
                  {isRecording ? 'Stop' : 'Search Albanian Words'}
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
                    <span>Listening for Albanian word...</span>
                  </div>
                )}
                {transcription && (
                  <div className="bg-blue-50 p-3 rounded text-sm text-blue-800 mt-2">
                    <strong>Search:</strong> {transcription}
                  </div>
                )}
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              {/* Why Explore Card */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Why Learn Albanian?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Albanian is one of the oldest languages in Europe, with a rich history and unique linguistic features. Learning it opens the door to understanding the culture, literature, and traditions of Albania and Kosovo.
                </p>
              </div>

              {/* Interesting Facts Card */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Interesting Facts</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                    <img src="https://picsum.photos/seed/albania/40/40?random=1" alt="Albanian flag" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-gray-700">Official in Albania & Kosovo</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                    <img src="https://picsum.photos/seed/latin/40/40?random=2" alt="Latin roots" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-gray-700">Indo-European language</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                    <img src="https://picsum.photos/seed/illirian/40/40?random=3" alt="Illyrian roots" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-gray-700">Illyrian origins</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                    <img src="https://picsum.photos/seed/latin/40/40?random=4" alt="Latin script" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-gray-700">Latin-based alphabet</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                    <img src="https://picsum.photos/seed/words/40/40?random=5" alt="Unique words" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-gray-700">Unique vocabulary</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Language Advice Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">Language Advice</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Getting Started with Albanian
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 mb-3">Begin with the basics: greetings, numbers, and common phrases.</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Learn the Latin-based alphabet and pronunciation rules.
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Practice common verbs and sentence structures.
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/alphabet/600/400?random=6" alt="Albanian alphabet" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Cultural Insights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 mb-3">Understanding the culture helps you grasp the language more deeply.</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Learn about traditional Albanian greetings and customs.
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Explore Albanian literature and poetry.
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/culture/600/400?random=7" alt="Albanian culture" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Language Experiences Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">Language Experiences</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Language-Specific Traits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 mb-1">Albanian has unique linguistic features that set it apart from other languages.</p>
                    <p className="text-gray-600 text-sm">It is one of the few surviving Illyrian languages and has a rich system of verb conjugations and noun declensions.</p>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/grammar/600/400?random=8" alt="Albanian grammar" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Community & Resources
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 mb-1">Join the global Albanian-speaking community and access learning resources.</p>
                    <p className="text-gray-600 text-sm">Find online courses, books, and language exchange platforms to help you learn and practice Albanian.</p>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/resources/600/400?random=9" alt="Learning resources" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p className="mb-2">© 2025 Albanian Language Info. All rights reserved.</p>
          <p>Content last updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
};
