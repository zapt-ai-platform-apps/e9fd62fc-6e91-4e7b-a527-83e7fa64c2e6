import { useState, useEffect } from 'react';
import { supabase } from '@/supabaseClient';
import useAuth from '@/modules/core/auth/useAuth';
import * as Sentry from '@sentry/browser';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  
  const fetchFavorites = async () => {
    if (!user) {
      setFavorites([]);
      setLoading(false);
      return;
    }
    
    try {
      setLoading(true);
      
      const { data: { session } } = await supabase.auth.getSession();
      
      const response = await fetch('/api/favorites', {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch favorites');
      }
      
      const data = await response.json();
      setFavorites(data);
      
    } catch (error) {
      console.error('Error fetching favorites:', error);
      Sentry.captureException(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchFavorites();
  }, [user]);
  
  const addToFavorites = async (propertyId) => {
    if (!user) return;
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ propertyId }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add favorite');
      }
      
      // Refresh favorites
      fetchFavorites();
      
    } catch (error) {
      console.error('Error adding favorite:', error);
      Sentry.captureException(error);
      throw error;
    }
  };
  
  const removeFromFavorite = async (propertyId) => {
    if (!user) return;
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const response = await fetch(`/api/favorites?propertyId=${propertyId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to remove favorite');
      }
      
      // Remove from local state
      setFavorites(favorites.filter(fav => fav.property.id !== propertyId));
      
    } catch (error) {
      console.error('Error removing favorite:', error);
      Sentry.captureException(error);
      throw error;
    }
  };
  
  return {
    favorites,
    favoritesLoading: loading,
    addToFavorites,
    removeFromFavorite,
    refreshFavorites: fetchFavorites,
  };
};

export default useFavorites;