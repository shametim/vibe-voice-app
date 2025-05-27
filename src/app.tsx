export const App = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-amber-50 text-gray-900 shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl relative flex flex-row bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhESMIAAAAABJRU5ErkJggg==')] bg-cover bg-center bg-fixed">
      {/* Left Half: Forum Header */}
      <div className="w-1/2">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
            Albanian Language Hangout
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Chill, swap tips, and help boost the Albanian language!
          </p>
        </header>
      </div>

      {/* Right Half: Forum Content */}
      <div className="w-full">
        {/* Left Icon Navigation Sidebar */}
        <nav className="fixed top-0 left-4 h-screen w-16 flex flex-col justify-start items-center space-y-8 z-40">
          <a href="#articles" className="text-amber-600 hover:text-amber-800 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </a>
          <a href="#topics" className="text-amber-600 hover:text-amber-800 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </a>
          <a href="#about" className="text-amber-600 hover:text-amber-800 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </a>
          <a href="#guidelines" className="text-amber-600 hover:text-amber-800 transition-all">
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

        <section id="articles" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-amber-800">Albanian Language in Europe</h3>
              <p className="text-gray-600 mt-2">An analysis of the history and position of the Albanian language in the European context.</p>
              <p className="text-sm text-gray-500 mt-2">Written by: Liridh Krasniqi</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-amber-800">Albanian Language in School</h3>
              <p className="text-gray-600 mt-2">Discussion of the importance of teaching the Albanian language in school.</p>
              <p className="text-sm text-gray-500 mt-2">Written by: Ermal Hoxha</p>
            </div>
          </div>
        </section>

        <section id="topics" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
            Popular Topics
          </h2>
          <ul className="space-y-3">
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-amber-800">Albanian Language in Media</h3>
              <p className="text-gray-600">Discussion of the use of the Albanian language in television, newspapers, and the internet.</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-amber-800">Albanian Language in Literature</h3>
              <p className="text-gray-600">The role of the Albanian language in the development of national literature.</p>
            </li>
          </ul>
        </section>

        <section id="about" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
            About the Forum
          </h2>
          <p className="text-gray-800 leading-relaxed">
            The Albanian Language Forum is a free platform for everyone interested in the Albanian language. Our goal is to promote the use of the Albanian language in daily life, education, and culture.
          </p>
        </section>

        <section id="guidelines" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
            Community Guidelines
          </h2>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
            <li>Respect all members.</li>
            <li>Write in the Albanian language.</li>
            <li>Avoid words that may cause conflict.</li>
            <li>Follow forum rules.</li>
          </ul>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
            Contact Us
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
    </div>
  );
};
