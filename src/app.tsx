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

        {/* Right Column: Original Content */}
        <div>
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-amber-800 font-serif">Hey Leka</h1>
            <p className="text-lg text-gray-600 mt-2">Software Dev</p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-3">Education</h2>
            <div className="ml-5 space-y-2">
              <p>BS in Computer Science, University of Example</p>
              <p>Graduated: May 2022</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-3">Experience</h2>
            <div className="ml-5 space-y-4">
              <div>
                <h3 className="font-medium">Senior Software Engineer</h3>
                <p className="text-sm text-gray-500">Tech Corp | Jan 2023 – Present</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Developed scalable web applications using React and TypeScript.</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Junior Developer</h3>
                <p className="text-sm text-gray-500">Startup Inc | Jun 2021 – Dec 2022</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Contributed to full-stack development using Node.js and MongoDB.</li>
                  <li>Improved application performance by 30% through code optimization.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-3">Skills</h2>
            <div className="ml-5">
              <ul className="list-disc ml-5 space-y-1">
                <li>JavaScript / TypeScript</li>
                <li>React, Next.js</li>
                <li>Node.js, Express</li>
                <li>Git, CI/CD</li>
                <li>GitHub Co-Pilot</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
