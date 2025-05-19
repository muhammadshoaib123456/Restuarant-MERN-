import express from 'express';
import { sendReservation } from '../controller/reservationData.js';
const router = express.Router();   // create instense of router

router.post("/send", sendReservation);


export default router;

