import React from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaRuler, FaHeart, FaRegHeart } from 'react-icons/fa';
import { formatCurrency } from '@/shared/utils/formatters';

const PropertyCard = ({ property, isFavorite, onToggleFavorite, showFavoriteButton = true }) => {
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(property.id);
  };
  
  return (
    <Link 
      to={`/property/${property.id}`} 
      className="block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <div className="h-48 overflow-hidden">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        {showFavoriteButton && (
          <button
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-red-500 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
            aria-label={isFavorite ? "Favorilerden çıkar" : "Favorilere ekle"}
          >
            {isFavorite ? <FaHeart className="h-5 w-5" /> : <FaRegHeart className="h-5 w-5" />}
          </button>
        )}
        <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-3 py-1 font-medium text-sm">
          {property.listingType === 'sale' ? 'Satılık' : 'Kiralık'}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{property.title}</h3>
        <p className="mt-1 text-gray-600 text-sm line-clamp-1">{property.address}, {property.city}</p>
        
        <p className="mt-2 text-xl font-bold text-blue-600">
          {formatCurrency(property.price)} {property.listingType === 'rent' ? '/ay' : ''}
        </p>
        
        <div className="mt-3 flex justify-between text-gray-700">
          <div className="flex items-center text-sm">
            <FaBed className="mr-1" />
            <span>{property.bedrooms} Yatak</span>
          </div>
          <div className="flex items-center text-sm">
            <FaBath className="mr-1" />
            <span>{property.bathrooms} Banyo</span>
          </div>
          <div className="flex items-center text-sm">
            <FaRuler className="mr-1" />
            <span>{property.area} m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;