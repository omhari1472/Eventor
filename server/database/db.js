import mysql from 'mysql2'
import dotenv from 'dotenv';
import { config_path } from '../secret/configpath.js';

// Load environment variables from .env file
dotenv.config({
  path:config_path,
});
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise();

export default pool;
