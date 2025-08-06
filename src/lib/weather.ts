// Weather API service using OpenWeatherMap
const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export const getWeatherData = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  if (!WEATHER_API_KEY) {
    throw new Error(
      "Weather API key is required. Please set NEXT_PUBLIC_WEATHER_API_KEY environment variable."
    );
  }

  const url = `${WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Weather API error: ${response.status} - ${response.statusText}`
    );
  }

  const data = await response.json();

  return {
    temperature: Math.round(data.main.temp),
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
    icon: data.weather[0].icon,
  };
};

// Helper function to get weather icon URL
export const getWeatherIconUrl = (icon: string): string => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};
