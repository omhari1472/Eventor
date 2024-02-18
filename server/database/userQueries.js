import pool from './db.js';
// import bcrypt from 'bcrypt';

async function registerUser(username, hashedPassword, email) {
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

export { registerUser };
