# Instrucciones de Instalación - Zona Táctica Atacama

Este documento contiene las instrucciones para instalar, configurar y desplegar el sitio web de Zona Táctica Atacama en diferentes entornos.

## Requisitos Previos

- **Node.js**: Versión 20.x o superior
- **npm**: Versión 10.x o superior
- **Editor de código**: VS Code recomendado con extensiones para React y TypeScript

## Instalación en Entorno Local

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd zona-tactica-atacama
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
# Entorno
NODE_ENV=development

# Puerto del servidor
PORT=5000
```

### 4. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

El sitio web estará disponible en `http://localhost:5000`.

## Estructura de Directorios

```
/
├── client/                 # Frontend de la aplicación
│   ├── src/                # Código fuente
│   │   ├── components/     # Componentes React
│   │   ├── hooks/          # Hooks personalizados
│   │   ├── lib/            # Utilidades y configuraciones
│   │   ├── pages/          # Páginas principales
│   │   ├── App.tsx         # Componente principal
│   │   └── main.tsx        # Punto de entrada
│   └── index.html          # Plantilla HTML
├── server/                 # Backend de la aplicación
│   ├── index.ts            # Punto de entrada del servidor
│   ├── routes.ts           # Endpoints de la API
│   ├── storage.ts          # Almacenamiento de datos
│   └── vite.ts             # Configuración de Vite
├── shared/                 # Código compartido
│   └── schema.ts           # Esquemas de datos
├── package.json            # Dependencias y scripts
├── tsconfig.json           # Configuración de TypeScript
└── vite.config.ts          # Configuración de Vite
```

## Scripts Disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo
- **`npm run build`**: Construye la aplicación para producción
- **`npm run start`**: Inicia la aplicación en modo producción
- **`npm run lint`**: Ejecuta el linter para verificar el código
- **`npm run type-check`**: Verifica los tipos de TypeScript

## Guía de Despliegue

### Preparación para Producción

1. **Construir la Aplicación**

```bash
npm run build
```

Esto generará archivos optimizados en la carpeta `/dist`.

2. **Verificar la Construcción**

```bash
npm run preview
```

### Despliegue en Servicios de Hosting

#### Opción 1: Replit

1. Importa el proyecto a Replit
2. Asegúrate de que el archivo `.replit` contenga la configuración correcta
3. Ejecuta el proyecto en Replit
4. Usa el botón "Deploy" en la interfaz de Replit

#### Opción 2: Vercel

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno necesarias
3. Despliega con la configuración predeterminada

#### Opción 3: Servidor Propio

1. Transfiere los archivos de `/dist` a tu servidor
2. Configura un servidor web (Nginx o Apache) para servir los archivos estáticos
3. Configura un proxy para los endpoints de la API

```nginx
# Ejemplo de configuración de Nginx
server {
    listen 80;
    server_name zonatactica.cl www.zonatactica.cl;

    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Solución de Problemas Comunes

### El servidor no inicia

- Verifica que el puerto 5000 no esté siendo utilizado por otra aplicación
- Comprueba que todas las dependencias estén instaladas correctamente
- Verifica los logs de error en la consola

### Errores de compilación

- Ejecuta `npm run lint` y corrige los errores reportados
- Verifica que todas las importaciones sean correctas
- Comprueba que no haya errores de tipos con `npm run type-check`

### Problemas con la API

- Verifica que el servidor esté ejecutándose en el puerto correcto
- Comprueba las rutas de la API en `server/routes.ts`
- Revisa los logs del servidor para identificar errores

## Mantenimiento

### Actualización de Dependencias

Regularmente ejecuta:

```bash
npm outdated
npm update
```

Para actualizaciones mayores que pueden contener cambios importantes:

```bash
npx npm-check-updates -u
npm install
```

### Respaldo de Datos

Si implementas una base de datos persistente, asegúrate de configurar respaldos periódicos según la estrategia elegida.

---

Para más información técnica sobre el desarrollo, consulta el archivo `GUIA-DESARROLLO.md`.