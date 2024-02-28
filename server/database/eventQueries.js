import pool from './db.js';

export async function createEvent(eventname, eventtype, eventdate, eventtime, venueid) {
    try {
      const [result] = await pool.query(`
        INSERT INTO Events (eventname, eventtype, eventdate, eventtime, venueid)
        VALUES (?, ?, ?, ?, ?)
      `, [eventname, eventtype, eventdate, eventtime, venueid]);
  
      // Optionally, you can get the inserted event's ID if needed
      // const eventId = result.insertId;
  
      return result;
    } catch (error) {
      throw error;
    }
}
