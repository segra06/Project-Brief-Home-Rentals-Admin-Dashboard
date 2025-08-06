'use client';

import { useEffect, useState } from 'react';
import { PropertyCard } from '@/components/PropertyCard';
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
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-xl shadow-md">
                <Home className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Home Rentals</h1>
                <p className="text-sm text-gray-500">Dashboard Administrativo</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard Principal</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gestiona y visualiza todas tus propiedades de alquiler en un solo lugar
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center">
              <div className="p-4 bg-blue-100 rounded-2xl">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-6">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Propiedades</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{totalProperties}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center">
              <div className="p-4 bg-green-100 rounded-2xl">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-6">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Precio Promedio</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  ${Math.round(averagePrice).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center">
              <div className="p-4 bg-purple-100 rounded-2xl">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-6">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Ingresos Totales</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  ${totalRevenue.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center">
              <div className="p-4 bg-orange-100 rounded-2xl">
                <Home className="h-8 w-8 text-orange-600" />
              </div>
              <div className="ml-6">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Ocupación</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">85%</p>
              </div>
            </div>
          </div>
        </div>

     {/* Propiedades en scroll horizontal */}
<div className="mb-10">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Propiedades Disponibles</h2>
    <p className="text-lg text-gray-600">
      Explora nuestro portafolio de {totalProperties} propiedades premium
    </p>
  </div>

  <div className="overflow-x-auto pb-4">
    <div className="flex space-x-6 min-w-max px-2">
      {properties.map((property) => (
        <div key={property.id} className="w-[320px] shrink-0">
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
