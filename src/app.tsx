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
        <h1 className="text-4xl font-bold text-gray-800">Discover Dog Breeds</h1>
        <p className="text-xl text-gray-600 mt-2">Explore the world of dogs and their unique traits</p>
        <div className="mt-4 flex justify-center space-x-4 text-gray-500">
          <span>info@dogbreeds.com</span>
          <span>•</span>
          <span>@dogbreeds</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Dog Breed Info & Tips */}
        <div className="md:col-span-1 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Why Explore Dog Breeds?</h2>
            <p className="text-gray-600 leading-relaxed">
              Dogs come in all shapes, sizes, and personalities. Whether you're looking for a loyal companion, a family pet, or a working dog, understanding different breeds helps you find the perfect match.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Popular Breeds</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• 🐶 Golden Retriever</li>
              <li>• 🐾 German Shepherd</li>
              <li>• 🐕 Poodle</li>
              <li>• 🐕‍🦺 French Bulldog</li>
              <li>• 🐕‍🦺 Shih Tzu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Breed Care Tips</h2>
            <div className="text-gray-600">
              <p><strong>• Grooming:</strong> Regular brushing and nail trimming are essential for most breeds.</p>
              <p><strong>• Exercise:</strong> Daily walks and playtime help keep dogs healthy and happy.</p>
              <p><strong>• Diet:</strong> A balanced diet tailored to the breed's size and energy level is crucial.</p>
            </div>
          </section>

          {/* Microphone Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Voice Search</h2>
            <div className="space-y-3">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  isRecording
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
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
                <div className="bg-gray-100 p-3 rounded text-sm text-gray-800">
                  <strong>Search:</strong> {transcription}
                </div>
              )}
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          </section>
        </div>

        {/* Right Column - Breed Advice & Experiences */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Breed Advice</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800">Choosing the Right Breed</h3>
              <p className="text-gray-500 mb-2">Consider your lifestyle, living space, and activity level when selecting a breed.</p>
              <ul className="list-disc list-inside text-gray-600 ml-5 space-y-1">
                <li>Active families may prefer high-energy breeds like Border Collies.</li>
                <li>Apartment dwellers might enjoy smaller breeds like Pomeranians.</li>
                <li>First-time owners should consider low-maintenance breeds like Basset Hounds.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800">Health & Wellness</h3>
              <p className="text-gray-500 mb-2">Regular vet checkups and proper nutrition are key to a long, healthy life for your dog.</p>
              <ul className="list-disc list-inside text-gray-600 ml-5 space-y-1">
                <li>Spaying/neutering can prevent certain health issues.</li>
                <li>Watch for breed-specific conditions like hip dysplasia in large breeds.</li>
                <li>Provide mental stimulation to avoid behavioral problems.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Breed Experiences</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-800">Breed-Specific Traits</h3>
              <p className="text-gray-500 mb-1">Each breed has unique characteristics that make them special.</p>
              <p className="text-gray-600 text-sm">Golden Retrievers are known for their friendly nature, while German Shepherds excel in protection and service roles.</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">Adoption Tips</h3>
              <p className="text-gray-500 mb-1">Adopting a dog is a rewarding experience.</p>
              <p className="text-gray-600 text-sm">Visit local shelters or breed-specific rescues to find a dog in need of a home. Always meet the dog in person before adopting.</p>
            </div>
          </section>
        </div>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>© 2025 Dog Breeds Info. All rights reserved.</p>
        <p>Content last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
};
