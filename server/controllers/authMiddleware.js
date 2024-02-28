import jwt from 'jsonwebtoken';
import pool from '../database/db.js';


export async function authenticateUser(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - No token provided' });
  }

  try {
    const decoded = jwt.verify(token, "eventor");

    console.log('Decoded Token:', decoded); // Log the decoded token for troubleshooting

    const [userRows] = await pool.query('SELECT * FROM Users WHERE email = ?', [decoded.email]);

    if (userRows.length === 0) {
      return res.status(401).json({ error: 'Unauthorized - User not found' });
    }

    const user = userRows[0];
    req.user = user; // Attach user information to the request object
    next();
  } catch (error) {
    console.error('Error during token verification:', error);
    return res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }
}
