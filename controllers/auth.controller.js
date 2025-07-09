import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { loginService } from '../services/auth.service.js';

dotenv.config();

export const loginController = (req, res) => {
  const { username, password } = req.body;

  const user = loginService(username, password);
  if (!user) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  // Generar JWT
  const token = jwt.sign(
    { username: user.username }, // Payload
    process.env.JWT_SECRET_KEY,
    { expiresIn: '1h' }
  );

  res.json({ token: `Bearer ${token}` });
};
