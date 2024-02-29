import express from 'express';
import { registerUserController } from '../controllers/authControllers.js';
import { loginUserController } from '../controllers/authControllers.js';
import { createEventController, getVenuesController } from '../controllers/eventControllers.js';
import { authenticateUser } from '../controllers/authMiddleware.js';
import { matchTokenFormat } from '../controllers/authMatch.js';
import {sendInvitations} from '../controllers/rsvpController.js';
const router = express.Router();

// Handle user registration
router.post('/register', registerUserController);
router.post('/login', loginUserController);
router.get('/venue', getVenuesController);
router.post('/event', authenticateUser, createEventController);
router.post('/match', matchTokenFormat );
router.post('/rsvp', sendInvitations );
// router.post('/sendemail', main );

export default router;
