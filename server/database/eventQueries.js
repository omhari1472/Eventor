import {pool} from './db.js';

export async function createEvent(eventname, eventtype, eventdate, eventtime, venueid, email) {
    try {
      // console.log('Fetching user for email:', email);

      // Fetch the user's ID based on the email
      const [userRows] = await pool.query('SELECT userID FROM Users WHERE email = ?', [email]);

      // console.log('User Rows:', userRows);

      if (userRows.length === 0) {
        throw new Error('User not found'); // You can handle this case according to your application's logic
      }

      // Insert event data with the associated user ID
      const [result] = await pool.query(`
        INSERT INTO Events (eventname, eventtype, eventdate, eventtime, venueid, userID)
        VALUES (?, ?, ?, ?, ?, ?)
      `, [eventname, eventtype, eventdate, eventtime, venueid, userRows[0].userID]);


      // Optionally, you can get the inserted event's ID if needed
      // const eventId = result.insertId;

      return result;
    } catch (error) {
      throw error;
    }
}


// export async function getEventById(eventId) {
//   const query = 'SELECT * FROM events WHERE eventID = ?';

//   try {
//     const [result] = await pool.query(query, [eventId]);

//     if (result.length > 0) {
//       return result[0];
//     }

//     return null; // Return null if event is not found
//   } catch (error) {
//     console.error('Error fetching event by ID:', error);
//     throw error;
//   }
// }

export async function getAllEvents(userID) {
  const query = `
  SELECT e.*, u.*
  FROM events e
  JOIN users u ON e.userid = u.userid
  WHERE u.userid = ?
`;
// console.log("query",userID);

  try {
    const [result] = await pool.query(query, [userID]); 
    return result;
  } catch (error) {
    console.error('Error fetching all events:', error);
    throw error;
  }
}

export async function postEventGuest(email, guestName, guestEmail) {
    try {
      // console.log('Fetching user for email:', email);

      // Fetch the user's ID based on the email
      const [userRows] = await pool.query('SELECT userID FROM Users WHERE email = ?', [email]);

      // console.log('User Rows:', userRows);

      if (userRows.length === 0) {
        throw new Error('User not found'); // You can handle this case according to your application's logic
      }

      // Insert event data with the associated user ID
      const [result] = await pool.query(`
        INSERT INTO EventGuests (eventID, guestName, guestEmail)
        VALUES (?, ?, ?)
      `, [ userRows[0].userID , guestName, guestEmail ]);

      // Optionally, you can get the inserted event's ID if needed
      // const eventId = result.insertId;

      return result;
    } catch (error) {
      throw error;
    }
}

export async function deleteEventGuest(eventGuestID) {
  // Adjust the SQL query based on your database structure
  const query = 'DELETE FROM eventGuests WHERE eventGuestID = ?';

  try {
    const result = await pool.query(query, [eventGuestID]);
    return result;
  } catch (error) {
    throw error;
  }
}
