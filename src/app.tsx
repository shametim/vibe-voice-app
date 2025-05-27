export const App = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800 relative">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Instructions (Overlay) */}
        <div className="p-6 bg-white border-r border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <strong>Change Name:</strong> Say "Change name to [Name]"
            </li>
            <li>
              <strong>Add Experience:</strong> Say "Add experience as [Job Title] at [Company]"
            </li>
            <li>
              <strong>Update Skills:</strong> Say "Add skill [Skill Name]"
            </li>
            <li>
              <strong>Change Education:</strong> Say "Update education to [Degree] from [University]"
            </li>
          </ul>
        </div>

        {/* Right Column: Marcela's Resume Content */}
        <div>
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-amber-800 font-serif">Marcela</h1>
            <p className="text-lg text-gray-600 mt-2">Accountant</p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-3">Education</h2>
            <div className="ml-5 space-y-2">
              <p>Bachelor of Science in Accounting, University of Michigan</p>
              <p>Graduated: May 2020</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-3">Experience</h2>
            <div className="ml-5 space-y-4">
              <div>
                <h3 className="font-medium">Accountant</h3>
                <p className="text-sm text-gray-500">University of Michigan | Jan 2021 – Present</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Manage financial records and ensure compliance with university and federal regulations.</li>
                  <li>Prepare monthly financial reports and assist in budget forecasting.</li>
                  <li>Coordinate with auditors and external stakeholders to maintain transparency and accuracy.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Accounting Intern</h3>
                <p className="text-sm text-gray-500">Michigan State University | May 2019 – Aug 2019</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Assisted in reconciling accounts and preparing tax documents.</li>
                  <li>Supported the finance team in data entry and financial analysis.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-3">Skills</h2>
            <div className="ml-5">
              <ul className="list-disc ml-5 space-y-1">
                <li>Financial Reporting</li>
                <li>Accounting Software (QuickBooks, SAP)</li>
                <li>Tax Preparation</li>
                <li>Budget Forecasting</li>
                <li>GAAP Compliance</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
