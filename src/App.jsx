import React, { useState, useEffect } from 'react';
import {
  FiMonitor,
  FiGlobe,
  FiSmartphone,
  FiShield,
  FiMapPin,
  FiClock,
  FiDollarSign, // Add this import
  FiMail,
  FiSun,
  FiMoon,
} from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';

const events = [];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(userPrefersDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        {/* Dark Mode Switch */}
        <div className="fixed top-4 right-4 z-50">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="sr-only" />
            <div className="w-14 h-8 bg-gray-200 rounded-full border border-gray-400 dark:bg-gray-700">
              <div className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition ${darkMode ? 'transform translate-x-6 bg-[#373CFA]' : 'bg-gray-800'}`}>
                {darkMode ? <FiSun className="text-xs text-white mx-auto flex items-center justify-center h-full" /> : <FiMoon className="text-xs text-white mx-auto flex items-center justify-center h-full" />}
              </div>
            </div>
          </label>
        </div>
        <Routes>
          <Route path="/" element={
            <>
              {/* Banner */}
              <div className={`text-center py-4 px-4 ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>
                <p className="text-lg font-semibold">
                  Hamarosan indulunk!
                </p>
                <p className="text-md mt-2">
                  A program még nem kezdődött el, de már úton van. Kérjük, kövessék figyelemmel a frissítéseket!
                </p>
              </div>
              {/* Header */}
              <header className={`py-8 md:py-12 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-[#373CFA] text-white'}`}>
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-center">
                    <img
                      src="/src/digitu.png"
                      alt="Digitális Írástudás Program"
                      className="w-[270px] sm:w-[240px] md:w-[350px] h-auto mx-auto"
                    />
                  </div>
                  <p className="text-base sm:text-xl md:text-xl text-center mt-6 max-w-2xl mx-auto">
                    A digitális világ nem bonyolult – mi megmutatjuk az utat.
                  </p>
                </div>
              </header>
              <main className="container mx-auto px-4 py-12">
                {/* Main Content */}
                {/* Educational Areas */}
                <section className="max-w-6xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-center mb-10">Oktatási területek</h2>
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      {
                        icon: FiMonitor,
                        title: 'Alapok',
                        items: ['Windows használat', 'Fájlkezelés', 'Szövegszerkesztés'],
                      },
                      {
                        icon: FiGlobe,
                        title: 'Internet',
                        items: ['Böngészés', 'E-mail kezelés', 'Online ügyintézés'],
                      },
                      {
                        icon: FiSmartphone,
                        title: 'Okoseszközök',
                        items: ['Kapcsolattartás', 'Telefon kezelése', 'Hasznos appok'],
                      },
                      {
                        icon: FiShield,
                        title: 'Biztonság',
                        items: ['Adatvédelem', 'Kritikus gondolkodás', 'Csalások felismerése'],
                      },
                    ].map(({ icon: Icon, title, items }, index) => (
                      <div key={index} className={`p-6 rounded-lg border shadow-sm ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
                        <div className="flex items-center mb-4">
                          <Icon className={`w-6 h-6 ${darkMode ? 'text-gray-200' : 'text-[#373CFA]'}`} />
                          <h3 className="text-xl font-semibold ml-3">{title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* About Instructor */}
                <section className="max-w-4xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-center mb-10">Az oktatóról</h2>
                  <div className={`p-8 rounded-lg border shadow-sm ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-4">Pass Olivér</h3>
                      <p className="text-lg">
                        Középiskolás diákként célom, hogy segítsek minden digitálisan kevésbé felkészült személynek; nyugdíjasoknak, gyerekeknek eligazodni a digitális világban. Az oktatás gyakorlatias jellegű, így a résztvevők nemcsak alapvető készségeket sajátíthatnak el, hanem biztonságosan és magabiztosan használhatják a digitális eszközöket a mindennapjaikban.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Program Info */}
                <section className="max-w-4xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-center mb-10">Programinformációk</h2>
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
                    {[
                      { icon: FiMapPin, title: 'Helyszín', text: 'Generációk Háza, Pilisszentiván' },
                      { icon: FiClock, title: 'Időtartam', text: '1 óra/alkalom' },
                      { icon: FiDollarSign, title: 'Részvétel', text: 'Ingyenes' },
                      { icon: FiMonitor, title: 'Eszköz', text: 'Ha van, kérjük hozzanak saját készüléket' },
                    ].map(({ icon: Icon, title, text }, index) => (
                      <div key={index} className="p-6">
                        <Icon className={`w-8 h-8 mx-auto mb-4 ${darkMode ? 'text-gray-200' : 'text-[#373CFA]'}`} />
                        <h3 className="font-semibold mb-2">{title}</h3>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Events Slider */}
                <section className="max-w-4xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold text-center mb-8">Közelgő események</h2>
                  <div className="relative events-slider">
                    {events.length === 0 ? (
                      <div className="text-center text-xl py-8">
                        <div className={`inline-block px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>
                          Hamarosan
                        </div>
                      </div>
                    ) : (
                      <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                          640: { slidesPerView: 2 },
                          1024: { slidesPerView: 3 },
                        }}
                        className="py-4 px-8"
                      >
                        {events.map((event, index) => (
                          <SwiperSlide key={index}>
                            <div className={`rounded-lg border shadow-sm p-6 h-full ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                              <div className="text-center space-y-3">
                                <div className="text-xl font-semibold">{event.date}</div>
                                <div className="text-lg">{event.time}</div>
                                <div>{event.location}</div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </div>
                </section>

                {/* Contact Section */}
                <section className="max-w-4xl mx-auto mb-8">
                  <h2 className="text-3xl font-bold text-center mb-6">Kapcsolat</h2>
                  <div className={`rounded-lg border shadow-sm p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                      <a
                        href="https://www.facebook.com/profile.php?id=61570898233743"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-lg ${darkMode ? 'text-gray-200 hover:text-gray-400' : 'text-[#373CFA] hover:text-[#2228c7]'}`}
                      >
                        <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                        Facebook
                      </a>
                    </div>
                  </div>
                </section>
              </main>
              {/* Footer */}
              <footer className={`py-6 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-[#373CFA] text-white'}`}>
                <div className="text-center space-y-2">
                  <p className="text-sm">
                    © {new Date().getFullYear()} Digitális Írástudás Program
                  </p>
                </div>
              </footer>
            </>
          } />
          <Route path="*" element={<NotFound darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;