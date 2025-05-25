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
          <h2 className="text-2xl font-bold text-white mb-4">Understanding Tooth Cavities</h2>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-teal-300 font-medium text-base leading-relaxed mb-4">
              Tooth cavities, or dental caries, are one of the most common oral health issues. They occur when bacteria in the mouth produce acids that erode tooth enamel. While they can be uncomfortable, early detection and proper care can prevent serious complications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-teal-300 font-semibold text-sm mb-2">Common Causes</h3>
                <ul className="text-teal-300 text-sm space-y-1">
                  <li>• Poor oral hygiene</li>
                  <li>• Frequent sugar consumption</li>
                  <li>• Dry mouth (low saliva production)</li>
                  <li>• Acidic foods and drinks</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-teal-300 font-semibold text-sm mb-2">Symptoms to Watch For</h3>
                <ul className="text-teal-300 text-sm space-y-1">
                  <li>• Tooth sensitivity</li>
                  <li>• Visible holes or pits in teeth</li>
                  <li>• Pain when biting or chewing</li>
                  <li>• Bad breath or a bad taste in the mouth</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-teal-300 font-semibold text-sm mb-2">Prevention Tips</h3>
              <ul className="text-teal-300 text-sm space-y-1">
                <li>• Brush twice daily with fluoride toothpaste</li>
                <li>• Floss daily to remove plaque between teeth</li>
                <li>• Limit sugary snacks and drinks</li>
                <li>• Visit your dentist regularly for checkups and cleanings</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Math Involvement</h2>
          <div className="text-center border-2 border-teal-500 rounded-lg p-4 bg-gray-700">
            <p className="text-teal-300 text-sm mb-2">Quadratic formula:</p>
            <div className="text-2xl font-mono text-white">
              x = <span className="ml-1">−b</span> ± 
              <span className="relative">
                <span className="absolute -top-4 left-0">√</span>
                <span className="ml-2">b² - 4ac</span>
              </span>
              <span className="ml-2">÷ 2a</span>
            </div>
          </div>
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
