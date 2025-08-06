# Home Rentals Dashboard

A modern property rental dashboard built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 📊 **Dashboard Overview**: Statistics cards showing total properties, average prices, revenue, and occupancy
- 🏠 **Property Listings**: Horizontal scrolling carousel of property cards
- 🔍 **Property Details**: Detailed view with full information and amenities
- 🌤️ **Weather Integration**: Real-time weather data for each property location
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Weather API**: OpenWeatherMap API

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd home-rentals-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (optional):

```bash
cp .env.local.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Weather API Configuration

The app includes weather integration using OpenWeatherMap API.

### Option 1: Use Mock Data (Default)

The app works out of the box with realistic mock weather data. No configuration needed.

### Option 2: Use Real Weather Data

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Create a `.env.local` file in the root directory
3. Add your API key:

```bash
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── property/[id]/     # Dynamic property details page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home dashboard
├── components/            # Reusable React components
│   └── PropertyCard.tsx   # Property card component
├── lib/                   # Utility functions and data
│   ├── data.ts           # Mock property data and API functions
│   └── weather.ts        # Weather API service
└── types/                # TypeScript type definitions
    └── index.ts          # Property and other type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### Dashboard

- Statistics overview with key metrics
- Responsive grid layout
- Hover effects and smooth transitions

### Property Cards

- High-quality images with lazy loading
- Price badges and rating display
- Clickable cards leading to detailed views

### Property Details Page

- Full property information and amenities
- Real-time weather widget
- Contact and action buttons
- Responsive layout with sidebar

### Weather Integration

- Current temperature and conditions
- Humidity and wind speed data
- Automatic fallback to mock data
- Location-based weather fetching

## Next Steps

This dashboard provides a solid foundation for a property rental platform. Potential enhancements include:

- 🔐 User authentication and authorization
- 🔍 Advanced search and filtering
- 📅 Booking and reservation system
- 💳 Payment integration
- 📧 Email notifications
- 🗺️ Interactive maps
- 📊 Advanced analytics and reporting

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is for educational and demonstration purposes.

## **🌐 Demo en Vivo**

[http://localhost:3000](http://localhost:3000) (ejecutar localmente)
_URL de producción se agregará después del deploy_

## **🔐 Credenciales de Acceso**

- **Email:** admin@homerentals.com
- **Password:** admin123

## **✨ Características**

- 🔐 **Autenticación básica** - Sistema de login simple
- 🏠 **Lista de propiedades** - Vista de todas las propiedades de alquiler
- 📍 **Detalles de propiedades** - Información completa de cada propiedad
- 🌤️ **Clima en tiempo real** - Integración con API de clima para cada ubicación
- 📱 **Diseño responsivo** - Funciona en dispositivos móviles y desktop

## **🚀 Tecnologías Utilizadas**

- **Framework:** Next.js 15 con App Router
- **Frontend:** React 19 + TypeScript
- **Estilos:** Tailwind CSS
- **API Externa:** OpenWeatherMap para datos climáticos
- **Deployment:** Vercel

## **📦 Instalación y Configuración**

1. **Clonar el repositorio:**

```bash
git clone [URL-del-repositorio]
cd home-rentals-dashboard
```

2. **Instalar dependencias:**

```bash
npm install
```

3. **Configurar variables de entorno:**
   Crear un archivo `.env.local` en la raíz del proyecto:

```bash
NEXT_PUBLIC_WEATHER_API_KEY=tu_api_key_de_openweathermap
```

4. **Ejecutar el servidor de desarrollo:**

```bash
npm run dev
```

5. **Abrir en el navegador:**
   Visita [http://localhost:3000](http://localhost:3000)

## **🏗️ Estructura del Proyecto**

```
src/
├── app/
│   ├── login/           # Página de autenticación
│   ├── dashboard/       # Dashboard principal
│   ├── properties/      # Lista de propiedades
│   └── property/[id]/   # Detalles de propiedad individual
├── components/          # Componentes reutilizables
├── lib/                # Utilidades y configuración
└── types/              # Definiciones de TypeScript
```

## **🎯 Funcionalidades Implementadas**

### **1. Autenticación**

- Formulario de login básico
- Validación de credenciales
- Redirección automática después del login

### **2. Dashboard de Propiedades**

- Lista completa de propiedades disponibles
- Tarjetas con información básica (nombre, dirección, precio)
- Navegación a detalles de cada propiedad

### **3. Detalles de Propiedad**

- Información completa de la propiedad
- Imagen en tamaño completo
- Descripción detallada
- **Datos climáticos en tiempo real** para la ubicación

### **4. Integración de API de Clima**

- Conexión con OpenWeatherMap API
- Muestra temperatura actual, condiciones y humedad
- Actualización automática de datos climáticos

## **🚀 Scripts Disponibles**

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run start    # Servidor de producción
npm run lint     # Ejecutar linter
```

## **📝 Notas de Desarrollo**

- **Tiempo límite:** Proyecto desarrollado en máximo 5 horas
- **Priorización:** Se enfocó en funcionalidad core sobre características avanzadas
- **Escalabilidad:** Estructura preparada para futuras mejoras

## **🔮 Mejoras Futuras**

- [ ] Autenticación con JWT/backend real
- [ ] CRUD completo de propiedades
- [ ] Filtros y búsqueda avanzada
- [ ] Dashboard con métricas y gráficos
- [ ] Gestión de reservas
- [ ] Notificaciones en tiempo real
