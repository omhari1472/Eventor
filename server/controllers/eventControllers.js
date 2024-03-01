import { createEvent, postEventGuest } from '../database/eventQueries.js';
import { deleteEventGuest, getEventGuest, getVenues } from '../database/userQueries.js';// Replace with your actual venue module

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
      const result = await createEvent(eventName, eventType, eventDate, eventTime, venueID, req.user.email); // Pass user email
      
      // Adjust the response based on your application's needs
      res.status(201).send({ message: 'Event Created successfully', eventId: result.insertId  });
    } catch (error) {
      console.error('Error creating event:', error);
      // Adjust the response based on your error handling strategy
      res.status(500).send({ error: 'Internal Server Error' });
    }
}

export async function postEventGuestController(req, res) {
  const { guestName, guestEmail } = req.body;
  const userID = req.user.id; 

  try {
    const result = await postEventGuest(req.user.email, guestName, guestEmail); // Pass user email

    // Assuming postEventGuest returns the newly created guest
    const newGuest = {
      eventGuestID: result.insertId,
      guestName,
      guestEmail,
      // Include any other relevant properties from the result
  };

    // Adjust the response based on your application's needs
    res.status(201).send({ message: 'Guest Added successfully', newGuest });
  } catch (error) {
    console.error('Error adding guest:', error);
    // Adjust the response based on your error handling strategy
    res.status(500).send({ error: 'Internal Server Error' });
  }
}


// export async function getEventGuestController(req, res) {
//     const { guestName, guestEmail} = req.body;
//     const userID = req.user.id; 

//     try {
//       const result = await postEventGuest(req.user.email,guestName, guestEmail); // Pass user email
      
//       // Adjust the response based on your application's needs
//       res.status(201).send({ message: 'Guest Added successfully', eventGuestID: result.insertId  });
//     } catch (error) {
//       console.error('Error creating event:', error);
//       // Adjust the response based on your error handling strategy
//       res.status(500).send({ error: 'Internal Server Error' });
//     }
// }

export async function getEventGuestController(req, res) {
  try {
    // Call the getVenues function to fetch venue data
    const guests = await getEventGuest();

    // Adjust the response based on your application's needs
    res.status(200).send({ guests });
  } catch (error) {
    console.error('Error fetching venues:', error);

    // Adjust the response based on your error handling strategy
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

// export async function deleteEventGuestController(req, res) {
//   try {
//     const { guestId } = req.params; // Assuming guestId is passed in the URL parameters

//     // Call the deleteEventGuest function to delete the guest
//     const result = await deleteEventGuest(guestId);

//     // Adjust the response based on your application's needs
//     if (result.affectedRows > 0) {
//       res.status(200).send({ message: 'Guest deleted successfully' });
//     } else {
//       res.status(404).send({ error: 'Guest not found' });
//     }
//   } catch (error) {
//     console.error('Error deleting guest:', error);

//     // Adjust the response based on your error handling strategy
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// }


export async function deleteEventGuestController(req, res) {
  const { eventGuestID } = req.params;
  // console.log('Deleting guest with ID:', eventGuestID);

  try {
    // Call your delete function from the database
    await deleteEventGuest(eventGuestID);

    res.status(200).send({ message: 'Guest Deleted successfully' });
  } catch (error) {
    console.error('Error deleting guest:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}
