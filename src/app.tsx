export const App = () => {
  const articles = [
    {
      title: "The Climate Crisis Is Accelerating",
      summary: "New research shows that global warming is progressing faster than previously predicted, with severe consequences for coastal cities and ecosystems."
    },
    {
      title: "Tech Giants Face New Antitrust Challenges",
      summary: "Regulators in the EU and US are intensifying scrutiny of major technology companies, proposing sweeping reforms to competition laws."
    },
    {
      title: "The Future of Remote Work",
      summary: "As hybrid work models become the norm, companies are rethinking office spaces and employee benefits to maintain productivity and engagement."
    },
    {
      title: "Global Food Prices Reach Record Highs",
      summary: "A combination of climate disasters and supply chain disruptions has pushed food prices to unprecedented levels worldwide."
    },
    {
      title: "Breakthrough in Quantum Computing",
      summary: "Scientists have developed a new quantum encryption method that could make data breaches a thing of the past."
    },
    {
      title: "Global Surge in Renewable Energy Investments",
      summary: "Countries around the world are pouring billions into solar and wind energy projects to combat climate change."
    },
    {
      title: "Alien Life Detected on Distant Exoplanet",
      summary: "NASA scientists have confirmed the presence of potential microbial life on a planet 120 light-years away."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white p-8">
      <h1 className="text-4xl font-bold font-franklin-gothic-medium text-gray-800 mb-6 text-center">
        The New York Times
      </h1>
      <p className="text-lg text-gray-700 font-inter leading-relaxed mb-8">
        A simple, elegant layout inspired by the classic New York Times design.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
              {article.title}
            </h2>
            <p className="text-gray-600 font-inter leading-relaxed">
              {article.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
