import { createEvent } from '../database/eventQueries.js';
import { getVenues } from '../database/userQueries.js';// Replace with your actual venue module

export async function getVenuesController(req, res) {
  try {
    // Call the getVenues function to fetch venue data
    const venues = await getVenues();

    // Adjust the response based on your application's needs
    res.status(200).send({ venues });
  } catch (error) {
    console.error('Error fetching venues:', error);

    // Adjust the response based on your error handling strategy
    res.status(500).send({ error: 'Internal Server Error' });
  }
}


// eventsController.js
export async function createEventController(req, res) {
    const { eventName, eventType, eventDate, eventTime, venueID } = req.body;
    const userID = req.user.id; 
    try {
      const result = await createEvent(eventName, eventType, eventDate, eventTime, venueID, userID);
  
      // Adjust the response based on your application's needs
      res.status(201).send({ message: 'Event Created successfully', eventId: result.insertId  });
    } catch (error) {
      console.error('Error registering user:', error);
      // Adjust the response based on your error handling strategy
      res.status(500).send({ error: 'Internal Server Error' });
    }
  }
  