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
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">🐶 Discover Dog Breeds</h1>
          <p className="text-xl text-gray-600 mb-8">Explore the world of dogs and their unique traits</p>
          <div className="flex justify-center space-x-6 text-gray-500">
            <span>info@dogbreeds.com</span>
            <span>•</span>
            <span>@dogbreeds</span>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Dog Breed Info & Tips */}
          <div className="lg:col-span-1 space-y-8">
            {/* Voice Search Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Voice Search
              </h2>
              <div className="space-y-3">
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    isRecording
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
                  }`}
                >
                  {isRecording ? 'Stop' : 'Search Breeds'}
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
                    <span>Listening for breed name...</span>
                  </div>
                )}
                {transcription && (
                  <div className="bg-blue-50 p-3 rounded text-sm text-blue-800">
                    <strong>Search:</strong> {transcription}
                  </div>
                )}
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
            </div>

            {/* Why Explore Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Why Explore Dog Breeds?</h2>
              <p className="text-gray-600 leading-relaxed">
                Dogs come in all shapes, sizes, and personalities. Whether you're looking for a loyal companion, a family pet, or a working dog, understanding different breeds helps you find the perfect match.
              </p>
            </div>

            {/* Popular Breeds Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Popular Breeds</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <img src="https://picsum.photos/seed/golden/40/40?random=1" alt="Golden Retriever" className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-gray-700">Golden Retriever</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <img src="https://picsum.photos/seed/german/40/40?random=2" alt="German Shepherd" className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-gray-700">German Shepherd</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <img src="https://picsum.photos/seed/poodle/40/40?random=3" alt="Poodle" className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-gray-700">Poodle</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <img src="https://picsum.photos/seed/french/40/40?random=4" alt="French Bulldog" className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-gray-700">French Bulldog</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <img src="https://picsum.photos/seed/shih/40/40?random=5" alt="Shih Tzu" className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-gray-700">Shih Tzu</span>
                </div>
              </div>
            </div>

            {/* Care Tips Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Breed Care Tips</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Grooming</p>
                    <p className="text-gray-600 text-sm">Regular brushing and nail trimming are essential for most breeds.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Exercise</p>
                    <p className="text-gray-600 text-sm">Daily walks and playtime help keep dogs healthy and happy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-orange-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Diet</p>
                    <p className="text-gray-600 text-sm">A balanced diet tailored to the breed's size and energy level is crucial.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Breed Advice & Experiences */}
          <div className="lg:col-span-2 space-y-8">
            {/* Breed Advice Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">Breed Advice</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Choosing the Right Breed
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 mb-3">Consider your lifestyle, living space, and activity level when selecting a breed.</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Active families may prefer high-energy breeds like Border Collies.
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Apartment dwellers might enjoy smaller breeds like Pomeranians.
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/apartment/600/400?random=6" alt="Apartment dog" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Health & Wellness
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 mb-3">Regular vet checkups and proper nutrition are key to a long, healthy life for your dog.</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Spaying/neutering can prevent certain health issues.
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Watch for breed-specific conditions like hip dysplasia in large breeds.
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/health/600/400?random=7" alt="Healthy dog" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Breed Experiences Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">Breed Experiences</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Breed-Specific Traits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 mb-1">Each breed has unique characteristics that make them special.</p>
                    <p className="text-gray-600 text-sm">Golden Retrievers are known for their friendly nature, while German Shepherds excel in protection and service roles.</p>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/traits/600/400?random=8" alt="Breed traits" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Adoption Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 mb-1">Adopting a dog is a rewarding experience.</p>
                    <p className="text-gray-600 text-sm">Visit local shelters or breed-specific rescues to find a dog in need of a home. Always meet the dog in person before adopting.</p>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/adoption/600/400?random=9" alt="Adoption" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p className="mb-2">© 2025 Dog Breeds Info. All rights reserved.</p>
          <p>Content last updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
};
