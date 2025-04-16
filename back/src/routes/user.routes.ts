import { authenticate } from '../middlewares/authmiddleware';
import { createReservation, getAllTimeStamps } from '../controllers/user.controller';
import { Router } from 'express';


const router = Router();

router.get('/allTimes',authenticate, getAllTimeStamps); 
router.get('/reservation',authenticate, createReservation); 

export default router;