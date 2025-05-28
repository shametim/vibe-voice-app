export const App = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800 relative">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Department Overview */}
        <div className="p-6 bg-white border-r border-gray-200 shadow-sm">
          <h2 className="text-2xl font-medium mb-4">About Us</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <strong>Shared Services Center:</strong> Streamlining financial operations across campus.
            </li>
            <li>
              <strong>Holiday Reconcile Accounts:</strong> Ensuring accurate and timely reconciliation during peak periods.
            </li>
            <li>
              <strong>Expertise:</strong> Financial reporting, compliance, and audit readiness.
            </li>
            <li>
              <strong>Support:</strong> Dedicated to serving faculty, staff, and students.
            </li>
          </ul>
        </div>

        {/* Right Column: Financial Services Content */}
        <div>
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-amber-600 font-sans shadow-md">
              Hey! Welcome to UMich Financial Services
            </h1>
            <p className="text-lg text-gray-600 mt-2">Shared Services Center</p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-medium border-b border-gray-300 pb-1 mb-3">Department Overview</h2>
            <div className="ml-5 space-y-2">
              <p>Providing centralized financial services to support the University of Michigan's mission of excellence in education, research, and patient care.</p>
              <p>Our team ensures compliance, accuracy, and efficiency in financial operations across all departments.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium border-b border-gray-300 pb-1 mb-3">Key Services</h2>
            <div className="ml-5 space-y-3">
              <div>
                <h3 className="font-medium">Holiday Reconcile Accounts</h3>
                <p className="text-sm text-gray-500">Financial Services | Year-round</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Specialized reconciliation during peak holiday periods to ensure financial accuracy.</li>
                  <li>Support for departments with high transaction volumes during holidays.</li>
                  <li>Timely reporting and audit readiness for year-end reviews.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Financial Compliance & Reporting</h3>
                <p className="text-sm text-gray-500">Shared Services Center | Daily Operations</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Ensure adherence to state and federal financial regulations.</li>
                  <li>Prepare and deliver monthly and annual financial reports.</li>
                  <li>Coordinate with auditors and external stakeholders for transparency.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium border-b border-gray-300 pb-1 mb-3">Our Expertise</h2>
            <div className="ml-5">
              <ul className="list-disc ml-5 space-y-1">
                <li>Financial Reporting & Analysis</li>
                <li>Account Reconciliation & Compliance</li>
                <li>Accounting Software (SAP, Oracle, QuickBooks)</li>
                <li>Budget Forecasting & Planning</li>
                <li>Internal Controls & Audit Readiness</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
