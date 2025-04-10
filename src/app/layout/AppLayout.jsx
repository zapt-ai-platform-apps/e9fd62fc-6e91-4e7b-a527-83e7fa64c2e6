import React from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { FaSpinner } from 'react-icons/fa';
import useAuth from '@/modules/core/auth/useAuth';

const AppLayout = ({ children }) => {
  const { loading } = useAuth();
  const location = useLocation();
  const showAuthPageLayout = location.pathname === '/auth';
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin h-10 w-10 text-blue-500" />
      </div>
    );
  }
  
  if (showAuthPageLayout) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="py-6 px-4 sm:px-6 flex justify-center">
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=128&height=128"
            alt="Real Estate App"
            className="h-12"
          />
        </div>
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 pb-6">
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
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavigationBar />
      <main className="flex-grow pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;