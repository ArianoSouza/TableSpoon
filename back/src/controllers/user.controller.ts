import { Request, Response } from 'express';
import { comparePassword } from '../utils/authUtils';
import { generateToken } from '../utils/jwtUtils';
import { getTimeStampOfTables} from '../services/user.service';
import { findUser } from '../models/user.model';
import db from '../config/database';

export async function getAllTimeStamps(req:Request,res:Response): Promise<any> {
    const { data } = req.query;
    if (!data) {
        return res.status(400).json({ error: 'Parâmetro "data" é obrigatório.' });
      }

    const getAllData  = await db('restTable').select('avalibleTime','id').where('dataTable', '=', data);


      return res.status(200).json({ getAllData });
}

export async function createReservation(req:Request,res:Response): Promise<any> {
    const { size, time } = req.query;
    if (!size || !time) {
        return res.status(400).json({ error: 'Insira parametros válidos.' });
      }

      const getAllData  = await db('restTable').select('avalibleTime','id')
      const result = getAllData.find((d) => d.avalibleTime.includes(time))?.id
      const resulttotrim = getAllData.find((d) => d.avalibleTime.includes(time))
      const trim = resulttotrim.avalibleTime.filter((d:string)=> d !== time)
   if (result == undefined ){
    return res.status(400).json({ error: 'id fora do lenght' });
   }
      try {
        await db('restTable').where( 'id', '=', result ).update({ avalibleTime: JSON.stringify(trim) });
        await db('reservations').insert({ userid:1, tableid:result, size:6,reservationTimeStamp:time});
        return res.status(201).json({ message: trim });
      } catch (error) {
        console.error('Erro ao realizar reserva:', error);
        return res.status(500).json({ error: 'Erro interno ao realizar reserva' });
      }
    
}




