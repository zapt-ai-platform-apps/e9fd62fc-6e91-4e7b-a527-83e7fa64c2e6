import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaHeart, FaUser, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Hakkımızda
            </h3>
            <p className="mt-4 text-base text-gray-600">
              TurkEstate, Türkiye'de emlak arama deneyimini yapay zeka ile geliştiren modern bir platformdur.
            </p>
            <div className="mt-4">
              <a
                href="https://www.zapt.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Made on ZAPT
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Hızlı Bağlantılar
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-gray-900">
                  <FaHome className="inline mr-2" /> Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-base text-gray-600 hover:text-gray-900">
                  <FaSearch className="inline mr-2" /> Emlak Ara
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-base text-gray-600 hover:text-gray-900">
                  <FaHeart className="inline mr-2" /> Favorilerim
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-base text-gray-600 hover:text-gray-900">
                  <FaUser className="inline mr-2" /> Hesabım
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Popüler Şehirler
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/search?city=Istanbul" className="text-base text-gray-600 hover:text-gray-900">
                  İstanbul
                </Link>
              </li>
              <li>
                <Link to="/search?city=Ankara" className="text-base text-gray-600 hover:text-gray-900">
                  Ankara
                </Link>
              </li>
              <li>
                <Link to="/search?city=Izmir" className="text-base text-gray-600 hover:text-gray-900">
                  İzmir
                </Link>
              </li>
              <li>
                <Link to="/search?city=Antalya" className="text-base text-gray-600 hover:text-gray-900">
                  Antalya
                </Link>
              </li>
              <li>
                <Link to="/search?city=Bursa" className="text-base text-gray-600 hover:text-gray-900">
                  Bursa
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              İletişim
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex">
                <FaPhoneAlt className="mt-1 mr-2 flex-shrink-0 text-gray-500" />
                <span className="text-base text-gray-600">(555) 123-4567</span>
              </li>
              <li className="flex">
                <FaEnvelope className="mt-1 mr-2 flex-shrink-0 text-gray-500" />
                <span className="text-base text-gray-600">info@turkestate.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} TurkEstate. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;