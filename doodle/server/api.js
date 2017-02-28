const express = require('express');
const jsonFile = require('jsonfile');

const router = express.Router();

const FILE = '/tmp/data.json';

// GET api listing
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/objects1', (req, res) => {

  const matrix = {
    objects: [
      {name: 'Guitar', attributes: ['1', '1', '1', '1']},
      {name: 'Trumpet', attributes: ['0', '0', '0', '0']},
      {name: 'Violin', attributes: ['1', '1', '1', '0']}
    ],
    attributes: ['String', 'Vulture', 'Deck', 'Bolt']
  };

  jsonFile.writeFile(FILE, JSON.stringify(matrix));

  res.status(200).send('SAVED');
});

router.get('/objects', (req, res) => jsonFile.readFile(FILE, (error, obj) => res.status(200).json(JSON.parse(obj))));

module.exports = router;
