import { registerUser } from '../database/userQueries.js';
import pool from '../database/db.js';
import bcrypt from 'bcrypt';

export async function registerUserController(req, res) {
  const { username, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const registrationResult = await registerUser(username, hashedPassword, email);

    // Adjust the response based on your application's needs
    res.status(201).send({ message: 'User registered successfully', user: registrationResult });
  } catch (error) {
    console.error('Error registering user:', error);
    // Adjust the response based on your error handling strategy
    res.status(500).send({ error: 'Internal Server Error' });
  }
}


export async function loginUserController(req, res) {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const [userRows] = await pool.query('SELECT * FROM Users WHERE email = ?', [email]);

    if (userRows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = userRows[0];

    // Compare the entered password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // You can create and send a token for authentication if the login is successful
    // For simplicity, I'll just send a success message here
    res.status(200).json({ message: 'Login successful', user: { username: user.username, email: user.email } });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

