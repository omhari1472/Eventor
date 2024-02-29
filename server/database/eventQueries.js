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
