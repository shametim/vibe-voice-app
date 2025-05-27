export const App = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-amber-50 text-gray-900 shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl relative">
      {/* Fixed Navigation Sidebar */}
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
