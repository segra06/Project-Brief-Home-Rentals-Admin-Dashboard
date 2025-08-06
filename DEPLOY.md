# Deploy Instructions

## Deploying to Vercel

1. **Prepare the project:**

   ```bash
   npm run build
   ```

2. **Install Vercel CLI (if not already installed):**

   ```bash
   npm i -g vercel
   ```

3. **Deploy:**

   ```bash
   vercel --prod
   ```

4. **Set Environment Variables in Vercel Dashboard:**
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add: `NEXT_PUBLIC_WEATHER_API_KEY` (optional - app works without it)

## Environment Variables

The app will work without any environment variables using mock weather data.

To get real weather data:

1. Sign up at https://openweathermap.org/api
2. Get your free API key
3. Add it to `.env.local` or Vercel environment variables

## Build Commands

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Start Production:** `npm run start`
- **Lint:** `npm run lint`
