import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaSearch, FaHeart, FaUser, FaSignOutAlt } from 'react-icons/fa';
import useAuth from '@/modules/core/auth/useAuth';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500';
  };
  
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=512&height=512"
                  alt="Real Estate App"
                  className="h-8 w-auto mr-2"
                />
                <span className="text-lg font-semibold text-gray-900">TurkEstate</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className={`inline-flex items-center px-1 pt-1 border-b-2 ${isActive('/') === 'text-blue-500' ? 'border-blue-500' : 'border-transparent'} ${isActive('/')}`}>
                <FaHome className="mr-1" /> Ana Sayfa
              </Link>
              <Link to="/search" className={`inline-flex items-center px-1 pt-1 border-b-2 ${isActive('/search') === 'text-blue-500' ? 'border-blue-500' : 'border-transparent'} ${isActive('/search')}`}>
                <FaSearch className="mr-1" /> Arama
              </Link>
              {user && (
                <>
                  <Link to="/favorites" className={`inline-flex items-center px-1 pt-1 border-b-2 ${isActive('/favorites') === 'text-blue-500' ? 'border-blue-500' : 'border-transparent'} ${isActive('/favorites')}`}>
                    <FaHeart className="mr-1" /> Favoriler
                  </Link>
                  <Link to="/profile" className={`inline-flex items-center px-1 pt-1 border-b-2 ${isActive('/profile') === 'text-blue-500' ? 'border-blue-500' : 'border-transparent'} ${isActive('/profile')}`}>
                    <FaUser className="mr-1" /> Profil
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {user ? (
              <button
                onClick={handleSignOut}
                className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
              >
                <FaSignOutAlt className="inline mr-1" /> Çıkış Yap
              </button>
            ) : (
              <Link
                to="/auth"
                className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Giriş Yap
              </Link>
            )}
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 cursor-pointer"
            >
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`block pl-3 pr-4 py-2 border-l-4 ${
              isActive('/') === 'text-blue-500' ? 'border-blue-500 bg-blue-50' : 'border-transparent'
            } ${isActive('/')} text-base font-medium`}
            onClick={() => setIsOpen(false)}
          >
            <FaHome className="inline mr-2" /> Ana Sayfa
          </Link>
          <Link
            to="/search"
            className={`block pl-3 pr-4 py-2 border-l-4 ${
              isActive('/search') === 'text-blue-500' ? 'border-blue-500 bg-blue-50' : 'border-transparent'
            } ${isActive('/search')} text-base font-medium`}
            onClick={() => setIsOpen(false)}
          >
            <FaSearch className="inline mr-2" /> Arama
          </Link>
          {user && (
            <>
              <Link
                to="/favorites"
                className={`block pl-3 pr-4 py-2 border-l-4 ${
                  isActive('/favorites') === 'text-blue-500' ? 'border-blue-500 bg-blue-50' : 'border-transparent'
                } ${isActive('/favorites')} text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                <FaHeart className="inline mr-2" /> Favoriler
              </Link>
              <Link
                to="/profile"
                className={`block pl-3 pr-4 py-2 border-l-4 ${
                  isActive('/profile') === 'text-blue-500' ? 'border-blue-500 bg-blue-50' : 'border-transparent'
                } ${isActive('/profile')} text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                <FaUser className="inline mr-2" /> Profil
              </Link>
            </>
          )}
          <div className="pt-4 pb-3 border-t border-gray-200">
            {user ? (
              <button
                onClick={() => {
                  handleSignOut();
                  setIsOpen(false);
                }}
                className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 hover:border-blue-500 cursor-pointer"
              >
                <FaSignOutAlt className="inline mr-2" /> Çıkış Yap
              </button>
            ) : (
              <Link
                to="/auth"
                className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 hover:border-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Giriş Yap
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;