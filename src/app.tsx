import { useState, useEffect } from 'react';

export const App = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const articles = [
    {
      title: "The Climate Crisis Is Accelerating (And Your Grandma’s Garden Is Next!)",
      summary: "New research shows that global warming is progressing faster than previously predicted, with severe consequences for coastal cities and ecosystems.",
      category: 'world'
    },
    {
      title: "Tech Giants Face New Antitrust Challenges (Spoiler: They’re Still Winning)",
      summary: "Regulators in the EU and US are intensifying scrutiny of major technology companies, proposing sweeping reforms to competition laws.",
      category: 'news'
    },
    {
      title: "The Future of Remote Work (Who Knew Slack Could Be This Exhausting?)",
      summary: "As hybrid work models become the norm, companies are rethinking office spaces and employee benefits to maintain productivity and engagement.",
      category: 'opinion'
    },
    {
      title: "Global Food Prices Reach Record Highs (Your Sandwich Just Got a Raise)",
      summary: "A combination of climate disasters and supply chain disruptions has pushed food prices to unprecedented levels worldwide.",
      category: 'news'
    },
    {
      title: "Breakthrough in Quantum Computing (Your Password Is Now Safe... Probably)",
      summary: "Scientists have developed a new quantum encryption method that could make data breaches a thing of the past.",
      category: 'world'
    },
    {
      title: "Global Surge in Renewable Energy Investments (Solar Panels, Here We Come!)",
      summary: "Countries around the world are pouring billions into solar and wind energy projects to combat climate change.",
      category: 'world'
    },
    {
      title: "Alien Life Detected on Distant Exoplanet (It’s Probably Just a Rock, Though)",
      summary: "NASA scientists have confirmed the presence of potential microbial life on a planet 120 light-years away.",
      category: 'world'
    },
    {
      title: "Ethics in AI: A Global Conversation (Will My Roomba Start Judging Me?)",
      summary: "World leaders and tech experts are coming together to establish ethical guidelines for the development and use of artificial intelligence.",
      category: 'opinion'
    },
    {
      title: "Global Health Initiatives Gain Momentum (Finally, Someone Cares About My Cold!)",
      summary: "New partnerships between governments and NGOs are accelerating progress in combating diseases and improving healthcare access worldwide.",
      category: 'news'
    },
    {
      title: "The Rise of Space Tourism (For Rich People Who Hate Gravity)",
      summary: "With companies like Blue Origin and SpaceX leading the charge, space tourism is becoming a reality for wealthy travelers.",
      category: 'world'
    },
  ];

  const filteredArticles = activeTab === 'all'
    ? articles
    : articles.filter(article => article.category === activeTab);

  return (
    <div className={`min-h-screen bg-green-50 dark:bg-gray-900 font-sans transition-colors duration-300`}>
      {/* Header with Navigation */}
      <header className="bg-green-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold font-franklin-gothic-medium mb-4 md:mb-0">
            The New York Times
          </h1>
          <nav>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 relative">
              <li>
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 rounded-md font-bold transition-colors ${
                    activeTab === 'all' ? 'bg-white text-green-800' : 'text-white hover:bg-green-700'
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('news')}
                  className={`px-4 py-2 rounded-md font-bold transition-colors ${
                    activeTab === 'news' ? 'bg-white text-green-800' : 'text-white hover:bg-green-700'
                  }`}
                >
                  News
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('opinion')}
                  className={`px-4 py-2 rounded-md font-bold transition-colors ${
                    activeTab === 'opinion' ? 'bg-white text-green-800' : 'text-white hover:bg-green-700'
                  }`}
                >
                  Opinion
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('world')}
                  className={`px-4 py-2 rounded-md font-bold transition-colors ${
                    activeTab === 'world' ? 'bg-white text-green-800' : 'text-white hover:bg-green-700'
                  }`}
                >
                  World
                </button>
              </li>
              <li className="relative">
                <button 
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                  className="bg-white text-green-800 px-4 py-2 rounded-md font-bold hover:bg-green-100 transition-colors"
                >
                  Subscribe
                </button>
                
                {/* Newsletter Popover */}
                {isPopoverOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-10">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Stay Updated!</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Join our newsletter for daily news digests and exclusive content.</p>
                    <form className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <button 
                        type="submit" 
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full bg-white text-green-800 hover:bg-green-100 transition-colors"
                >
                  {isDarkMode ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto bg-white dark:bg-gray-800 p-4 sm:p-6 transition-colors duration-300">
        <p className="text-lg text-gray-800 dark:text-gray-200 font-inter leading-relaxed mb-8">
          A simple, elegant layout inspired by the classic New York Times design.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 border border-green-200 dark:border-gray-600 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 hover:text-green-600 hover:underline cursor-pointer">
                {article.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 font-inter leading-relaxed">
                {article.summary}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
