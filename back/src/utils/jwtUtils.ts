
import jwt from 'jsonwebtoken';

const secretKey = String(process.env.JWT_PASSWORD);  

export function generateToken(payload: any): string {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Expira em 1 hora
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;  // Se o token for inválido ou expirado
  }
}
