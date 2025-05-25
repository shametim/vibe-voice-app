import React, { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    document.title = "All About Cats | Cat Care, Health & Behavior";
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <header className="mb-8 text-center flex flex-col md:flex-row items-center justify-center">
          <img
            src="https://picsum.photos/200/300"
            alt="Miguelo the Cat"
            className="w-16 h-16 rounded-full object-cover mb-4 md:mb-0 md:mr-4"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              Hey there! I'm Miguelo 🐾
            </h1>
            <p className="text-gray-600 font-inter text-lg mt-2">Adventurous Stray | Expert Mouser</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="col-span-2">
            <section className="mb-8 border-b pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
              <p className="text-gray-600 font-inter leading-relaxed">
                I'm an adventurous orange tabby with a knack for finding the sunniest spots and the most elusive prey. I'm passionate about exploring back alleys, knocking over objects, and napping in cardboard boxes. My goal is to become the neighborhood's top mouser and to master the art of the perfect purr.
              </p>
            </section>

            <section className="mb-8 border-b pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Cat Articles</h2>
              <div className="space-y-6">
                <article>
                  <h3 className="text-xl font-semibold text-gray-800">
                    <a href="#cat-care" className="hover:text-orange-500 transition">The Ultimate Guide to Cat Care</a>
                  </h3>
                  <p className="text-gray-600 font-inter mt-2">
                    Learn how to provide the best care for your feline friend, from diet to grooming and playtime.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-gray-800">
                    <a href="#cat-health" className="hover:text-orange-500 transition">Common Cat Health Issues</a>
                  </h3>
                  <p className="text-gray-600 font-inter mt-2">
                    Discover the most common health problems in cats and how to prevent or treat them.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-gray-800">
                    <a href="#cat-behavior" className="hover:text-orange-500 transition">Understanding Cat Behavior</a>
                  </h3>
                  <p className="text-gray-600 font-inter mt-2">
                    Decode your cat's body language and learn how to better communicate with your pet.
                  </p>
                </article>
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div>
            <section className="mb-8 border-b pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
              <ul className="space-y-2">
                <li><a href="#cat-care" className="text-blue-600 hover:underline">Cat Care</a></li>
                <li><a href="#cat-health" className="text-blue-600 hover:underline">Cat Health</a></li>
                <li><a href="#cat-behavior" className="text-blue-600 hover:underline">Cat Behavior</a></li>
                <li><a href="#cat-breeds" className="text-blue-600 hover:underline">Cat Breeds</a></li>
                <li><a href="#cat-training" className="text-blue-600 hover:underline">Cat Training</a></li>
              </ul>
            </section>

            <section className="mb-8 border-b pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Posts</h2>
              <ul className="space-y-2">
                <li><a href="#cat-care" className="text-blue-600 hover:underline">Top 10 Cat Care Tips</a></li>
                <li><a href="#cat-health" className="text-blue-600 hover:underline">How to Spot Illness in Cats</a></li>
                <li><a href="#cat-behavior" className="text-blue-600 hover:underline">Why Cats Knock Things Over</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">External Resources</h2>
              <ul className="space-y-2">
                <li><a href="https://www.aspca.org" className="text-blue-600 hover:underline" target="_blank">ASPCA</a></li>
                <li><a href="https://www.catfanciers.com" className="text-blue-600 hover:underline" target="_blank">Cat Fanciers' Association</a></li>
                <li><a href="https://www.petco.com" className="text-blue-600 hover:underline" target="_blank">Petco</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
