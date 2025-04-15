// src/app.ts
import express from 'express';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());

// Aqui é onde você importa corretamente suas rotas
app.use('/auth', authRoutes); // agora /auth/login vai funcionar

export default app;