# **Home Rentals Admin Dashboard**

Un dashboard de administración para gestión de propiedades de alquiler construido con Next.js, React y Tailwind CSS.

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
