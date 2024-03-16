import express from 'express';
import { registerUserController } from '../controllers/authControllers.js';
import { loginUserController } from '../controllers/authControllers.js';
import { contactDetailController, createEventController, deleteEventGuestController, getEventController, getEventGuestController, getVenuesController, postEventGuestController } from '../controllers/eventControllers.js';
import { authenticateUser } from '../controllers/authMiddleware.js';
import { matchTokenFormat } from '../controllers/authMatch.js';
import { sendInvitationsController } from '../controllers/rsvpController.js';
import { addVenueAvailabilityController, addVenuesController, deleteVenueController, getVenueAvailabilityController } from '../controllers/adminController.js';
const router = express.Router();

// Handle user registration
router.post('/register', registerUserController);
router.post('/availability', addVenueAvailabilityController);
router.get('/venue/:venueId/availability',getVenueAvailabilityController);
router.post('/login', loginUserController);
router.get('/venue', getVenuesController);
router.post('/venue', addVenuesController);
router.delete('/venue/:venueID', deleteVenueController);
router.post('/event', authenticateUser, createEventController); 
router.post('/contact', authenticateUser, contactDetailController); 
router.get('/event',  authenticateUser, getEventController); 
router.get('/guest', authenticateUser, getEventGuestController);
router.post('/guest', authenticateUser, postEventGuestController);
router.delete('/guest/:eventGuestID', deleteEventGuestController);
router.post('/match', matchTokenFormat );
router.post('/rsvp', sendInvitationsController);

// router.post('/sendemail', main );

export default router;
