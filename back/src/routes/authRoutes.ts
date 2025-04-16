// src/routes/authRoutes.ts
import { login } from '../controllers/authControlers';
import { Router } from 'express'; // Importando Router corretamente
 // Importando o controlador de login

const router = Router();  // Criando o router

// Utilizando o método correto (router.post), que recebe um path e uma função de middleware
router.post('/login', login); 


export default router;