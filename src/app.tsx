export const App = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white text-gray-800">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-amber-800">l e k a</h1>
        <p className="text-lg text-gray-600 mt-2">Software Developer</p>
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
          </ul>
        </div>
      </section>
    </div>
  );
};
