// Importaciones
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Importar las rutas
import productsRouter from './routes/products.routes.js';
import authRouter from './routes/auth.routes.js';

// Configurar variables de entorno
dotenv.config();

// Crear la app
const app = express();

// Middlewares globales
app.use(cors());// Habilita CORS para peticiones externas
app.use(bodyParser.json()); // Permite recibir datos en formato JSON

// Rutas
app.use('/api', productsRouter);// /api/products...
app.use('/auth', authRouter);// /auth/login

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Middleware 404 para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Configurar puerto desde .env o usar 3000 por defecto
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
