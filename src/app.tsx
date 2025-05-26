export const App = () => {
  return (
    <div className="bg-purple-50 min-h-screen text-gray-900 font-sans">
      {/* New Hero Section */}
      <div className="bg-purple-600 text-white p-2 md:p-3 text-center">
        <h1 className="text-xl md:text-2xl font-bold">Hiya! I'm Martin</h1>
        <p className="mt-0.5 text-purple-100 text-xs">
          Malaysian Chef & Holiday Feast Creator | Head Chef at Gordon Ramsay's Restaurant 🎄
        </p>
        <div className="flex justify-center gap-2 mt-1">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Vibe Voice App Title */}
      <div className="text-center mt-2 mb-1">
        <h1 className="text-2xl font-bold text-purple-800">Vibe Voice App</h1>
      </div>

      <div className="max-w-4xl mx-auto p-2 md:p-3">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Sidebar - Contact Info */}
          <div className="w-full md:w-1/3 bg-purple-100 p-2 rounded-md shadow-sm transition-shadow duration-200 hover:shadow">
            <div className="text-center md:text-left">
              <a href="#top" className="text-2xl font-bold text-purple-600 mb-0.5 block transition-colors duration-200 hover:text-purple-500">Martin</a>
              <p className="text-gray-700 mb-0.5 text-xs italic">Head Chef | Malaysian Cuisine Specialist 🎅</p>
              <div className="space-y-1 text-xs text-gray-700">
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="font-bold text-xs">123 Main Street, Chicago, IL 60601</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>+60 123 456 789</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>ming.tan@malaysianchef.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>www.malaysianchefresume.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 space-y-2">
            {/* About Me */}
            <section className="transition-all duration-200 hover:scale-[1.002]">
              <h2 className="text-lg font-bold text-purple-600 mb-0.5">About Me</h2>
              <p className="text-gray-700 leading-tight text-xs">
                Hi! I'm Martin, a Malaysian chef who loves bringing people together with food—especially during the holidays! 🎄 With over 10 years in the kitchen, I've worked with big names like Gordon Ramsay and Bobby Flay. I'm all about making meals that bring joy and warmth to the table. Let's cook up something awesome together! 🍲🔥
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-0.5">Work Experience</h2>

              <div className="mb-1 p-2 bg-gray-50 rounded-md transition-colors duration-200 hover:bg-gray-100">
                <h3 className="text-base font-semibold text-gray-800">Head Chef</h3>
                <p className="text-gray-600 mb-0.5">Gordon Ramsay's Restaurant, Chicago • 2023 - Present</p>
                <ul className="list-disc list-inside text-gray-700 ml-3 space-y-0.5 text-xs">
                  <li>Managed a high-pressure kitchen environment in a Michelin-starred establishment</li>
                  <li>Collaborated with Gordon Ramsay on menu development and kitchen operations</li>
                  <li>Trained and led a team of 20+ chefs and kitchen staff</li>
                  <li>Improved food quality and consistency, contributing to a 40% increase in customer satisfaction</li>
                </ul>
              </div>

              <div className="mb-1 p-2 bg-gray-50 rounded-md transition-colors duration-200 hover:bg-gray-100">
                <h3 className="text-base font-semibold text-gray-800">Head Chef</h3>
                <p className="text-gray-600 mb-0.5">Seri Warisan Restaurant, Chicago • 2018 - 2023</p>
                <ul className="list-disc list-inside text-gray-700 ml-3 space-y-0.5 text-xs">
                  <li>Lead a team of 15+ kitchen staff and manage daily operations of the 100-seat restaurant</li>
                  <li>Developed signature dishes including Ayam Percik, Laksa Lemak, and Char Kway Teow</li>
                  <li>Increased customer satisfaction ratings by 35% through quality control and service improvements</li>
                  <li>Created and maintained HACCP-compliant kitchen standards</li>
                </ul>
              </div>

              <div className="mb-1 p-2 bg-gray-50 rounded-md transition-colors duration-200 hover:bg-gray-100">
                <h3 className="text-base font-semibold text-gray-800">Executive Chef</h3>
                <p className="text-gray-600 mb-0.5">The Spice Garden, Chicago • 2015 - 2018</p>
                <ul className="list-disc list-inside text-gray-700 ml-3 space-y-0.5 text-xs">
                  <li>Expanded the menu to include modern interpretations of traditional Malaysian dishes</li>
                  <li>Trained and mentored 12+ kitchen staff in advanced cooking techniques and food presentation</li>
                  <li>Improved customer satisfaction by 25% through enhanced service and menu innovation</li>
                  <li>Implemented new food safety protocols that reduced waste by 20%</li>
                </ul>
              </div>

              <div className="mb-1 p-2 bg-gray-50 rounded-md transition-colors duration-200 hover:bg-gray-100">
                <h3 className="text-base font-semibold text-gray-800">Executive Chef</h3>
                <p className="text-gray-600 mb-0.5">Rasa Nusantara, Penang • 2012 - 2015</p>
                <ul className="list-disc list-inside text-gray-700 ml-3 space-y-0.5 text-xs">
                  <li>Expanded menu to include regional Malaysian specialties from Sabah and Sarawak</li>
                  <li>Trained 20+ staff members in traditional cooking techniques and food presentation</li>
                  <li>Won "Best Malaysian Cuisine" award in 2015 and 2017</li>
                  <li>Managed inventory and reduced food waste by 40% through better forecasting</li>
                </ul>
              </div>
            </section>

            {/* Collaborations */}
            <section className="transition-all duration-200 hover:scale-[1.002]">
              <h2 className="text-lg font-bold text-purple-600 mb-0.5">Notable Collaborations</h2>
              <ul className="list-disc list-inside text-gray-700 ml-3 space-y-0.5 text-xs">
                <li>Collaborated with Gordon Ramsay on a fusion Malaysian cuisine pop-up event in London (2022) 🌍</li>
                <li>Worked with Bobby Flay on a televised cooking challenge focused on Asian fusion dishes (2021) 🎥</li>
                <li>Contributed to a high-profile culinary workshop with international chefs at the Global Food Summit (2023) 🤝</li>
                <li>Contestant on Iron Chef 2025, winning the competition 🏆</li>
              </ul>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-0.5">Skills</h2>
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-purple-50 p-1 rounded-md transition-transform duration-200 hover:scale-100">
                  <h4 className="font-medium text-gray-800 text-xs">Culinary Expertise</h4>
                  <p className="text-xs text-gray-600">Malaysian Cuisine, Nonya Cooking, Chinese-Peranakan Techniques</p>
                </div>
                <div className="bg-purple-50 p-1 rounded-md transition-transform duration-200 hover:scale-100">
                  <h4 className="font-medium text-gray-800 text-xs">Kitchen Management</h4>
                  <p className="text-xs text-gray-600">Team Leadership, Inventory Control, Food Safety</p>
                </div>
                <div className="bg-purple-50 p-1 rounded-md transition-transform duration-200 hover:scale-100">
                  <h4 className="font-medium text-gray-800 text-xs">Menu Development</h4>
                  <p className="text-xs text-gray-600">Seasonal Menus, Dietary Restrictions, Fusion Cuisine</p>
                </div>
                <div className="bg-purple-50 p-1 rounded-md transition-transform duration-200 hover:scale-100">
                  <h4 className="font-medium text-gray-800 text-xs">Technology</h4>
                  <p className="text-xs text-gray-600">POS Systems, Kitchen Display Systems, Food Cost Software</p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="transition-all duration-200 hover:scale-[1.002]">
              <h2 className="text-lg font-bold text-purple-600 mb-0.5">Education</h2>
              <div className="bg-gray-100 p-1 rounded-md">
                <h3 className="font-semibold text-gray-800 text-xs">Diploma in Culinary Arts</h3>
                <p className="text-gray-600 text-xs">Kuala Lumpur Culinary Institute • 2009 - 2011</p>
                <p className="text-xs text-gray-600 mt-0.5">Specialization in Asian Cuisines with honors</p>
              </div>
            </section>

            {/* Sign Up Section */}
            <section>
              <h2 className="text-lg font-bold text-purple-600 mb-0.5">Join the Holiday Feast</h2>
              <div className="bg-purple-50 p-2 rounded-md shadow-sm max-w-md mx-auto transition-all duration-200 hover:shadow">
                <form>
                  <div className="mb-1">
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-0.5">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-1 py-0.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-xs"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-0.5">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-1 py-0.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-xs"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-0.5">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-1 py-0.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-xs"
                      placeholder="Your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-0.5 px-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 transform hover:scale-100 shadow-sm hover:shadow text-xs"
                  >
                    Join the Holiday Feast 🎉
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
