

import  db  from '../config/database';
import { findUser } from '../models/user.model';
import { RowDataPacket } from 'mysql2';

export async function getDataLogin(email:string) {
  const [user] = await db('userClient').where({email})
  return user as findUser
}


