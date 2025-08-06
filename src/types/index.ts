export interface Property {
  id: string;
  name: string;
  address: string;
  description: string;
  price: number;
  image: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  amenities: string[];
  bedrooms: number;
  bathrooms: number;
  area: number;
}


