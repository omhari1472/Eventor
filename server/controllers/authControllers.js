import { registerUser } from '../database/userQueries.js';
import bcrypt from 'bcrypt';

async function registerUserController(req, res) {
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

export { registerUserController };
