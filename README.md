# Talento Tech - Backend Node.js 2025 - Proyecto Final

# 📦 Node.js Backend API
API RESTful desarrollada con Node.js, Express, Firebase Firestore y JWT como autenticación. Forma parte del proyecto final del curso de Backend con Node.js de **Talento Tech 2025**

# 🚀 Tecnologías utilizadas:
    - Node.js
    - Express
    - Firebase Firestore
    - JSON Web Tokens (JWT)
    - dotenv
    - body-parser
    - cors

# 🔧 Instalación:

1. Cloná el repositorio:
    - git clone https://github.com/MartinRot/proyecto-final-talentotech
    - cd proyecto-final-talentotech

2. Instalá las dependencias
    - npm install

3. Configurá las variables de entorno en un archivo .env: (Las encontras en config/firebase.js)
    - PORT=3000
    - JWT_SECRET_KEY=tu_clave_secreta
    - FIREBASE_API_KEY=...
    - FIREBASE_AUTH_DOMAIN=...
    - FIREBASE_PROJECT_ID=...
    - FIREBASE_STORAGE_BUCKET=...
    - FIREBASE_MESSAGING_SENDER_ID=...
    - FIREBASE_APP_ID=...

4. Iniciá el proyecto:
    - npm run start

# 📂 Estructura del proyecto
    ├── controllers/         → Controladores de las rutas
    ├── models/              → Acceso a datos en Firestore
    ├── services/            → Lógica
    ├── routes/              → Definición de rutas
    ├── middlewares/         → Middleware de autenticación
    ├── config/              → Configuración de Firebase
    ├── .env                 → Variables de entorno
    └── index.js             → Archivo principal

# 🔐 Autenticación
    - Para acceder a algunas rutas necesitás autenticarte con el endpoint /auth/login.
    - Usuario y contraseña por defecto: { "username": "admin", "password": "123456" }
    - Te devolverá un Bearer Token que deberás enviar en las rutas protegidas.

# 🔗 Rutas disponibles
| Método | Ruta                   | Descripción                                     |
| ------ | ---------------------- | ----------------------------------------------- |
| GET    | `/api/products`        | Devuelve la lista de productos                  |
| GET    | `/api/products/:id`    | Devuelve un producto por ID                     |
| POST   | `/api/products/create` | Crea un nuevo producto (**requiere token**)     |
| DELETE | `/api/products/:id`    | Elimina un producto por ID (**requiere token**) |
| POST   | `/auth/login`          | Devuelve un token JWT para autenticarse         |

# 📄 Ejemplo de uso con Postman

1. Login:
    - POST /auth/login
    - Body JSON: { "username": "admin", "password": "123456" }
    - Respuesta: { "token": "Bearer eyJhbGciOi..." }

2. Agregar un producto:
    - POST /api/products/create
    - Header: Authorization: Bearer eyJhbGciOi...
    - Body JSON: { "name": "Nuevo producto", "price": 500 }

3. Ver lista de productos
    - GET /api/products

4. Ver producto segun ID
    - GET /api/products/123

5. Eliminar un producto segun ID
    - DELETE /api/products/123
    - Header: Authorization: Bearer eyJhbGciOi...