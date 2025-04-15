import { Request, Response } from 'express';
import { comparePassword } from '../utils/authUtils';
import { generateToken } from '../utils/jwtUtils';
import { getDataLogin} from '../services/user.service';
import { findUser } from '../models/user.model';
import db from '../config/database';

export async function login(req:Request, res:Response): Promise<any> {
    const { email, password } = req.body;

    const [user] = await db('userClient').where({ email });
  
    if (!user.email) {
      return res.status(400).json({ mensagem: 'não tem' });
    }
  
    const isPasswordValid = ()=>{if(password===user.userPassword){return true}else{return false}}
  
    if (!isPasswordValid) {
      
      return res.status(400).json({ mensagem: `Email ou senha incorretos ${user.userPassword}` });
    }
  
    const token = generateToken({ id: user.id, email: user.email });
  
    return res.status(200).json({ token });
}