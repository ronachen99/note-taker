// Import required dependencies
const router = require('express').Router();
const { readAndAppend, readFromFile, writeToFile} = require('../../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// Route for reading the content and send the response in JSON formatted data
router.get('/', (req, res) => {
  readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));
});

// Route for recieveing a POST request
router.post('/', (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    readAndAppend(newNote, './db/db.json');
    res.json('Note added successfully! 📖');
  } else {
    res.error('Oh no, something went wrong!');
  }
});

// Route for recieving a DELETE request for the selected note from the array
router.delete('/:id', (req, res) => {
  const noteId  = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const newNotes = json.filter((note) => note.id !== noteId);
      writeToFile('./db/db.json', newNotes);
      res.json("Note has been deleted 🗑️");
    });
})

// Export the router module 
module.exports = router;