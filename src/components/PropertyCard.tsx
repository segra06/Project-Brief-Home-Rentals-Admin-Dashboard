import { Property } from '@/types';
import { MapPin, Bed, Bath, Square, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl border-4 border-gray-200 overflow-hidden hover:shadow-3xl hover:scale-[1.03] hover:border-blue-300 transition-all duration-300 group mx-2">
      
      {/* Contenedor de imagen con tamaño fijo */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          width={800}
          height={600}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg">
          <div className="flex items-center text-sm font-bold">
            <span className="text-lg">${property.price.toLocaleString()}</span>
            <span className="text-xs ml-1 opacity-90">/month</span>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-gray-800">4.8</span>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="p-8 space-y-6">
        {/* Property Name */}
        <div>
          <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {property.name}
          </h3>
          
          <div className="flex items-center text-gray-500 mb-4">
            <MapPin className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm line-clamp-1">{property.address}</span>
          </div>
        </div>
        
        {/* Property Features */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Bed className="h-4 w-4 mr-1 text-blue-500" />
              <span className="text-sm font-medium">{property.bedrooms}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Bath className="h-4 w-4 mr-1 text-blue-500" />
              <span className="text-sm font-medium">{property.bathrooms}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Square className="h-4 w-4 mr-1 text-blue-500" />
              <span className="text-sm font-medium">{property.area}m²</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-5">
          <Link href={`/property/${property.id}`}>
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
