import { Property } from "@/types";

export const mockProperties: Property[] = [
  {
    id: "1",
    name: "Luxury Penthouse in Brickell",
    address: "Brickell Avenue, Miami, FL",
    description:
      "Spectacular penthouse in the heart of Miami's financial district with panoramic views of the bay and skyline. Located in a luxury tower with world-class amenities.",
    price: 8500,
    image: "https://picsum.photos/800/600?random=1",
    coordinates: {
      lat: 25.7617,
      lon: -80.1918,
    },
    amenities: [
      "Bay View",
      "Valet Parking",
      "Central Air Conditioning",
      "Infinity Pool",
      "24/7 Concierge",
    ],
    bedrooms: 3,
    bathrooms: 3,
    area: 280,
  },
  {
    id: "2",
    name: "Oceanfront Condo in South Beach",
    address: "Ocean Drive, South Beach, Miami Beach, FL",
    description:
      "Exclusive oceanfront condominium in iconic South Beach. Enjoy white sand beaches, vibrant nightlife and the famous Art Deco District.",
    price: 12000,
    image: "https://picsum.photos/800/600?random=2",
    coordinates: {
      lat: 25.781,
      lon: -80.13,
    },
    amenities: [
      "Ocean View",
      "Private Balcony",
      "Beach Club",
      "Spa",
      "Direct Beach Access",
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 150,
  },
  {
    id: "3",
    name: "Modern Loft in Wynwood",
    address: "Wynwood Arts District, Miami, FL",
    description:
      "Modern industrial loft in the vibrant Wynwood arts district. Surrounded by colorful murals, art galleries, craft breweries and trendy restaurants.",
    price: 4200,
    image: "https://picsum.photos/800/600?random=3",
    coordinates: {
      lat: 25.801,
      lon: -80.199,
    },
    amenities: [
      "High Ceilings",
      "Gourmet Kitchen",
      "Fiber Optic Internet",
      "Pet Friendly",
      "Rooftop Terrace",
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
  },
  {
    id: "4",
    name: "Art Deco Apartment in Mid-Beach",
    address: "Collins Avenue, Mid-Beach, Miami Beach, FL",
    description:
      "Elegant apartment in a restored Art Deco building in Mid-Beach. Combines the historic charm of Miami Beach with modern amenities and access to quiet beaches.",
    price: 6800,
    image: "https://picsum.photos/800/600?random=4",
    coordinates: {
      lat: 25.8209,
      lon: -80.1225,
    },
    amenities: [
      "Art Deco Architecture",
      "Balcony with View",
      "Pool Deck",
      "Private Gym",
      "Garden Courtyard",
    ],
    bedrooms: 1,
    bathrooms: 1,
    area: 90,
  },
  {
    id: "5",
    name: "Waterfront Mansion in Key Biscayne",
    address: "Key Biscayne, Miami, FL",
    description:
      "Majestic waterfront mansion on the exclusive island of Key Biscayne. Total privacy with private dock, perfect for yachts and luxury water activities.",
    price: 25000,
    image: "https://picsum.photos/800/600?random=5",
    coordinates: {
      lat: 25.6906,
      lon: -80.1633,
    },
    amenities: [
      "Private Dock",
      "Infinity Pool",
      "Panoramic View",
      "Guest House",
      "Private Security",
    ],
    bedrooms: 6,
    bathrooms: 7,
    area: 850,
  },
  {
    id: "6",
    name: "Beachside Villa in Bal Harbour",
    address: "Bal Harbour, Miami Beach, FL",
    description:
      "Luxury villa steps away from the exclusive beaches of Bal Harbour. Close to Bal Harbour Shops, one of the most elegant shopping centers in the world.",
    price: 18000,
    image: "https://picsum.photos/800/600?random=6",
    coordinates: {
      lat: 25.8906,
      lon: -80.1225,
    },
    amenities: [
      "Private Beach Access",
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
    name: "High-Rise Condo in Downtown Miami",
    address: "Flagler Street, Downtown Miami, FL",
    description:
      "Modern condominium in a downtown Miami skyscraper. Perfect for professionals with easy access to financial district, public transportation and urban life.",
    price: 5500,
    image: "https://picsum.photos/800/600?random=7",
    coordinates: {
      lat: 25.7743,
      lon: -80.1937,
    },
    amenities: [
      "Skyline View",
      "Parking Garage",
      "24/7 Security",
      "Business Center",
      "Metro Access",
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
  },
  {
    id: "8",
    name: "Tropical Estate in Coral Gables",
    address: "Coral Gables, Miami, FL",
    description:
      "Elegant property in prestigious Coral Gables, known as 'The City Beautiful'. Mediterranean architecture surrounded by tropical vegetation and navigable canals.",
    price: 9200,
    image: "https://picsum.photos/800/600?random=8",
    coordinates: {
      lat: 25.7211,
      lon: -80.2683,
    },
    amenities: [
      "Mediterranean Architecture",
      "Tropical Garden",
      "Canal Access",
      "Historic District",
      "Golf Course Nearby",
    ],
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
  },
];

// Simple hardcoded authentication
const HARDCODED_USER = {
  email: "admin@miamirealty.com",
  password: "123456",
  name: "Michael Rodriguez",
};

export const login = async (
  email: string,
  password: string
): Promise<{
  success: boolean;
  user?: { email: string; name: string };
  error?: string;
}> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (email === HARDCODED_USER.email && password === HARDCODED_USER.password) {
    return {
      success: true,
      user: {
        email: HARDCODED_USER.email,
        name: HARDCODED_USER.name,
      },
    };
  }

  return {
    success: false,
    error: "Invalid email or password",
  };
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

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
