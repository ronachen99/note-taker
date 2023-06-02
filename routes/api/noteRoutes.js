// Import required dependencies
const router = require('express').Router();
const fs = require('fs/promises')
const { v4: uuidv4 } = require('uuid');

const readData = async () => {
  try {
    var data = await fs.readFile('./db/db.json', 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.log(error)
  }
}

// Route for reading the content and send the response in JSON formatted data
router.get('/', async (req, res) => {
  var data = await readData()
  res.json(data)
});

// Route for recieveing a POST HTTP request method
router.post('/', async (req, res) => {
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    const notes = await readData()
    notes.push(newNote)
    await fs.writeFile('./db/db.json', JSON.stringify(notes, null, 4))
    res.json('Note added successfully! 📖');
  } else {
    res.error('Oh no, something went wrong!');
  }
});

// Route for recieving a DELETE HTTP request method for the selected note from the array
router.delete('/:id', async (req, res) => {
  console.log(req.params)
  const noteId = req.params.id;
  var notes = await readData()
  const newNotes = notes.filter((note) => note.id !== noteId);
  await fs.writeFile('./db/db.json', JSON.stringify(newNotes, null, 4))
  res.json("Note has been deleted 🗑️");
})

// Export the router module 
module.exports = router;