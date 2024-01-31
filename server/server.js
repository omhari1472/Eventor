import express from 'express'

import { getNotes,createNote,deleteNote } from './database.js'

const app = express()

app.use(express.json())

app.get("/notes", async (req, res) => {
  const notes = await getNotes()
  res.send(notes)
})
app.delete("/notes", async (req, res) => {
  const notes = await deleteNote()
  res.send(notes)
})

// app.get("/notes/:id", async (req, res) => {
//   const id = req.params.id
//   const note = await getNote(id)
//   res.send(note)
// })

app.post("/notes", async (req, res) => {
  const { act_id,act_name, act_gender } = req.body
  const note = await createNote(act_id,act_name,act_gender)
  res.status(201).send(note)
})


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke 💩')
})

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})