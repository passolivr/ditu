import React from 'react';
import {
  FiMonitor,
  FiGlobe,
  FiSmartphone,
  FiShield,
  FiMapPin,
  FiClock,
  FiTag,
  FiMail,
} from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const events = [
  { date: 'Számítógépes alapok', time: 'Április 14, 14:00', location: 'Generációk háza, Pilisszentiván' },
  { date: 'Internethasználat', time: 'Április 28, 14:00', location: 'Generációk háza, Pilisszentiván' },
    { date: 'Okostelefon kezelése', time: 'Május 2, 14:00', location: 'Generációk háza, Pilisszentiván' },

  { date: 'Biztonság az interneten', time: 'Május 11, 14:00', location: 'Generációk háza, Pilisszentiván' },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#373CFA] text-white py-8 md:py-12">
 <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <img
              src="/src/digitu.png"
              alt="Digitális Írástudás Program"
              className="w-[270px] sm:w-[240px] md:w-[350px] h-auto mx-auto"
            />
          </div>
          {/* Adjust text size */}
          <p className="text-base sm:text-xl md:text-xl text-center mt-6 max-w-2xl mx-auto">
A digitális világ nem bonyolult – mi megmutatjuk az utat.          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        {/* Educational Areas */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Oktatási területek</h2>
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
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-[#373CFA]" />
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{title}</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Az oktatóról</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pass Olivér</h3>
<p className="text-gray-600 text-lg">
Középiskolás diákként célom, hogy segítsek minden digitálisan kevésbé felkészült személynek; nyugdíjasoknak, gyerekeknek eligazodni a digitális világban. Az oktatás gyakorlatias jellegű, így a résztvevők nemcsak alapvető készségeket sajátíthatnak el, hanem biztonságosan és magabiztosan használhatják a digitális eszközöket a mindennapjaikban.



















</p>
            </div>
          </div>
        </section>

        {/* Program Info */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Programinformációk</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { icon: FiMapPin, title: 'Helyszín', text: 'Generációk Háza, Pilisszentiván' },
              { icon: FiClock, title: 'Időtartam', text: '1 óra/alkalom' },
              { icon: FiTag, title: 'Részvétel', text: 'Ingyenes' },
              { icon: FiMonitor, title: 'Eszköz', text: 'Ha van, kérjük hozzanak saját készüléket' },
            ].map(({ icon: Icon, title, text }, index) => (
              <div key={index} className="p-6">
                <Icon className="w-8 h-8 text-[#373CFA] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Events Slider */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Közelgő események</h2>
          <div className="relative events-slider">
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
                  <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 h-full">
                    <div className="text-center space-y-3">
                      <div className="text-xl font-semibold text-gray-900">{event.date}</div>
                      <div className="text-lg text-gray-700">{event.time}</div>
                      <div className="text-gray-600">{event.location}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Kapcsolat</h2>
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <a 
                href="mailto:info@ditu.hu" 
                className="flex items-center gap-2 text-lg text-[#373CFA] hover:text-[#2228c7]"
              >
                <FiMail className="text-xl" />
                info@ditu.hu
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61570898233743" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-lg text-[#373CFA] hover:text-[#2228c7]"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                Facebook
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#373CFA] py-6">
        <div className="text-center text-white space-y-2">
          <p>Pilisszentiván Önkormányzata támogatásával</p>
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Digitális Írástudás Program
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;