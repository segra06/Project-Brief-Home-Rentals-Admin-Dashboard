'use client';

import { useEffect, useState } from 'react';
import { PropertyCard } from '@/components/PropertyCard';
import { Navbar } from '@/components/Navbar';
import { getProperties } from '@/lib/data';
import { Property } from '@/types';
import { Building, Home, DollarSign, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const data = await getProperties();
      setProperties(data);
    } catch (error) {
      console.error('Error loading properties:', error);
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

  const totalProperties = properties.length;
  const averagePrice = properties.reduce((sum, p) => sum + p.price, 0) / totalProperties;
  const totalRevenue = properties.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Miami Rentals Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage and visualize all your rental properties in one place
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center">
              <div className="p-4 bg-blue-100 rounded-2xl">
                <Building className="h-8 w-8 text-blue-600" />
              </div>              <div className="ml-6">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Properties: {totalProperties}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center">
              <div className="p-4 bg-green-100 rounded-2xl">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>              <div className="ml-6">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Average Price: ${Math.round(averagePrice).toLocaleString()}</p>
              </div>

            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center">
              <div className="p-4 bg-purple-100 rounded-2xl">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-6">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Revenue: ${totalRevenue.toLocaleString()}</p>
                </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center">
              <div className="p-4 bg-orange-100 rounded-2xl">
                <Home className="h-8 w-8 text-orange-600" />
              </div>
              <div className="ml-6">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Occupancy: 85%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Carousel */}
        <div className="mb-10 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Properties</h2>
            <p className="text-lg text-gray-600">
              Explore our portfolio of {totalProperties} premium properties
            </p>
          </div>
  <div className="relative w-full overflow-x-auto">
    <div className="scroll-carousel px-4">
      {properties.map((property) => (
        <div key={property.id} className="scroll-item w-[360px]">
          <PropertyCard property={property} />
        </div>
      ))}
            </div>
          </div>
        </div>

      </main>
    </div>
   );
}
