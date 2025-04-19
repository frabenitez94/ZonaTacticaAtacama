# Zona Táctica Atacama - Sitio Web

## Descripción
Sitio web oficial para el campo de paintball "Zona Táctica Atacama" ubicado en Copiapó, Chile. La página ofrece información sobre servicios, tarifas, galería de fotos y un sistema de reservas online.

## Tecnologías Utilizadas

### Frontend
- **React**: Biblioteca principal para la construcción de la interfaz de usuario
- **Vite**: Herramienta de construcción y desarrollo rápido
- **TailwindCSS**: Framework CSS para el diseño responsivo
- **Wouter**: Para el manejo de rutas en React
- **React Query**: Para la gestión de estado y peticiones al servidor
- **React Hook Form**: Para la construcción y validación de formularios
- **Zod**: Validación de esquemas tanto en frontend como backend
- **Shadcn/UI**: Componentes UI reutilizables

### Backend
- **Express**: Servidor web para Node.js
- **Drizzle**: ORM para bases de datos
- **In-Memory Storage**: Almacenamiento en memoria para desarrollo

## Estructura del Proyecto

### Carpetas Principales
- **`/client`**: Todo el código frontend
  - `/src`: Código fuente de React
    - `/components`: Componentes reutilizables
    - `/pages`: Páginas principales
    - `/hooks`: Hooks personalizados
    - `/lib`: Utilidades y configuraciones
- **`/server`**: Código backend (Express)
- **`/shared`**: Código compartido entre frontend y backend (esquemas)

## Archivos Clave

### Frontend
- `client/src/App.tsx`: Componente principal y configuración de rutas
- `client/src/pages/Home.tsx`: Página principal que integra todos los componentes
- `client/src/components/`:
  - `Header.tsx`: Barra de navegación
  - `Hero.tsx`: Sección principal con imagen de fondo y llamado a la acción
  - `AboutUs.tsx`: Información sobre la empresa
  - `Pricing.tsx`: Tarifas y planes disponibles
  - `Gallery.tsx`: Galería de imágenes
  - `Reservation.tsx`: Formulario de reservas con validación
  - `FAQ.tsx`: Preguntas frecuentes
  - `Footer.tsx`: Pie de página con información de contacto

### Backend
- `server/index.ts`: Punto de entrada del servidor
- `server/routes.ts`: Definición de endpoints de la API
- `server/storage.ts`: Implementación del almacenamiento en memoria
- `server/vite.ts`: Configuración de integración Vite-Express

### Compartidos
- `shared/schema.ts`: Definición de esquemas para usuarios y reservas

## Flujo de Datos
1. El usuario completa el formulario de reserva
2. Los datos son validados en el frontend usando Zod
3. Se envían al endpoint `/api/reservations` mediante React Query
4. El backend valida nuevamente los datos
5. La reserva se almacena en memoria (en el servidor)
6. Se devuelve una respuesta de éxito o error

## Características Principales
- **Diseño Responsivo**: Adaptado para móviles, tablets y escritorio
- **Estética Militar/Táctica**: Con colores naranja como acento
- **Formulario de Reservas**: Validación completa y manejo de errores
- **Secciones Informativas**: Acerca de, precios, galería y FAQ
- **API REST**: Endpoints para crear y recuperar reservas

## Cómo Ejecutar el Proyecto
1. Instalar dependencias: `npm install`
2. Iniciar servidor de desarrollo: `npm run dev`
3. El servidor estará disponible en: `http://localhost:5000`

## Desarrollo Futuro
- Implementación de base de datos persistente
- Sistema de autenticación de usuarios
- Panel de administración para gestionar reservas
- Integración con pasarelas de pago
- Sistema de notificaciones por email

---
© 2025 Zona Táctica Atacama. Todos los derechos reservados.