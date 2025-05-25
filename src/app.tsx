import { useEffect, useState } from 'react';

export const App = () => {
  const [cvFile, setCvFile] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Amy's Dental Journey | Future Pediatric Dentist";
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file.name);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Amy Nguyen
          </h1>
          <p className="text-teal-300 font-medium text-lg mt-2">Future Pediatric Dentist | Class of '25</p>
          <p className="text-indigo-300 text-sm mt-1">University of Michigan</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-semibold text-white text-lg">University of Michigan School of Dentistry</p>
            <p className="text-teal-300 text-base">DMD Candidate, Class of 2025</p>
            <p className="text-indigo-300 text-sm mt-1">Specializing in Pediatric Dentistry</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
          <p className="text-teal-300 font-medium text-base leading-relaxed">
            I'm a dedicated dental student with a passion for making pediatric dental care engaging and accessible. I focus on building trust with young patients through empathy, creativity, and child-friendly techniques. Outside of the clinic, I enjoy outdoor activities, volunteering, and learning new languages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Professional Highlights</h2>
          <ul className="list-disc list-inside text-teal-300 font-medium text-sm space-y-2">
            <li>Child-friendly dental techniques and patient communication</li>
            <li>Comprehensive restorative and preventive dentistry</li>
            <li>Office management and team collaboration</li>
            <li>Volunteer experience at local dental clinics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Interests</h2>
          <ul className="list-disc list-inside text-teal-300 font-medium text-sm space-y-2">
            <label htmlFor="cv-upload" className="cursor-pointer">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                Upload CV (PDF)
              </li>
            </label>
            <input
              id="cv-upload"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            {cvFile && (
              <li className="text-teal-300 text-sm">
                Selected: <span className="font-medium">{cvFile}</span>
              </li>
            )}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Personal Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center p-4 border border-teal-500 rounded-lg">
              <svg className="w-6 h-6 text-teal-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
              <div>
                <p className="font-semibold text-white text-sm">Siblings</p>
                <p className="text-teal-300 text-sm">1 sister, Sarah. We fight a lot but love each other deeply.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
