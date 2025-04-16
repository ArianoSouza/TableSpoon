// src/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwtUtils';

export function authenticate(req: Request, res: Response, next: NextFunction):any {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ mensagem: 'Acesso não autorizado. Token não fornecido.' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ mensagem: 'Token inválido ou expirado.' });
  }

  next();
}