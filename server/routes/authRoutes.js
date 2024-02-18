import express from 'express';
import { registerUserController } from '../controllers/authControllers.js';
import { loginUserController } from '../controllers/authControllers.js';

const router = express.Router();

// Handle user registration
router.post('/register', registerUserController);
router.post('/login', loginUserController);

export default router;
