// src/app.ts
import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/user.routes';
import cors from 'cors'

const app = express();
app.use(cors());

app.use(express.json());


app.use('/auth', authRoutes); 
app.use('/user', userRoutes );

export default app;