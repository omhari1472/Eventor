import express from 'express';
import { registerUserController } from '../controllers/authControllers.js';
import { loginUserController } from '../controllers/authControllers.js';
import { createEventController, deleteEventGuestController, getEventGuestController, getVenuesController, postEventGuestController } from '../controllers/eventControllers.js';
import { authenticateUser } from '../controllers/authMiddleware.js';
import { matchTokenFormat } from '../controllers/authMatch.js';
import { sendInvitationsController } from '../controllers/rsvpController.js';
const router = express.Router();

// Handle user registration
router.post('/register', registerUserController);
router.post('/login', loginUserController);
router.get('/venue', getVenuesController);
router.get('/guest', getEventGuestController);
router.post('/event', authenticateUser, createEventController);
router.post('/guest', authenticateUser, postEventGuestController);
router.post('/match', matchTokenFormat );
router.post('/rsvp', sendInvitationsController);
router.delete('/guest/:eventGuestID', deleteEventGuestController);

// router.post('/sendemail', main );

export default router;
