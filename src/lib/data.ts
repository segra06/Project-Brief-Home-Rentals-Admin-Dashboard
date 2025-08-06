import { Property } from "@/types";

export const mockProperties: Property[] = [
  {
    id: "1",
    name: "Luxury Penthouse en Brickell",
    address: "Brickell Avenue, Miami, FL",
    description:
      "Espectacular penthouse en el corazón financiero de Miami con vistas panorámicas a la bahía y al skyline. Ubicado en torre de lujo con amenidades de clase mundial.",
    price: 8500,
    image: "https://picsum.photos/800/600?random=1",
    coordinates: {
      lat: 25.7617,
      lon: -80.1918,
    },
    amenities: [
      "Vista a la Bahía",
      "Valet Parking",
      "Aire Acondicionado Central",
      "Infinity Pool",
      "Concierge 24/7",
    ],
    bedrooms: 3,
    bathrooms: 3,
    area: 280,
  },
  {
    id: "2",
    name: "Oceanfront Condo en South Beach",
    address: "Ocean Drive, South Beach, Miami Beach, FL",
    description:
      "Exclusivo condominio frente al océano en el icónico South Beach. Disfruta de playas de arena blanca, vida nocturna vibrante y el famoso Art Deco District.",
    price: 12000,
    image: "https://picsum.photos/800/600?random=2",
    coordinates: {
      lat: 25.781,
      lon: -80.13,
    },
    amenities: [
      "Vista al Océano",
      "Balcón Privado",
      "Beach Club",
      "Spa",
      "Acceso Directo a Playa",
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 150,
  },
  {
    id: "3",
    name: "Modern Loft en Wynwood",
    address: "Wynwood Arts District, Miami, FL",
    description:
      "Loft industrial moderno en el vibrante distrito artístico de Wynwood. Rodeado de murales coloridos, galerías de arte, cervecerías artesanales y restaurantes trendy.",
    price: 4200,
    image: "https://picsum.photos/800/600?random=3",
    coordinates: {
      lat: 25.801,
      lon: -80.199,
    },
    amenities: [
      "Techos Altos",
      "Cocina Gourmet",
      "Fibra Óptica",
      "Pet Friendly",
      "Rooftop Terrace",
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
  },
  {
    id: "4",
    name: "Art Deco Apartment en Mid-Beach",
    address: "Collins Avenue, Mid-Beach, Miami Beach, FL",
    description:
      "Elegante apartamento en edificio Art Deco restaurado en Mid-Beach. Combina el encanto histórico de Miami Beach con comodidades modernas y acceso a playas tranquilas.",
    price: 6800,
    image: "https://picsum.photos/800/600?random=4",
    coordinates: {
      lat: 25.8209,
      lon: -80.1225,
    },
    amenities: [
      "Arquitectura Art Deco",
      "Balcón con Vista",
      "Pool Deck",
      "Gym Privado",
      "Garden Courtyard",
    ],
    bedrooms: 1,
    bathrooms: 1,
    area: 90,
  },
  {
    id: "5",
    name: "Waterfront Mansion en Key Biscayne",
    address: "Key Biscayne, Miami, FL",
    description:
      "Majestuosa mansión frente al agua en la exclusiva isla de Key Biscayne. Privacidad total con muelle privado, perfecta para yates y actividades acuáticas de lujo.",
    price: 25000,
    image: "https://picsum.photos/800/600?random=5",
    coordinates: {
      lat: 25.6906,
      lon: -80.1633,
    },
    amenities: [
      "Muelle Privado",
      "Piscina Infinity",
      "Vista Panorámica",
      "Casa de Huéspedes",
      "Seguridad Privada",
    ],
    bedrooms: 6,
    bathrooms: 7,
    area: 850,
  },
  {
    id: "6",
    name: "Beachside Villa en Bal Harbour",
    address: "Bal Harbour, Miami Beach, FL",
    description:
      "Villa de lujo a pasos de las exclusivas playas de Bal Harbour. Cerca de Bal Harbour Shops, uno de los centros comerciales más elegantes del mundo.",
    price: 18000,
    image: "https://picsum.photos/800/600?random=6",
    coordinates: {
      lat: 25.8906,
      lon: -80.1225,
    },
    amenities: [
      "Acceso Privado a Playa",
      "Cabana",
      "Pool & Spa",
      "Wine Cellar",
      "Chef's Kitchen",
    ],
    bedrooms: 4,
    bathrooms: 5,
    area: 420,
  },
  {
    id: "7",
    name: "High-Rise Condo en Downtown Miami",
    address: "Flagler Street, Downtown Miami, FL",
    description:
      "Moderno condominio en rascacielos del centro de Miami. Perfecto para profesionales con fácil acceso a distrito financiero, transporte público y vida urbana.",
    price: 5500,
    image: "https://picsum.photos/800/600?random=7",
    coordinates: {
      lat: 25.7743,
      lon: -80.1937,
    },
    amenities: [
      "Vista del Skyline",
      "Parking Garage",
      "Security 24/7",
      "Business Center",
      "Metro Access",
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
  },
  {
    id: "8",
    name: "Tropical Estate en Coral Gables",
    address: "Coral Gables, Miami, FL",
    description:
      "Elegante propiedad en el prestigioso Coral Gables, conocido como 'The City Beautiful'. Arquitectura mediterránea rodeada de vegetación tropical y canales navegables.",
    price: 9200,
    image: "https://picsum.photos/800/600?random=8",
    coordinates: {
      lat: 25.7211,
      lon: -80.2683,
    },
    amenities: [
      "Arquitectura Mediterránea",
      "Jardín Tropical",
      "Canal Access",
      "Historic District",
      "Golf Course Nearby",
    ],
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
  },
];

// Función para simular fetch de datos
export const getProperties = async (): Promise<Property[]> => {
  // Simular delay de API
  await new Promise((resolve) => setTimeout(resolve, 800));
  return mockProperties;
};

export const getPropertyById = async (id: string): Promise<Property | null> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockProperties.find((property) => property.id === id) || null;
};
