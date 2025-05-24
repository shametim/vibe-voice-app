export const App = () => {
  const articles = [
    {
      title: "The Climate Crisis Is Accelerating (And Your Grandma’s Garden Is Next!)",
      summary: "New research shows that global warming is progressing faster than previously predicted, with severe consequences for coastal cities and ecosystems."
    },
    {
      title: "Tech Giants Face New Antitrust Challenges (Spoiler: They’re Still Winning)",
      summary: "Regulators in the EU and US are intensifying scrutiny of major technology companies, proposing sweeping reforms to competition laws."
    },
    {
      title: "The Future of Remote Work (Who Knew Slack Could Be This Exhausting?)",
      summary: "As hybrid work models become the norm, companies are rethinking office spaces and employee benefits to maintain productivity and engagement."
    },
    {
      title: "Global Food Prices Reach Record Highs (Your Sandwich Just Got a Raise)",
      summary: "A combination of climate disasters and supply chain disruptions has pushed food prices to unprecedented levels worldwide."
    },
    {
      title: "Breakthrough in Quantum Computing (Your Password Is Now Safe... Probably)",
      summary: "Scientists have developed a new quantum encryption method that could make data breaches a thing of the past."
    },
    {
      title: "Global Surge in Renewable Energy Investments (Solar Panels, Here We Come!)",
      summary: "Countries around the world are pouring billions into solar and wind energy projects to combat climate change."
    },
    {
      title: "Alien Life Detected on Distant Exoplanet (It’s Probably Just a Rock, Though)",
      summary: "NASA scientists have confirmed the presence of potential microbial life on a planet 120 light-years away."
    },
    {
      title: "Ethics in AI: A Global Conversation (Will My Roomba Start Judging Me?)",
      summary: "World leaders and tech experts are coming together to establish ethical guidelines for the development and use of artificial intelligence."
    },
    {
      title: "Global Health Initiatives Gain Momentum (Finally, Someone Cares About My Cold!)",
      summary: "New partnerships between governments and NGOs are accelerating progress in combating diseases and improving healthcare access worldwide."
    },
    {
      title: "The Rise of Space Tourism (For Rich People Who Hate Gravity)",
      summary: "With companies like Blue Origin and SpaceX leading the charge, space tourism is becoming a reality for wealthy travelers."
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 font-sans">
      {/* Header with Navigation */}
      <header className="bg-green-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold font-franklin-gothic-medium mb-4 md:mb-0">
            The New York Times
          </h1>
          <nav>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Opinion</a></li>
              <li><a href="#" className="hover:underline">World</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto bg-white p-4 sm:p-6">
        <p className="text-lg text-gray-800 font-inter leading-relaxed mb-8">
          A simple, elegant layout inspired by the classic New York Times design.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="bg-white border border-green-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-green-600 hover:underline cursor-pointer">
                {article.title}
              </h2>
              <p className="text-gray-700 font-inter leading-relaxed">
                {article.summary}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
