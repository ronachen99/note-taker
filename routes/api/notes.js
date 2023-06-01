const router = require('express').Router();
const { readAndAppend, readFromFile } = require('../../helpers/fsUtils');

router.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/', (req, res) => {
  console.log("Adding the notes!📖")
  console.log(req.body)
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
    };
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully! 📖`);
  } else {
    res.error('Oh no, something went wrong!');
  }
});

module.exports = router;