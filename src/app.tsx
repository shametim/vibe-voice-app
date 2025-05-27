export const App = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-amber-50 text-gray-900 shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
          Martin
        </h1>
        <p className="text-lg text-gray-600 mt-2">Software Engineer | Full-Stack Developer</p>
        <p className="text-sm text-gray-500 mt-1">martin@gmail.com | (123) 456-7890 | linkedin.com/in/amy-chen</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
          Work Experience
        </h2>
        <div className="mb-6">
          <h3 className="font-bold text-lg text-amber-800">Senior Full-Stack Developer</h3>
          <p className="text-gray-600">Rocket Mortgage | Jan 2020 – Present</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 ml-4 space-y-1">
            <li>Architected and maintained loan origination systems using React, TypeScript, and Node.js.</li>
            <li>Improved system performance by 40% through caching, database optimization, and microservices refactoring.</li>
            <li>Collaborated with product and QA teams to deliver mortgage automation tools and customer-facing dashboards.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg text-amber-800">Software Engineer</h3>
          <p className="text-gray-600">InnovateTech | Jun 2017 – Dec 2019</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 ml-4 space-y-1">
            <li>Developed and maintained internal tools using Python and Django.</li>
            <li>Implemented CI/CD pipelines using GitHub Actions and Docker.</li>
            <li>Contributed to open-source projects and mentored junior developers.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
          Professional Summary
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Results-driven software engineer with 5+ years of experience in full-stack development, specializing in building scalable web applications and APIs. Passionate about clean code, user experience, and agile methodologies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
          Education
        </h2>
        <div>
          <h3 className="font-bold text-lg">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600">University of California, Berkeley | 2013 – 2017</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <ul className="text-gray-700 space-y-1">
            <li className="border border-gray-200 p-2 rounded-md">React, Next.js</li>
            <li className="border border-gray-200 p-2 rounded-md">Node.js, Express</li>
            <li className="border border-gray-200 p-2 rounded-md">TypeScript, JavaScript</li>
            <li className="border border-gray-200 p-2 rounded-md">Python, Django</li>
          </ul>
          <ul className="text-gray-700 space-y-1">
            <li className="border border-gray-200 p-2 rounded-md">Git, GitHub</li>
            <li className="border border-gray-200 p-2 rounded-md">RESTful APIs</li>
            <li className="border border-gray-200 p-2 rounded-md">Agile & Scrum</li>
            <li className="border border-gray-200 p-2 rounded-md">UI/UX Design</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
          Contact Me
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Subject"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your message"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
