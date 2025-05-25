import React, { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    document.title = "7-Day Swiss Travel Itinerary | Explore the Alps";
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <header className="mb-8 text-center flex flex-col md:flex-row items-center justify-center">
          <img
            src="https://picsum.photos/200/300"
            alt="Swiss Alps"
            className="w-16 h-16 rounded-full object-cover mb-4 md:mb-0 md:mr-4"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Welcome to Switzerland 🇨🇭
            </h1>
            <p className="text-gray-600 font-inter text-lg mt-2">7-Day Travel Itinerary | Alps, Lakes, and Culture</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="col-span-2">
            <section className="mb-8 border-b pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Itinerary</h2>
              <p className="text-gray-600 font-inter leading-relaxed">
                This 7-day itinerary takes you through the heart of Switzerland: from the snow-capped Alps to the serene lakes of Geneva and Lucerne. You'll experience Swiss culture, world-class hiking, and unforgettable mountain views.
              </p>
            </section>

            <section className="mb-8 border-b pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7-Day Itinerary</h2>
              <div className="space-y-6">
                <article>
                  <h3 className="text-xl font-semibold text-gray-800">Day 1: Arrival in Zurich</h3>
                  <p className="text-gray-600 font-inter mt-2">
                    Arrive in Zurich and start your journey in the charming Old Town (Altstadt), where you'll find narrow cobblestone streets, colorful buildings, and historic landmarks like the Grossmünster and the iconic Zurich Cathedral. Take a relaxing stroll along the River Promenade (Lindenhof) and enjoy views of the Limmat River and the city skyline. In the evening, head to the Lake Zurich shoreline for a peaceful sunset or dine at a lakeside restaurant like the famous Limmatquai for a traditional Swiss meal.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-gray-800">Day 2: Zurich to Lucerne</h3>
                  <p className="text-gray-600 font-inter mt-2">
                    Take a scenic train ride from Zurich to Lucerne, passing through picturesque Swiss countryside and mountain vistas. Upon arrival, visit the Lion Monument (Löwendenkmal), a moving tribute to the fallen French soldiers of the 1792 siege of Lucerne. Explore the Chapel Bridge (Kapellbrücke), one of the oldest covered bridges in Europe, and enjoy panoramic views of the Reuss River. In the afternoon, take a boat tour on Lake Lucerne or hike up to Mount Pilatus for breathtaking alpine views. End your day with a cozy fondue dinner in a traditional Swiss chalet.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-gray-800">Day 3: Mount Pilatus</h3>
                  <p className="text-gray-600 font-inter mt-2">
                    Hike or take the cable car to the summit of Mount Pilatus for breathtaking alpine views.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-gray-800">Day 4: Interlaken</h3>
                  <p className="text-gray-600 font-inter mt-2">
                    Stay in Interlaken and explore the Jungfrau region. Go paragliding or take a boat tour on Lake Thun.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-gray-800">Day 5: Jungfraujoch – Top of Europe</h3>
                  <p className="text-gray-600 font-inter mt-2">
                    Take the Jungfrau Railway to the highest train station in Europe and enjoy panoramic views.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-gray-800">Day 6: Geneva</h3>
                  <p className="text-gray-600 font-inter mt-2">
                    Visit Geneva's Lake Geneva, the United Nations Office, and the Jet d'Eau fountain.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-gray-800">Day 7: Departure</h3>
                  <p className="text-gray-600 font-inter mt-2">
                    Depart from Geneva or Zurich with unforgettable memories of the Swiss Alps.
                  </p>
                </article>
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div>
            <section className="mb-8 border-b pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Attractions</h2>
              <ul className="space-y-2">
                <li><a href="#lucerne" className="text-blue-600 hover:underline">Lucerne</a></li>
                <li><a href="#interlaken" className="text-blue-600 hover:underline">Interlaken</a></li>
                <li><a href="#geneva" className="text-blue-600 hover:underline">Geneva</a></li>
                <li><a href="#jungfrau" className="text-blue-600 hover:underline">Jungfraujoch</a></li>
              </ul>
            </section>

            <section className="mb-8 border-b pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Local Cuisine</h2>
              <ul className="space-y-2">
                <li><a href="#fondue" className="text-blue-600 hover:underline">Cheese Fondue</a></li>
                <li><a href="#raclette" className="text-blue-600 hover:underline">Raclette</a></li>
                <li><a href="#chocolate" className="text-blue-600 hover:underline">Swiss Chocolate</a></li>
              </ul>
            </section>

            <section className="mb-8 border-b pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Travel Tips</h2>
              <ul className="space-y-2">
                <li><a href="#transport" className="text-blue-600 hover:underline">Public Transport</a></li>
                <li><a href="#weather" className="text-blue-600 hover:underline">Weather in Switzerland</a></li>
                <li><a href="#visa" className="text-blue-600 hover:underline">Visa Requirements</a></li>
              </ul>
            </section>

            <section className="mb-8 border-b pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Budget Hotels</h2>
              <div className="overflow-x-auto">
                <div className="grid grid-cols-4 gap-2 text-left px-2">
                  <div className="font-bold uppercase">Hotel</div>
                  <div className="font-bold uppercase">Location</div>
                  <div className="font-bold uppercase">Price/night</div>
                  <div className="font-bold uppercase">Rating</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-left px-2 border-t border-gray-200">
                  <div className="py-2">Hostel One Zurich</div>
                  <div className="py-2">Zurich</div>
                  <div className="py-2">CHF 90</div>
                  <div className="py-2">4.2 ⭐</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-left px-2 border-t border-gray-200">
                  <div className="py-2">Ibis Budget Lucerne</div>
                  <div className="py-2">Lucerne</div>
                  <div className="py-2">CHF 95</div>
                  <div className="py-2">4.0 ⭐</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-left px-2 border-t border-gray-200">
                  <div className="py-2">Hotel Adler Geneva</div>
                  <div className="py-2">Geneva</div>
                  <div className="py-2">CHF 90</div>
                  <div className="py-2">4.3 ⭐</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-left px-2 border-t border-gray-200">
                  <div className="py-2">Hotel Krone Interlaken</div>
                  <div className="py-2">Interlaken</div>
                  <div className="py-2">CHF 100</div>
                  <div className="py-2">4.1 ⭐</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-left px-2 border-t border-gray-200">
                  <div className="py-2">Hotel des Alpes</div>
                  <div className="py-2">Geneva</div>
                  <div className="py-2">CHF 90</div>
                  <div className="py-2">4.4 ⭐</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-left px-2 border-t border-gray-200">
                  <div className="py-2">Ibis Budget Zurich</div>
                  <div className="py-2">Zurich</div>
                  <div className="py-2">CHF 85</div>
                  <div className="py-2">4.0 ⭐</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
