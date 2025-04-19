# Estructura de Archivos - Zona Táctica Atacama

Este documento describe en detalle la organización y función de los archivos principales del proyecto para facilitar su mantenimiento y desarrollo.

## Estructura General

```
/
├── client/                 # Frontend
│   ├── src/
│   │   ├── components/     # Componentes UI
│   │   ├── hooks/          # Hooks personalizados
│   │   ├── lib/            # Utilidades
│   │   ├── pages/          # Páginas
│   │   ├── App.tsx         # Componente raíz 
│   │   ├── index.css       # Estilos globales
│   │   └── main.tsx        # Punto de entrada
│   └── index.html          # Plantilla HTML
├── server/                 # Backend
│   ├── index.ts            # Servidor Express
│   ├── routes.ts           # Endpoints API
│   ├── storage.ts          # Almacenamiento de datos
│   └── vite.ts             # Integración Vite-Express
├── shared/                 # Código compartido
│   └── schema.ts           # Esquemas de datos
└── ...                     # Archivos de configuración
```

## Archivos Clave y su Propósito

### Frontend (client/src)

#### Punto de Entrada
- **`main.tsx`**: Inicializa la aplicación React, configura proveedores globales (React Query).
- **`App.tsx`**: Define las rutas principales y estructura general de la aplicación.
- **`index.css`**: Estilos globales y configuración de Tailwind CSS.

#### Páginas
- **`pages/Home.tsx`**: Página principal que compone todos los componentes de la landing page.
- **`pages/not-found.tsx`**: Página 404 para rutas no encontradas.

#### Componentes
- **`components/Header.tsx`**: Barra de navegación con enlaces a las secciones.
- **`components/Hero.tsx`**: Banner principal con imagen de fondo y mensaje principal.
- **`components/AboutUs.tsx`**: Sección con información sobre la empresa y diferenciadores.
- **`components/Pricing.tsx`**: Precios y planes disponibles.
- **`components/Gallery.tsx`**: Galería de imágenes con efectos hover.
- **`components/Reservation.tsx`**: Formulario de reservas con validación.
- **`components/FAQ.tsx`**: Preguntas frecuentes con sistema de acordeón.
- **`components/CallToAction.tsx`**: Sección de llamado a la acción.
- **`components/Footer.tsx`**: Pie de página con información de contacto.

#### Componentes UI
- **`components/ui/`**: Componentes de interfaz reutilizables de shadcn/ui:
  - `form.tsx`: Componentes para formularios
  - `button.tsx`: Botones estilizados
  - `input.tsx`: Campos de entrada
  - `select.tsx`: Menús desplegables
  - `textarea.tsx`: Áreas de texto
  - `toast.tsx`: Notificaciones

#### Utilidades y Hooks
- **`lib/queryClient.ts`**: Configuración del cliente React Query para peticiones API.
- **`lib/utils.ts`**: Funciones de utilidad general.
- **`hooks/use-toast.ts`**: Hook para mostrar notificaciones.
- **`hooks/use-mobile.tsx`**: Hook para detectar dispositivos móviles.

### Backend (server)

- **`index.ts`**: Punto de entrada del servidor Express, configuración y middleware.
- **`routes.ts`**: Definición de los endpoints de la API REST.
- **`storage.ts`**: Implementación del almacenamiento de datos (actualmente en memoria).
- **`vite.ts`**: Integración del servidor de desarrollo Vite con Express.

### Compartido (shared)

- **`schema.ts`**: Definición de esquemas para la base de datos, validación y tipos compartidos.

### Configuración

- **`package.json`**: Dependencias y scripts de npm.
- **`tsconfig.json`**: Configuración de TypeScript.
- **`vite.config.ts`**: Configuración del bundler Vite.
- **`tailwind.config.ts`**: Configuración de Tailwind CSS.
- **`postcss.config.js`**: Configuración de PostCSS.
- **`theme.json`**: Configuración de temas para la UI.
- **`drizzle.config.ts`**: Configuración del ORM Drizzle.

## Guía de Archivos por Funcionalidad

### Sistema de Reservas

1. **Esquema de Datos**: `shared/schema.ts` - Define la estructura de una reserva
2. **Almacenamiento**: `server/storage.ts` - Implementa métodos para crear y obtener reservas
3. **API Endpoints**: `server/routes.ts` - Define rutas para crear y listar reservas
4. **Formulario Frontend**: `client/src/components/Reservation.tsx` - Interfaz de usuario para el formulario
5. **Validación**: Zod schemas en ambos, frontend y backend
6. **Estado & Peticiones**: React Query en el formulario para enviar datos a la API

### Navegación

1. **Estructura de Rutas**: `client/src/App.tsx` - Configura las rutas de la aplicación
2. **Barra de Navegación**: `client/src/components/Header.tsx` - Menú de navegación
3. **Enlaces Internos**: Distribuidos en varios componentes (footer, hero, pricing, etc.)

### UI & Estilo

1. **Estilos Globales**: `client/src/index.css` - Variables CSS y configuración general
2. **Tema**: `theme.json` - Configuración de colores y apariencia
3. **Componentes UI**: `client/src/components/ui/` - Biblioteca de componentes base

## Flujos de Datos Importantes

### Creación de Reserva

```
Reservation.tsx (Formulario) 
  → insertReservationSchema (Validación Zod)
  → useMutation (React Query)
  → POST /api/reservations
  → routes.ts (Validación en servidor)
  → storage.createReservation()
  → Respuesta al cliente
  → Notificación de éxito/error (toast)
```

### Obtención de Reservas

```
API Cliente
  → GET /api/reservations
  → routes.ts
  → storage.getAllReservations()
  → Datos devueltos al cliente
```

## Consideraciones de Seguridad

- **Validación de Datos**: Implementada con Zod tanto en frontend como backend
- **Manejo de Errores**: Estructurado para no exponer detalles sensibles al cliente
- **Sanitización**: Los datos del formulario son procesados antes de almacenarse

---

Este documento se mantendrá actualizado a medida que se desarrollen nuevas funcionalidades o se modifique la estructura existente.