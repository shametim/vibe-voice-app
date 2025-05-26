export const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans">
      {/* Header */}
      <div className="bg-white text-gray-800 p-4 md:p-6 text-center shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold">Martin Tan</h1>
        <p className="text-gray-600 text-sm">Head Chef | Malaysian Cuisine Specialist</p>
      </div>

      {/* Vibe Voice App Title */}
      <div className="text-center mt-2 mb-1">
        <h1 className="text-xl font-bold text-gray-800">Professional Resume</h1>
      </div>

      <div className="max-w-4xl mx-auto p-2 md:p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar - Contact Info */}
          <div className="w-full md:w-1/3 bg-white p-4 rounded-md shadow-sm">
            <div className="text-center md:text-left">
              <a href="#top" className="text-xl font-bold text-gray-800 mb-2 block">Martin Tan</a>
              <p className="text-gray-600 mb-2 text-xs italic">Head Chef | Malaysian Cuisine Specialist</p>
              <div className="space-y-1 text-xs text-gray-700">
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>123 Main Street, Chicago, IL 60601</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>+60 123 456 789</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>ming.tan@malaysianchef.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>www.malaysianchefresume.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 space-y-4">
            {/* Professional Summary */}
            <section>
              <h2 className="text-lg font-bold text-gray-800 mb-1">Professional Summary</h2>
              <p className="text-gray-700 leading-tight text-sm">
                A Malaysian chef with over 10 years of experience in high-end culinary environments. Specialized in Malaysian and fusion cuisines, with a proven track record of leading kitchen teams, developing award-winning menus, and improving customer satisfaction. Passionate about creating memorable dining experiences.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-lg font-bold text-gray-800 mb-1">Work Experience</h2>

              <div className="mb-2 p-3 bg-gray-100 rounded-md">
                <h3 className="text-base font-semibold text-gray-800">Head Chef</h3>
                <p className="text-gray-600 mb-1">Gordon Ramsay's Restaurant, Chicago • 2023 - Present</p>
                <ul className="list-disc list-inside text-gray-700 ml-3 space-y-1 text-sm">
                  <li>Managed a high-pressure kitchen environment in a Michelin-starred establishment</li>
                  <li>Collaborated with Gordon Ramsay on menu development and kitchen operations</li>
                  <li>Trained and led a team of 20+ chefs and kitchen staff</li>
                  <li>Improved food quality and consistency, contributing to a 40% increase in customer satisfaction</li>
                </ul>
              </div>

              <div className="mb-2 p-3 bg-gray-100 rounded-md">
                <h3 className="text-base font-semibold text-gray-800">Head Chef</h3>
                <p className="text-gray-600 mb-1">Seri Warisan Restaurant, Chicago • 2018 - 2023</p>
                <ul className="list-disc list-inside text-gray-700 ml-3 space-y-1 text-sm">
                  <li>Lead a team of 15+ kitchen staff and manage daily operations of the 100-seat restaurant</li>
                  <li>Developed signature dishes including Ayam Percik, Laksa Lemak, and Char Kway Teow</li>
                  <li>Increased customer satisfaction ratings by 35% through quality control and service improvements</li>
                  <li>Created and maintained HACCP-compliant kitchen standards</li>
                </ul>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-lg font-bold text-gray-800 mb-1">Skills</h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-100 p-2 rounded-md">
                  <h4 className="font-medium text-gray-800 text-sm">Culinary Expertise</h4>
                  <p className="text-sm text-gray-600">Malaysian Cuisine, Nonya Cooking, Chinese-Peranakan Techniques</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-md">
                  <h4 className="font-medium text-gray-800 text-sm">Kitchen Management</h4>
                  <p className="text-sm text-gray-600">Team Leadership, Inventory Control, Food Safety</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-md">
                  <h4 className="font-medium text-gray-800 text-sm">Menu Development</h4>
                  <p className="text-sm text-gray-600">Seasonal Menus, Dietary Restrictions, Fusion Cuisine</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-md">
                  <h4 className="font-medium text-gray-800 text-sm">Technology</h4>
                  <p className="text-sm text-gray-600">POS Systems, Kitchen Display Systems, Food Cost Software</p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg font-bold text-gray-800 mb-1">Education</h2>
              <div className="bg-gray-100 p-2 rounded-md">
                <h3 className="font-semibold text-gray-800 text-sm">Diploma in Culinary Arts</h3>
                <p className="text-gray-600 text-sm">Kuala Lumpur Culinary Institute • 2009 - 2011</p>
                <p className="text-sm text-gray-600 mt-1">Specialization in Asian Cuisines with honors</p>
              </div>
            </section>

            {/* References */}
            <section>
              <h2 className="text-lg font-bold text-gray-800 mb-1">References</h2>
              <div className="bg-gray-100 p-2 rounded-md">
                <p className="text-sm text-gray-700">Available upon request.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
