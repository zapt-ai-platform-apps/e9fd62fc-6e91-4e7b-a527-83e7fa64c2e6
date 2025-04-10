import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/supabaseClient';
import useAuth from '@/modules/core/auth/useAuth';

const AuthPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);
  
  return (
    <div className="w-full max-w-md">
      <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">TurkEstate'e Hoş Geldiniz</h2>
          <p className="text-gray-600">Yapay zeka destekli emlak platformu</p>
          <div className="mt-4 mb-4">
            <span className="text-sm text-gray-500">Giriş yapın veya kaydolun:</span>
          </div>
        </div>
        
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#3b82f6',
                  brandAccent: '#2563eb',
                }
              }
            },
            className: {
              button: 'cursor-pointer',
              input: 'box-border',
            }
          }}
          providers={['google', 'facebook', 'apple']}
          magicLink={true}
          view="magic_link"
          localization={{
            variables: {
              sign_in: {
                email_label: 'E-posta adresiniz',
                password_label: 'Şifreniz',
                button_label: 'Giriş Yap',
                loading_button_label: 'Giriş yapılıyor...',
                link_text: 'Zaten bir hesabınız var mı? Giriş yapın',
                social_provider_text: 'ile giriş yapın',
              },
              sign_up: {
                email_label: 'E-posta adresiniz',
                password_label: 'Şifreniz',
                button_label: 'Kaydol',
                loading_button_label: 'Kaydolunuyor...',
                link_text: 'Hesabınız yok mu? Kaydolun',
                social_provider_text: 'ile kaydolun',
              },
              magic_link: {
                email_input_label: 'E-posta adresiniz',
                button_label: 'Sihirli bağlantı gönder',
                loading_button_label: 'Bağlantı gönderiliyor...',
                link_text: 'Sihirli bağlantı ile giriş yapın',
                confirmation_text: 'Giriş bağlantısı için e-postanızı kontrol edin',
              },
            }
          }}
        />
      </div>
    </div>
  );
};

export default AuthPage;