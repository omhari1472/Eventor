import mysql from 'mysql2'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movie_db'
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