import pool from './db.js';
// import bcrypt from 'bcrypt';

export async function registerUser(username, hashedPassword, email) {
  try {
    const [result] = await pool.query(`
      INSERT INTO Users (username, password, email)
      VALUES (?, ?, ?)
    `, [username, hashedPassword, email]);

    // Optionally, you can get the inserted user's ID if needed
    // const userId = result.insertId;

    return result;
  } catch (error) {
    throw error;
  }
}


export async function loginUser(email) {
  try {
    const [userRows] = await pool.query('SELECT * FROM Users WHERE email = ?', [email]);
    return userRows.length > 0 ? userRows[0] : null;
  } catch (error) {
    throw error;
  }
}


export async function getVenues() {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM venues');
    return rows;
  } catch (error) {
    throw error;
  }
}

