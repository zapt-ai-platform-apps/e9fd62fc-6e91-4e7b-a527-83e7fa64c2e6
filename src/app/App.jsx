import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import AppLayout from './layout/AppLayout';
import { AuthProvider } from '@/modules/core/auth/AuthProvider';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;