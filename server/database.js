import mysql from 'mysql2'

import dotenv from 'dotenv';
import { config_path } from './secret/configpath.js';

// Load environment variables from .env file
dotenv.config({
  path:config_path,
});

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

export async function getNotes() {
  const [rows] = await pool.query("select * from actor" )
  return rows
}
export async function deleteNote() {
  const [rows] = await pool.query("delete from actor where act_id=305" )
  return getNotes()
}

// export async function getNote(id) {
//   const [rows] = await pool.query(`
//   SELECT * 
//   FROM notes
//   WHERE id = ?
//   `, [id])
//   return rows[0]
// }

export async function createNote(act_id, act_name,act_gender) {
  const [result] = await pool.query(`
  INSERT INTO actor (act_id, act_name,act_gender)
  VALUES (?, ?, ?)
  `, [act_id, act_name,act_gender])
//   const id = result.insertId
  return getNotes();
}