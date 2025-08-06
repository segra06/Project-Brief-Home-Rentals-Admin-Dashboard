'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getPropertyById } from '@/lib/data';
import { getWeatherData } from '@/lib/weather';
import { Property } from '@/types';
import { ArrowLeft, MapPin, Bed, Bath, Square, Star, Cloud, Thermometer } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/Button';

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export default function PropertyDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [property, setProperty] = useState<Property | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [weatherLoading, setWeatherLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      loadPropertyAndWeather(params.id as string);
    }
  }, [params.id]);

  const loadPropertyAndWeather = async (id: string) => {
    try {
      const propertyData = await getPropertyById(id);
      setProperty(propertyData);

      if (propertyData) {
        try {
          const weatherData = await getWeatherData(
            propertyData.coordinates.lat,
            propertyData.coordinates.lon
          );
          setWeather(weatherData);
        } catch (error) {
          console.error('Error loading weather:', error);
        } finally {
          setWeatherLoading(false);
        }
      }
    } catch (error) {
      console.error('Error loading property:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <Button
            variant="primary"
            onClick={() => router.push('/')}
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Image */}
            <div className="flex justify-center">
              <div className="relative w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={property.image}
                  alt={property.name}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
                {/* Badge de precio */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full shadow-lg text-sm">
                  <span className="font-bold">${property.price.toLocaleString()}</span>
                  <span className="text-xs opacity-80 ml-1">/month</span>
                </div>
                {/* Badge de rating */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md text-xs">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-800">4.8</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Property Details */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{property.name}</h1>

              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                <span className="text-lg">{property.address}</span>
              </div>

              {/* Property Features */}
              <div className="flex items-center space-x-8 mb-8 p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-center">
                  <Bed className="h-6 w-6 mr-2 text-blue-500" />
                  <span className="text-lg font-medium">{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-6 w-6 mr-2 text-blue-500" />
                  <span className="text-lg font-medium">{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-6 w-6 mr-2 text-blue-500" />
                  <span className="text-lg font-medium">{property.area} m²</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-blue-50 rounded-xl border border-blue-100"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Weather Widget */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Cloud className="h-6 w-6 mr-2 text-blue-500" />
                Current Weather
              </h3>

              {weatherLoading ? (
                <div className="flex items-center justify-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : weather ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Thermometer className="h-8 w-8 text-orange-500 mr-3" />
                      <div>
                        <div className="text-3xl font-bold text-gray-900">{Math.round(weather.temperature)}°C</div>
                        <div className="text-sm text-gray-500 capitalize">{weather.description}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{weather.humidity}%</div>
                      <div className="text-xs text-gray-500">Humidity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{Math.round(weather.windSpeed)} km/h</div>
                      <div className="text-xs text-gray-500">Wind Speed</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  Weather data unavailable
                </div>
              )}
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              
              {/* Agent Info */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    MR
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">Michael Rodriguez</h4>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📧 michael.rodriguez@miamirealty.com</p>
                  <p>📞 +1 (305) 555-0123</p>
                  <p>🏢 Miami Premium Realty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
