# Home Rentals Dashboard

A modern property rental dashboard built with Next.js, React, TypeScript, and Tailwind CSS.

## Live Demo

🌐 **Live Application:** [https://admin-dashboard-git-main-segras-projects.vercel.app](https://admin-dashboard-git-main-segras-projects.vercel.app)

## Demo Credentials

- **Email:** admin@miamyrealty.com
- **Password:** 123456

## Features

- Dashboard with property statistics and listings
- Property details with amenities and information
- Real-time weather integration for each location
- Responsive design for all devices
- User authentication system

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Lucide React icons
- OpenWeatherMap API

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd home-rentals-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Weather API (Optional)

The app works with mock weather data by default. For real weather data:

1. Get API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Create `.env.local` file:

```bash
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```

## Project Structure

```
src/
├── app/
│   ├── login/           # Authentication page
│   ├── dashboard/       # Main dashboard
│   ├── property/[id]/   # Property details
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # Reusable components
├── lib/                 # Data and utilities
└── types/              # TypeScript definitions
```

## Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - Code linting

## What's Included

- User authentication with login form
- Property dashboard with statistics
- Individual property details pages
- Weather data integration
- Responsive mobile-friendly design
- Mock data for demonstration

## Future Enhancements

- Advanced search and filtering
- Booking system
- Payment integration
- User management
- Analytics dashboard
