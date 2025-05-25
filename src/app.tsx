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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-red-600 via-yellow-600 to-violet-600 p-4 rounded-lg">
              <p className="font-semibold text-white">Height</p>
              <p className="text-yellow-200">5'4"</p>
            </div>
            <div className="bg-gradient-to-r from-red-600 via-yellow-600 to-violet-600 p-4 rounded-lg">
              <p className="font-semibold text-white">Morning Snack</p>
              <p className="text-yellow-200">Chips and Guacamole</p>
            </div>
            <div className="bg-gradient-to-r from-red-600 via-yellow-600 to-violet-600 p-4 rounded-lg">
              <p className="font-semibold text-white">Siblings</p>
              <p className="text-yellow-200">1 sister, Sarah. We fight a lot but love each other deeply.</p>
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
