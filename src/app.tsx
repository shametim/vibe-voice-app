import React from 'react';

export const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Amy Chang</h1>
          <p className="text-gray-600 font-inter text-lg mt-2">Dentistry Student | Future Dental Professional</p>
        </header>

        <section className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 font-inter leading-relaxed">
            I'm a dedicated dental student currently pursuing my Doctor of Dental Surgery (DDS) degree with a passion for patient-centered care and clinical excellence. I'm focused on mastering restorative and preventive dentistry while developing strong communication skills to build trust with patients.
          </p>
        </section>

        <section className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Dental Intern</h3>
              <p className="text-gray-500 font-inter">Bright Smile Dental Clinic | Jun 2023 – Present</p>
              <p className="text-gray-600 font-inter mt-2">
                Assisting licensed dentists in clinical procedures, patient consultations, and post-treatment care. Gaining hands-on experience in restorative dentistry and infection control protocols.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Research Assistant</h3>
              <p className="text-gray-500 font-inter">University of Dental Sciences | Jan 2022 – May 2023</p>
              <p className="text-gray-600 font-inter mt-2">
                Conducted research on innovative dental materials and their applications in clinical settings. Presented findings at a regional dental conference.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Doctor of Dental Surgery (DDS)</h3>
            <p className="text-gray-500 font-inter">University of Dental Sciences | 2021 – 2025 (Expected)</p>
          </div>
        </section>

        <section className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Dental Anatomy</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Restorative Dentistry</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Patient Communication</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Dental Software (Eaglesoft)</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Infection Control</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Clinical Procedures</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600 font-inter">
            Email: <a href="mailto:amy.chang@example.com" className="text-blue-600 hover:text-blue-800 hover:underline transition">amy.chang@example.com</a>
          </p>
          <p className="text-gray-600 font-inter mt-2">
            LinkedIn: <a href="https://linkedin.com/in/amychang" className="text-blue-600 hover:text-blue-800 hover:underline transition">linkedin.com/in/amychang</a>
          </p>
        </section>
      </div>
    </div>
  );
};
