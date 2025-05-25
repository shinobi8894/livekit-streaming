import { Router } from 'express';
import { createRoom, generateToken } from '../controllers/roomController';

const router = Router();

router.post('/create-room', createRoom);
router.post('/token', generateToken);

export default router;
