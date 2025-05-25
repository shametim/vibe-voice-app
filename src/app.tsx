import React, { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    document.title = 'Meet Our Feline Friends 🐱';
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Orange Whiskers</h1>
          <p className="text-gray-600 font-inter text-lg mt-2">Adventurous Stray | Expert Mouser</p>
        </header>

        <section className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 font-inter leading-relaxed">
            I'm an adventurous orange tabby with a knack for finding the sunniest spots and the most elusive prey. I'm passionate about exploring back alleys, knocking over objects, and napping in cardboard boxes. My goal is to become the neighborhood's top mouser and to master the art of the perfect purr.
          </p>
        </section>

        <section className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Paw Intern</h3>
              <p className="text-gray-500 font-inter">Sunbeam Cat Cafe | Jun 2023 – Present</p>
              <p className="text-gray-600 font-inter mt-2">
                Assisting in customer engagement by lounging on tables and providing purr therapy. Mastering the art of knocking over cups and stealing snacks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Mousing Research Assistant</h3>
              <p className="text-gray-500 font-inter">Whisker University | Jan 2022 – May 2023</p>
              <p className="text-gray-600 font-inter mt-2">
                Conducted field research on the behavior of small prey and the effectiveness of various pouncing techniques. Presented findings at the annual Purr Conference.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Degree in Advanced Mousing Techniques</h3>
            <p className="text-gray-500 font-inter">Purr University | 2021 – 2025 (Expected)</p>
          </div>
        </section>

        <section className="mb-8 border-b pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Mouse Chasing</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Sunbeam Napping</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Cardboard Box Mastery</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Purr Therapy</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Object Knocking</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition">Laser Pointer Pursuit</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600 font-inter">
            Email: <a href="mailto:orange.whiskers@example.com" className="text-blue-600 hover:text-blue-800 hover:underline transition">orange.whiskers@example.com</a>
          </p>
          <p className="text-gray-600 font-inter mt-2">
            LinkedIn: <a href="https://linkedin.com/in/orangewhiskers" className="text-blue-600 hover:text-blue-800 hover:underline transition">linkedin.com/in/orangewhiskers</a>
          </p>
        </section>
      </div>
    </div>
  );
};
