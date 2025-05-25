import React, { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    document.title = "Amy's Dental Journey | Future Pediatric Dentist";
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 min-h-screen text-white p-6">
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 rounded-2xl shadow-xl p-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 bg-clip-text text-transparent">
            Hi, I'm Amy! 😊
          </h1>
          <p className="text-yellow-200 font-inter text-lg mt-2">Future Pediatric Dentist | Class of '25</p>
          <p className="text-purple-200 text-sm mt-1">University of Michigan</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
          <div className="bg-gradient-to-r from-red-600 via-yellow-600 to-violet-600 p-4 rounded-lg">
            <p className="font-semibold text-white">University of Michigan School of Dentistry</p>
            <p className="text-yellow-200">DMD Candidate, Class of 2025</p>
            <p className="text-purple-200 text-sm mt-1">Specializing in Pediatric Dentistry</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
          <p className="text-yellow-200 font-inter leading-relaxed">
            I'm a passionate dental student with a focus on making pediatric dental care fun and accessible. I believe in building trust with young patients through empathy and creativity. Outside of the clinic, I enjoy hiking, baking, and—most importantly—snacking on chips and guacamole first thing in the morning.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center p-4 border border-yellow-300 rounded-lg">
              <svg className="w-6 h-6 text-yellow-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
              <div>
                <p className="font-semibold text-white">Height</p>
                <p className="text-yellow-200">5'4"</p>
              </div>
            </div>
            <div className="flex items-center p-4 border border-yellow-300 rounded-lg">
              <svg className="w-6 h-6 text-yellow-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p className="font-semibold text-white">Morning Snack</p>
                <p className="text-yellow-200">Chips and Guacamole</p>
              </div>
            </div>
            <div className="flex items-center p-4 border border-yellow-300 rounded-lg">
              <svg className="w-6 h-6 text-yellow-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <div>
                <p className="font-semibold text-white">Siblings</p>
                <p className="text-yellow-200">1 sister, Sarah. We fight a lot but love each other deeply.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
          <ul className="list-disc list-inside text-yellow-200 font-inter space-y-2">
            <li>Child-friendly dental techniques</li>
            <li>Comprehensive patient communication</li>
            <li>Restorative and preventive dentistry</li>
            <li>Office management and team collaboration</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Interests</h2>
          <ul className="list-disc list-inside text-yellow-200 font-inter space-y-2">
            <li>Outdoor adventures (hiking, camping)</li>
            <li>Volunteering at local dental clinics</li>
            <li>Learning new languages</li>
            <li>Snack-based mornings</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
