import React from 'react';

export const App = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - Contact Info */}
          <div className="w-full md:w-1/3 bg-gray-100 p-5 rounded-lg shadow-md">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-pink-600 drop-shadow-sm mb-2">Ming Tan</h1>
              <p className="text-gray-700 mb-4 italic">Head Chef | Malaysian Cuisine Specialist</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>123 Main Street, Chicago, IL 60601</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>+60 123 456 789</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>ming.tan@malaysianchef.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>www.malaysianchefresume.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* About Me */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-2">About Me</h2>
              <p className="text-gray-700 leading-relaxed">
                Hi there! I'm Ming Tan, a Malaysian chef who's been in the kitchen for over 12 years. I absolutely love whipping up authentic, flavorful dishes and collaborating with awesome teams. I’ve had the chance to work with chefs like Gordon Ramsay and Bobby Flay, and I’m always excited to bring new ideas to the kitchen.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-2">Work Experience</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Head Chef</h3>
                <p className="text-gray-600 mb-1">Seri Warisan Restaurant, Chicago • 2018 - Present</p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 text-sm">
                  <li>Lead a team of 15+ kitchen staff and manage daily operations of the 100-seat restaurant</li>
                  <li>Developed signature dishes including Ayam Percik, Laksa Lemak, and Char Kway Teow</li>
                  <li>Increased customer satisfaction ratings by 35% through quality control and service improvements</li>
                  <li>Created and maintained HACCP-compliant kitchen standards</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Executive Chef</h3>
                <p className="text-gray-600 mb-1">Rasa Nusantara, Penang • 2012 - 2018</p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 text-sm">
                  <li>Expanded menu to include regional Malaysian specialties from Sabah and Sarawak</li>
                  <li>Trained 20+ staff members in traditional cooking techniques and food presentation</li>
                  <li>Won "Best Malaysian Cuisine" award in 2015 and 2017</li>
                  <li>Managed inventory and reduced food waste by 40% through better forecasting</li>
                </ul>
              </div>
            </section>

            {/* Collaborations */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-2">Notable Collaborations</h2>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 text-sm">
                <li>Collaborated with Gordon Ramsay on a fusion Malaysian cuisine pop-up event in London (2022)</li>
                <li>Worked with Bobby Flay on a televised cooking challenge focused on Asian fusion dishes (2021)</li>
                <li>Contributed to a high-profile culinary workshop with international chefs at the Global Food Summit (2023)</li>
                <li>Contestant on Iron Chef 2025, winning the competition</li>
              </ul>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-2">Skills</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-100 p-3 rounded-md">
                  <h4 className="font-medium text-gray-800">Culinary Expertise</h4>
                  <p className="text-sm text-gray-600">Malaysian Cuisine, Nonya Cooking, Chinese-Peranakan Techniques</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <h4 className="font-medium text-gray-800">Kitchen Management</h4>
                  <p className="text-sm text-gray-600">Team Leadership, Inventory Control, Food Safety</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <h4 className="font-medium text-gray-800">Menu Development</h4>
                  <p className="text-sm text-gray-600">Seasonal Menus, Dietary Restrictions, Fusion Cuisine</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <h4 className="font-medium text-gray-800">Technology</h4>
                  <p className="text-sm text-gray-600">POS Systems, Kitchen Display Systems, Food Cost Software</p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-pink-600 mb-2">Education</h2>
              <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="font-semibold text-gray-800">Diploma in Culinary Arts</h3>
                <p className="text-gray-600">Kuala Lumpur Culinary Institute • 2009 - 2011</p>
                <p className="text-sm text-gray-600 mt-1">Specialization in Asian Cuisines with honors</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
