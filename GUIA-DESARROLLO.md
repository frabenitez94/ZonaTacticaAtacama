# Guía de Desarrollo - Zona Táctica Atacama

Este documento proporciona información técnica detallada sobre el desarrollo y mantenimiento del sitio web de Zona Táctica Atacama.

## Patrones de Diseño Implementados

### Componentes Funcionales y Hooks (React)
El proyecto utiliza componentes funcionales de React junto con hooks para gestionar el estado y los efectos secundarios.

### Arquitectura por Capas
- **Presentación**: Componentes de UI en `/client/src/components`
- **Lógica de Negocio**: Implementada en los hooks y componentes de página
- **Datos**: Gestionada por React Query y el backend

### API REST
- Comunicación entre cliente y servidor mediante endpoints RESTful
- Validación de datos en ambos extremos usando Zod

## Guía de Estilo

### Colores
```css
--tactical-dark: #1e2023;    /* Color principal oscuro */
--tactical-orange: #ff6b35;  /* Color de acento */
--tactical-beige: #f5f2e8;   /* Color claro para fondos */
--tactical-green: #2c3639;   /* Color secundario oscuro */
```

### Fuentes
- **Títulos**: Font Barlow (fuente sans-serif robusta)
- **Acentos**: Font Black Ops One (estilo militar)
- **Texto general**: Roboto

## Desarrollo Frontend

### Componentes UI

Los componentes están organizados por secciones del sitio:

1. **Header**: Barra de navegación con enlaces a secciones
2. **Hero**: Banner principal con imagen de fondo y CTA
3. **AboutUs**: Información de la empresa y diferenciadores
4. **Pricing**: Planes y tarifas disponibles
5. **Gallery**: Galería de imágenes con hover effects
6. **Reservation**: Formulario de reservas con validación
7. **FAQ**: Preguntas frecuentes con acordeón
8. **CallToAction**: Sección final para impulsar conversiones
9. **Footer**: Información de contacto y enlaces importantes

### Formularios

La gestión de formularios se realiza con React Hook Form y Zod:

```typescript
// Definición del esquema de validación
const formSchema = z.object({
  fullName: z.string().min(2, { message: "El nombre es requerido" }),
  phone: z.string().min(8, { message: "Teléfono inválido" }),
  email: z.string().email({ message: "Email inválido" }),
  // más campos...
});

// Uso en componente
const form = useForm<FormValues>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    // valores iniciales...
  },
});
```

### Peticiones al Servidor

Se utiliza React Query (TanStack Query) para las peticiones:

```typescript
const mutation = useMutation({
  mutationFn: async (data: FormValues) => {
    return await apiRequest("POST", "/api/reservations", data);
  },
  onSuccess: () => {
    // Manejo de éxito
  },
  onError: (error) => {
    // Manejo de error
  }
});
```

## Desarrollo Backend

### Estructura de Almacenamiento

Actualmente se utiliza una implementación en memoria:

```typescript
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private reservations: Map<number, Reservation>;
  private userId: number;
  private reservationId: number;
  
  // Métodos para manipular los datos
}
```

### Endpoints API

Principales endpoints:

- `POST /api/reservations`: Crear una nueva reserva
- `GET /api/reservations`: Obtener todas las reservas

## Esquemas de Datos

### Usuarios
```typescript
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});
```

### Reservas
```typescript
export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  players: text("players").notNull(),
  equipment: text("equipment").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});
```

## Flujo de Trabajo de Desarrollo

1. **Crear/Modificar Esquemas**: Actualizar `shared/schema.ts` si es necesario
2. **Actualizar Storage**: Modificar la interfaz e implementación en `server/storage.ts`
3. **Actualizar Endpoints**: Añadir/modificar rutas en `server/routes.ts`
4. **Desarrollar UI**: Crear/modificar componentes en `/client/src/components`
5. **Probar**: Verificar funcionalidad en desarrollo con `npm run dev`

## Mejores Prácticas

1. **Validación de Datos**: Siempre validar datos tanto en cliente como en servidor
2. **Manejo de Errores**: Capturar y manejar adecuadamente todos los errores
3. **Comentarios**: Documentar código complejo o no evidente
4. **Diseño Responsivo**: Asegurar que todos los componentes funcionen en múltiples tamaños de pantalla
5. **Optimización de Imágenes**: Utilizar formatos modernos y tamaños adecuados

## Extensiones Futuras Planificadas

1. **Sistema de Autenticación**: Implementar login y registro de usuarios
2. **Panel Administrativo**: Para gestionar reservas, usuarios y contenido
3. **Pasarela de Pago**: Integración con sistemas de pago online
4. **Notificaciones**: Sistema de emails para confirmación de reservas
5. **Base de Datos**: Migración a almacenamiento persistente

---

Documento creado para el equipo de desarrollo de Zona Táctica Atacama.