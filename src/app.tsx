export const App = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-amber-50 text-gray-900 shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl relative ml-24">
      {/* Left Icon Navigation Sidebar */}
      <nav className="fixed top-0 left-4 h-screen w-16 flex flex-col justify-start items-center space-y-8 z-40">
        <a href="#experience" className="text-amber-600 hover:text-amber-800 transition-all">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </a>
        <a href="#summary" className="text-amber-600 hover:text-amber-800 transition-all">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </a>
        <a href="#education" className="text-amber-600 hover:text-amber-800 transition-all">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </a>
        <a href="#skills" className="text-amber-600 hover:text-amber-800 transition-all">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
        </a>
        <a href="#contact" className="text-amber-600 hover:text-amber-800 transition-all">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </a>
      </nav>

      {/* Fixed Navigation Sidebar (Right) */}
      <nav className="fixed top-24 right-4 h-[calc(100vh-6rem)] w-24 flex flex-col justify-start items-center space-y-4 z-40">
        <a href="#experience" className="w-full text-center bg-amber-600 text-white px-3 py-2 rounded-md hover:bg-amber-700 transition">E</a>
        <a href="#summary" className="w-full text-center bg-amber-600 text-white px-3 py-2 rounded-md hover:bg-amber-700 transition">S</a>
        <a href="#education" className="w-full text-center bg-amber-600 text-white px-3 py-2 rounded-md hover:bg-amber-700 transition">E</a>
        <a href="#skills" className="w-full text-center bg-amber-600 text-white px-3 py-2 rounded-md hover:bg-amber-700 transition">S</a>
        <a href="#contact" className="w-full text-center bg-amber-600 text-white px-3 py-2 rounded-md hover:bg-amber-700 transition">C</a>
      </nav>

      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
          Martin
        </h1>
        <p className="text-lg text-gray-600 mt-2">Inxhinier i Softverit | Inxhinier Full-Stack</p>
        <p className="text-sm text-gray-500 mt-1">martin@gmail.com | (123) 456-7890 | linkedin.com/in/amy-chen</p>
      </header>

      <section id="experience" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
          Eksperiencë e Punës
        </h2>
        <div className="mb-6">
          <h3 className="font-bold text-lg text-amber-800">Inxhinier Full-Stack Senior</h3>
          <p className="text-gray-600">Rocket Mortgage | Jan 2020 – Tani</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 ml-4 space-y-1">
            <li>Architected and maintained loan origination systems using React, TypeScript, and Node.js.</li>
            <li>Improved system performance by 40% through caching, database optimization, and microservices refactoring.</li>
            <li>Collaborated with product and QA teams to deliver mortgage automation tools and customer-facing dashboards.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg text-amber-800">Inxhinier i Softverit</h3>
          <p className="text-gray-600">InnovateTech | Jun 2017 – Dec 2019</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 ml-4 space-y-1">
            <li>Developed and maintained internal tools using Python and Django.</li>
            <li>Implemented CI/CD pipelines using GitHub Actions and Docker.</li>
            <li>Contributed to open-source projects and mentored junior developers.</li>
          </ul>
        </div>
      </section>

      <section id="summary" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
          Përmbledhje Profesionale
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Inxhinier i softverit me rezultate, me më shumë se 5 vjet përvojë në zhvillim full-stack, duke veçuar në ndërtimin e aplikacioneve web dhe API-ve të shkallëzuara. I pasionuar nga kodimi i pastër, përvoja e përdoruesit dhe metodologjitë agile.
        </p>
      </section>

      <section id="education" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
          Arsimimi
        </h2>
        <div>
          <h3 className="font-bold text-lg">Baklora në Inxhinieri e Softverit</h3>
          <p className="text-gray-600">Universiteti i Kalifornisë, Berkeley | 2013 – 2017</p>
        </div>
      </section>

      <section id="skills" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
          Shkatërrime
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

      <section id="contact" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
          Kontaktoni Me
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Emri
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Emri juaj"
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
                placeholder="Email juaj"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Tema
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Tema"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mesazh
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Mesazhi juaj"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Dërgo Mesazhin
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
