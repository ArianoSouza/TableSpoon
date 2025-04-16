

import  db  from '../config/database';
import { findUser } from '../models/user.model';
import { RowDataPacket } from 'mysql2';

export async function getDataLogin(email:string) {
  const [user] = await db('userClient').where({email})
  return user as findUser
}


export async function getTimeStampOfTables() {
  const [timeStamp] = await db('restTable').select('avalibleTime')
  const [reservations] = await db('reservations').select('reservationTimeStamp')

  const filterAvalibleReservations = timeStamp.filter((data:string)=>{data !== reservations})
  return timeStamp && reservations
}