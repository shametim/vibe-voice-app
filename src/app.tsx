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
      // Update UI with final and interim results
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
        <h1 className="text-4xl font-bold text-gray-800">Martin</h1>
        <p className="text-xl text-gray-600 mt-2">Software Dev | Web Dev | Open Source Enthusiast</p>
        <div className="mt-4 flex justify-center space-x-4 text-gray-500">
          <span>john.doe@example.com</span>
          <span>•</span>
          <span>(555) 123-4567</span>
          <span>•</span>
          <span>linkedin.com/in/martin</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Contact & Summary */}
        <div className="md:col-span-1 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Professional Summary</h2>
            <p className="text-gray-600 leading-relaxed">
              Passionate about building scalable web apps with 5+ years of experience. I love working in full-stack environments using React and Node.js. Big fan of clean code and agile teams that ship fast and ship well.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Technical Skills</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• 🚀 JavaScript/TypeScript, React, Node.js</li>
              <li>• 🌐 REST APIs, GraphQL</li>
              <li>• 🗄️ MongoDB, PostgreSQL</li>
              <li>• 🐳 Docker, AWS</li>
              <li>• 🔄 Agile/Scrum, CI/CD</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Education</h2>
            <div className="text-gray-600">
              <p><strong>Bachelor of Science in Computer Science</strong></p>
              <p>University of Techlandia, 2015-2019</p>
              <p>Graduated with honors (GPA: 3.8/4.0)</p>
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
                {isRecording ? 'Stop Recording' : 'Start Microphone'}
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

        {/* Right Column - Experience */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Professional Experience</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800">Senior Software Engineer</h3>
              <p className="text-gray-500 mb-2">InnovateTech Solutions • 2020 - Present</p>
              <ul className="list-disc list-inside text-gray-600 ml-5 space-y-1">
                <li>Lead development of company's flagship SaaS product used by 100k+ users</li>
                <li>Architected microservices using Node.js and Docker, reducing deployment time by 40%</li>
                <li>Implemented CI/CD pipelines with GitHub Actions and AWS</li>
                <li>Mentored 5 junior developers and conducted code reviews</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800">Software Engineer</h3>
              <p className="text-gray-500 mb-2">CodeCraft Inc • 2018 - 2020</p>
              <ul className="list-disc list-inside text-gray-600 ml-5 space-y-1">
                <li>Developed and maintained React-based dashboard for enterprise clients</li>
                <li>Integrated third-party APIs for payment processing and analytics</li>
                <li>Improved application performance by 35% through code optimization</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Projects</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-800">Open Source Blog Platform</h3>
              <p className="text-gray-500 mb-1">React + Node.js + MongoDB</p>
              <p className="text-gray-600 text-sm">Full-stack blogging platform with real-time collaboration features</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">Task Management App</h3>
              <p className="text-gray-500 mb-1">Vue.js + Firebase</p>
              <p className="text-gray-600 text-sm">Cross-platform task manager with calendar integration and team collaboration</p>
            </div>
          </section>
        </div>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>123 Main Street, Tech City, TC 12345</p>
        <p>Resume last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
};
